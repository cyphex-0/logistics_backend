export function parsePagination(query: Record<string, unknown>): { page: number; limit: number } {
  let page = parseInt(query.page as string, 10);
  let limit = parseInt(query.limit as string, 10);

  if (isNaN(page) || page <= 0) page = 1;
  if (isNaN(limit) || limit <= 0) limit = 10;
  if (limit > 50) limit = 50;

  return { page, limit };
}

export function buildMeta(total: number, page: number, limit: number) {
  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit)
  };
}
