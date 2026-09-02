import { Prisma, Role, ShipmentStatus } from '../../generated/prisma/index.js';
import { prisma, basePrisma } from '../../shared/prisma/client.js';

export const PUBLIC_USER_SELECT = {
  id: true,
  email: true,
  name: true,
  phone: true,
  avatar: true,
  role: true,
  serviceArea: true,
  isAvailable: true,
  isActive: true,
  createdAt: true,
  updatedAt: true
} satisfies Prisma.UserSelect;

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  async findByGoogleId(googleId: string) {
    return prisma.user.findUnique({ where: { googleId } });
  }

  async findById(id: string) {
    // using findFirst because soft-delete extension does not cover findUnique
    return prisma.user.findFirst({ where: { id } });
  }

  async findPublicById(id: string) {
    return prisma.user.findFirst({
      where: { id },
      select: PUBLIC_USER_SELECT
    });
  }

  async create(data: Prisma.UserCreateInput, tx?: Prisma.TransactionClient) {
    const client = tx ?? prisma;
    return client.user.create({ data });
  }

  async updateRefreshToken(
    id: string,
    refreshTokenHash: string | null,
    tx?: Prisma.TransactionClient
  ) {
    const client = tx ?? prisma;
    return client.user.update({
      where: { id },
      data: { refreshToken: refreshTokenHash }
    });
  }

  async updateProfile(id: string, data: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: { id },
      data,
      select: PUBLIC_USER_SELECT
    });
  }

  async linkGoogleId(id: string, googleId: string) {
    return prisma.user.update({
      where: { id },
      data: { googleId }
    });
  }

  async findManyAdmin(query: any) {
    const { role, isActive, page = 1, limit = 10 } = query;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const where: any = {};
    if (role) where.role = role;
    if (isActive !== undefined) where.isActive = isActive === 'true';

    // Use basePrisma to bypass the soft-delete filter
    const [total, data] = await Promise.all([
      basePrisma.user.count({ where }),
      basePrisma.user.findMany({
        where,
        skip,
        take,
        select: PUBLIC_USER_SELECT,
        orderBy: { createdAt: 'desc' }
      })
    ]);

    return { total, page: Number(page), limit: take, data };
  }

  async updateRole(id: string, role: Role) {
    return prisma.user.update({
      where: { id },
      data: { role },
      select: PUBLIC_USER_SELECT
    });
  }

  async softDelete(id: string) {
    return basePrisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false
      }
    });
  }

  async countActiveShipmentsForUser(id: string) {
    const activeStatuses = [
      ShipmentStatus.PENDING,
      ShipmentStatus.CONFIRMED,
      ShipmentStatus.IN_TRANSIT,
      ShipmentStatus.OUT_FOR_DELIVERY
    ];
    return basePrisma.shipment.count({
      where: {
        OR: [
          { customerId: id, status: { in: activeStatuses } },
          { courierId: id, status: { in: activeStatuses } }
        ],
        deletedAt: null // We only care about non-deleted shipments
      }
    });
  }
}

export const userRepository = new UserRepository();
