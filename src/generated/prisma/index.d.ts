
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model Parcel
 * 
 */
export type Parcel = $Result.DefaultSelection<Prisma.$ParcelPayload>
/**
 * Model TrackingEvent
 * 
 */
export type TrackingEvent = $Result.DefaultSelection<Prisma.$TrackingEventPayload>
/**
 * Model DeliveryAttempt
 * 
 */
export type DeliveryAttempt = $Result.DefaultSelection<Prisma.$DeliveryAttemptPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model DeliveryZone
 * 
 */
export type DeliveryZone = $Result.DefaultSelection<Prisma.$DeliveryZonePayload>
/**
 * Model PricingRule
 * 
 */
export type PricingRule = $Result.DefaultSelection<Prisma.$PricingRulePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  COURIER: 'COURIER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ShipmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PICKUP_ASSIGNED: 'PICKUP_ASSIGNED',
  PICKED_UP: 'PICKED_UP',
  IN_TRANSIT: 'IN_TRANSIT',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  FAILED_DELIVERY: 'FAILED_DELIVERY',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const ServiceType: {
  STANDARD: 'STANDARD',
  EXPRESS: 'EXPRESS'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const PaymentStatus: {
  INITIATED: 'INITIATED',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  EXPIRED: 'EXPIRED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  STRIPE: 'STRIPE',
  BKASH: 'BKASH'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const DeliveryAttemptStatus: {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type DeliveryAttemptStatus = (typeof DeliveryAttemptStatus)[keyof typeof DeliveryAttemptStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type DeliveryAttemptStatus = $Enums.DeliveryAttemptStatus

export const DeliveryAttemptStatus: typeof $Enums.DeliveryAttemptStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcel`: Exposes CRUD operations for the **Parcel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcel.findMany()
    * ```
    */
  get parcel(): Prisma.ParcelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackingEvent`: Exposes CRUD operations for the **TrackingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingEvents
    * const trackingEvents = await prisma.trackingEvent.findMany()
    * ```
    */
  get trackingEvent(): Prisma.TrackingEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryAttempt`: Exposes CRUD operations for the **DeliveryAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryAttempts
    * const deliveryAttempts = await prisma.deliveryAttempt.findMany()
    * ```
    */
  get deliveryAttempt(): Prisma.DeliveryAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryZone`: Exposes CRUD operations for the **DeliveryZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryZones
    * const deliveryZones = await prisma.deliveryZone.findMany()
    * ```
    */
  get deliveryZone(): Prisma.DeliveryZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingRule`: Exposes CRUD operations for the **PricingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingRules
    * const pricingRules = await prisma.pricingRule.findMany()
    * ```
    */
  get pricingRule(): Prisma.PricingRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Shipment: 'Shipment',
    Parcel: 'Parcel',
    TrackingEvent: 'TrackingEvent',
    DeliveryAttempt: 'DeliveryAttempt',
    Payment: 'Payment',
    DeliveryZone: 'DeliveryZone',
    PricingRule: 'PricingRule',
    AuditLog: 'AuditLog',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shipment" | "parcel" | "trackingEvent" | "deliveryAttempt" | "payment" | "deliveryZone" | "pricingRule" | "auditLog" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      Parcel: {
        payload: Prisma.$ParcelPayload<ExtArgs>
        fields: Prisma.ParcelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findFirst: {
            args: Prisma.ParcelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findMany: {
            args: Prisma.ParcelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          create: {
            args: Prisma.ParcelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          createMany: {
            args: Prisma.ParcelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          delete: {
            args: Prisma.ParcelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          update: {
            args: Prisma.ParcelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          deleteMany: {
            args: Prisma.ParcelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          upsert: {
            args: Prisma.ParcelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          aggregate: {
            args: Prisma.ParcelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcel>
          }
          groupBy: {
            args: Prisma.ParcelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelCountAggregateOutputType> | number
          }
        }
      }
      TrackingEvent: {
        payload: Prisma.$TrackingEventPayload<ExtArgs>
        fields: Prisma.TrackingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          findFirst: {
            args: Prisma.TrackingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          findMany: {
            args: Prisma.TrackingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          create: {
            args: Prisma.TrackingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          createMany: {
            args: Prisma.TrackingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          delete: {
            args: Prisma.TrackingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          update: {
            args: Prisma.TrackingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          deleteMany: {
            args: Prisma.TrackingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          upsert: {
            args: Prisma.TrackingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          aggregate: {
            args: Prisma.TrackingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackingEvent>
          }
          groupBy: {
            args: Prisma.TrackingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingEventCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingEventCountAggregateOutputType> | number
          }
        }
      }
      DeliveryAttempt: {
        payload: Prisma.$DeliveryAttemptPayload<ExtArgs>
        fields: Prisma.DeliveryAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          findFirst: {
            args: Prisma.DeliveryAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          findMany: {
            args: Prisma.DeliveryAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>[]
          }
          create: {
            args: Prisma.DeliveryAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          createMany: {
            args: Prisma.DeliveryAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>[]
          }
          delete: {
            args: Prisma.DeliveryAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          update: {
            args: Prisma.DeliveryAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryAttemptPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryAttempt>
          }
          groupBy: {
            args: Prisma.DeliveryAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryAttemptCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      DeliveryZone: {
        payload: Prisma.$DeliveryZonePayload<ExtArgs>
        fields: Prisma.DeliveryZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          findFirst: {
            args: Prisma.DeliveryZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          findMany: {
            args: Prisma.DeliveryZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          create: {
            args: Prisma.DeliveryZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          createMany: {
            args: Prisma.DeliveryZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          delete: {
            args: Prisma.DeliveryZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          update: {
            args: Prisma.DeliveryZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          deleteMany: {
            args: Prisma.DeliveryZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>[]
          }
          upsert: {
            args: Prisma.DeliveryZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryZonePayload>
          }
          aggregate: {
            args: Prisma.DeliveryZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryZone>
          }
          groupBy: {
            args: Prisma.DeliveryZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryZoneCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryZoneCountAggregateOutputType> | number
          }
        }
      }
      PricingRule: {
        payload: Prisma.$PricingRulePayload<ExtArgs>
        fields: Prisma.PricingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findFirst: {
            args: Prisma.PricingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findMany: {
            args: Prisma.PricingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          create: {
            args: Prisma.PricingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          createMany: {
            args: Prisma.PricingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          delete: {
            args: Prisma.PricingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          update: {
            args: Prisma.PricingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          deleteMany: {
            args: Prisma.PricingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          upsert: {
            args: Prisma.PricingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          aggregate: {
            args: Prisma.PricingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingRule>
          }
          groupBy: {
            args: Prisma.PricingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shipment?: ShipmentOmit
    parcel?: ParcelOmit
    trackingEvent?: TrackingEventOmit
    deliveryAttempt?: DeliveryAttemptOmit
    payment?: PaymentOmit
    deliveryZone?: DeliveryZoneOmit
    pricingRule?: PricingRuleOmit
    auditLog?: AuditLogOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shipmentsAsCustomer: number
    shipmentsAsCourier: number
    trackingEventsActed: number
    deliveryAttempts: number
    notifications: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipmentsAsCustomer?: boolean | UserCountOutputTypeCountShipmentsAsCustomerArgs
    shipmentsAsCourier?: boolean | UserCountOutputTypeCountShipmentsAsCourierArgs
    trackingEventsActed?: boolean | UserCountOutputTypeCountTrackingEventsActedArgs
    deliveryAttempts?: boolean | UserCountOutputTypeCountDeliveryAttemptsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsAsCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrackingEventsActedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveryAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    trackingEvents: number
    deliveryAttempts: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackingEvents?: boolean | ShipmentCountOutputTypeCountTrackingEventsArgs
    deliveryAttempts?: boolean | ShipmentCountOutputTypeCountDeliveryAttemptsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountTrackingEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingEventWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountDeliveryAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryAttemptWhereInput
  }


  /**
   * Count Type DeliveryZoneCountOutputType
   */

  export type DeliveryZoneCountOutputType = {
    originShipments: number
    destinationShipments: number
    pricingRules: number
  }

  export type DeliveryZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originShipments?: boolean | DeliveryZoneCountOutputTypeCountOriginShipmentsArgs
    destinationShipments?: boolean | DeliveryZoneCountOutputTypeCountDestinationShipmentsArgs
    pricingRules?: boolean | DeliveryZoneCountOutputTypeCountPricingRulesArgs
  }

  // Custom InputTypes
  /**
   * DeliveryZoneCountOutputType without action
   */
  export type DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZoneCountOutputType
     */
    select?: DeliveryZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryZoneCountOutputType without action
   */
  export type DeliveryZoneCountOutputTypeCountOriginShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * DeliveryZoneCountOutputType without action
   */
  export type DeliveryZoneCountOutputTypeCountDestinationShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * DeliveryZoneCountOutputType without action
   */
  export type DeliveryZoneCountOutputTypeCountPricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    avatar: string | null
    googleId: string | null
    isActive: boolean | null
    isAvailable: boolean | null
    serviceArea: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    avatar: string | null
    googleId: string | null
    isActive: boolean | null
    isAvailable: boolean | null
    serviceArea: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    role: number
    avatar: number
    googleId: number
    isActive: number
    isAvailable: number
    serviceArea: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
    avatar?: true
    googleId?: true
    isActive?: true
    isAvailable?: true
    serviceArea?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
    avatar?: true
    googleId?: true
    isActive?: true
    isAvailable?: true
    serviceArea?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
    avatar?: true
    googleId?: true
    isActive?: true
    isAvailable?: true
    serviceArea?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    name: string
    phone: string | null
    role: $Enums.Role
    avatar: string | null
    googleId: string | null
    isActive: boolean
    isAvailable: boolean
    serviceArea: string | null
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    avatar?: boolean
    googleId?: boolean
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shipmentsAsCustomer?: boolean | User$shipmentsAsCustomerArgs<ExtArgs>
    shipmentsAsCourier?: boolean | User$shipmentsAsCourierArgs<ExtArgs>
    trackingEventsActed?: boolean | User$trackingEventsActedArgs<ExtArgs>
    deliveryAttempts?: boolean | User$deliveryAttemptsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    avatar?: boolean
    googleId?: boolean
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    avatar?: boolean
    googleId?: boolean
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    avatar?: boolean
    googleId?: boolean
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phone" | "role" | "avatar" | "googleId" | "isActive" | "isAvailable" | "serviceArea" | "refreshToken" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipmentsAsCustomer?: boolean | User$shipmentsAsCustomerArgs<ExtArgs>
    shipmentsAsCourier?: boolean | User$shipmentsAsCourierArgs<ExtArgs>
    trackingEventsActed?: boolean | User$trackingEventsActedArgs<ExtArgs>
    deliveryAttempts?: boolean | User$deliveryAttemptsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shipmentsAsCustomer: Prisma.$ShipmentPayload<ExtArgs>[]
      shipmentsAsCourier: Prisma.$ShipmentPayload<ExtArgs>[]
      trackingEventsActed: Prisma.$TrackingEventPayload<ExtArgs>[]
      deliveryAttempts: Prisma.$DeliveryAttemptPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string
      phone: string | null
      role: $Enums.Role
      avatar: string | null
      googleId: string | null
      isActive: boolean
      isAvailable: boolean
      serviceArea: string | null
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipmentsAsCustomer<T extends User$shipmentsAsCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentsAsCourier<T extends User$shipmentsAsCourierArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsAsCourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackingEventsActed<T extends User$trackingEventsActedArgs<ExtArgs> = {}>(args?: Subset<T, User$trackingEventsActedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryAttempts<T extends User$deliveryAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$deliveryAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isAvailable: FieldRef<"User", 'Boolean'>
    readonly serviceArea: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shipmentsAsCustomer
   */
  export type User$shipmentsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.shipmentsAsCourier
   */
  export type User$shipmentsAsCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.trackingEventsActed
   */
  export type User$trackingEventsActedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    where?: TrackingEventWhereInput
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    cursor?: TrackingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * User.deliveryAttempts
   */
  export type User$deliveryAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    where?: DeliveryAttemptWhereInput
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    cursor?: DeliveryAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    estimatedPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type ShipmentSumAggregateOutputType = {
    estimatedPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    customerId: string | null
    courierId: string | null
    status: $Enums.ShipmentStatus | null
    originAddress: string | null
    originCity: string | null
    originZoneId: string | null
    destinationAddress: string | null
    destinationCity: string | null
    destinationZoneId: string | null
    recipientName: string | null
    recipientPhone: string | null
    serviceType: $Enums.ServiceType | null
    estimatedPrice: Decimal | null
    finalPrice: Decimal | null
    notes: string | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    customerId: string | null
    courierId: string | null
    status: $Enums.ShipmentStatus | null
    originAddress: string | null
    originCity: string | null
    originZoneId: string | null
    destinationAddress: string | null
    destinationCity: string | null
    destinationZoneId: string | null
    recipientName: string | null
    recipientPhone: string | null
    serviceType: $Enums.ServiceType | null
    estimatedPrice: Decimal | null
    finalPrice: Decimal | null
    notes: string | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    trackingNumber: number
    customerId: number
    courierId: number
    status: number
    originAddress: number
    originCity: number
    originZoneId: number
    destinationAddress: number
    destinationCity: number
    destinationZoneId: number
    recipientName: number
    recipientPhone: number
    serviceType: number
    estimatedPrice: number
    finalPrice: number
    notes: number
    pickedUpAt: number
    deliveredAt: number
    cancelledAt: number
    cancellationReason: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    estimatedPrice?: true
    finalPrice?: true
  }

  export type ShipmentSumAggregateInputType = {
    estimatedPrice?: true
    finalPrice?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    trackingNumber?: true
    customerId?: true
    courierId?: true
    status?: true
    originAddress?: true
    originCity?: true
    originZoneId?: true
    destinationAddress?: true
    destinationCity?: true
    destinationZoneId?: true
    recipientName?: true
    recipientPhone?: true
    serviceType?: true
    estimatedPrice?: true
    finalPrice?: true
    notes?: true
    pickedUpAt?: true
    deliveredAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    trackingNumber?: true
    customerId?: true
    courierId?: true
    status?: true
    originAddress?: true
    originCity?: true
    originZoneId?: true
    destinationAddress?: true
    destinationCity?: true
    destinationZoneId?: true
    recipientName?: true
    recipientPhone?: true
    serviceType?: true
    estimatedPrice?: true
    finalPrice?: true
    notes?: true
    pickedUpAt?: true
    deliveredAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    trackingNumber?: true
    customerId?: true
    courierId?: true
    status?: true
    originAddress?: true
    originCity?: true
    originZoneId?: true
    destinationAddress?: true
    destinationCity?: true
    destinationZoneId?: true
    recipientName?: true
    recipientPhone?: true
    serviceType?: true
    estimatedPrice?: true
    finalPrice?: true
    notes?: true
    pickedUpAt?: true
    deliveredAt?: true
    cancelledAt?: true
    cancellationReason?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    trackingNumber: string
    customerId: string
    courierId: string | null
    status: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType: $Enums.ServiceType
    estimatedPrice: Decimal
    finalPrice: Decimal | null
    notes: string | null
    pickedUpAt: Date | null
    deliveredAt: Date | null
    cancelledAt: Date | null
    cancellationReason: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    customerId?: boolean
    courierId?: boolean
    status?: boolean
    originAddress?: boolean
    originCity?: boolean
    originZoneId?: boolean
    destinationAddress?: boolean
    destinationCity?: boolean
    destinationZoneId?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    serviceType?: boolean
    estimatedPrice?: boolean
    finalPrice?: boolean
    notes?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    parcel?: boolean | Shipment$parcelArgs<ExtArgs>
    trackingEvents?: boolean | Shipment$trackingEventsArgs<ExtArgs>
    deliveryAttempts?: boolean | Shipment$deliveryAttemptsArgs<ExtArgs>
    payment?: boolean | Shipment$paymentArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    customerId?: boolean
    courierId?: boolean
    status?: boolean
    originAddress?: boolean
    originCity?: boolean
    originZoneId?: boolean
    destinationAddress?: boolean
    destinationCity?: boolean
    destinationZoneId?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    serviceType?: boolean
    estimatedPrice?: boolean
    finalPrice?: boolean
    notes?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    customerId?: boolean
    courierId?: boolean
    status?: boolean
    originAddress?: boolean
    originCity?: boolean
    originZoneId?: boolean
    destinationAddress?: boolean
    destinationCity?: boolean
    destinationZoneId?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    serviceType?: boolean
    estimatedPrice?: boolean
    finalPrice?: boolean
    notes?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    trackingNumber?: boolean
    customerId?: boolean
    courierId?: boolean
    status?: boolean
    originAddress?: boolean
    originCity?: boolean
    originZoneId?: boolean
    destinationAddress?: boolean
    destinationCity?: boolean
    destinationZoneId?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    serviceType?: boolean
    estimatedPrice?: boolean
    finalPrice?: boolean
    notes?: boolean
    pickedUpAt?: boolean
    deliveredAt?: boolean
    cancelledAt?: boolean
    cancellationReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingNumber" | "customerId" | "courierId" | "status" | "originAddress" | "originCity" | "originZoneId" | "destinationAddress" | "destinationCity" | "destinationZoneId" | "recipientName" | "recipientPhone" | "serviceType" | "estimatedPrice" | "finalPrice" | "notes" | "pickedUpAt" | "deliveredAt" | "cancelledAt" | "cancellationReason" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    parcel?: boolean | Shipment$parcelArgs<ExtArgs>
    trackingEvents?: boolean | Shipment$trackingEventsArgs<ExtArgs>
    deliveryAttempts?: boolean | Shipment$deliveryAttemptsArgs<ExtArgs>
    payment?: boolean | Shipment$paymentArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    courier?: boolean | Shipment$courierArgs<ExtArgs>
    originZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
    destinationZone?: boolean | DeliveryZoneDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      courier: Prisma.$UserPayload<ExtArgs> | null
      originZone: Prisma.$DeliveryZonePayload<ExtArgs>
      destinationZone: Prisma.$DeliveryZonePayload<ExtArgs>
      parcel: Prisma.$ParcelPayload<ExtArgs> | null
      trackingEvents: Prisma.$TrackingEventPayload<ExtArgs>[]
      deliveryAttempts: Prisma.$DeliveryAttemptPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingNumber: string
      customerId: string
      courierId: string | null
      status: $Enums.ShipmentStatus
      originAddress: string
      originCity: string
      originZoneId: string
      destinationAddress: string
      destinationCity: string
      destinationZoneId: string
      recipientName: string
      recipientPhone: string
      serviceType: $Enums.ServiceType
      estimatedPrice: Prisma.Decimal
      finalPrice: Prisma.Decimal | null
      notes: string | null
      pickedUpAt: Date | null
      deliveredAt: Date | null
      cancelledAt: Date | null
      cancellationReason: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courier<T extends Shipment$courierArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$courierArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    originZone<T extends DeliveryZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryZoneDefaultArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinationZone<T extends DeliveryZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryZoneDefaultArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parcel<T extends Shipment$parcelArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$parcelArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trackingEvents<T extends Shipment$trackingEventsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$trackingEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryAttempts<T extends Shipment$deliveryAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$deliveryAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Shipment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly trackingNumber: FieldRef<"Shipment", 'String'>
    readonly customerId: FieldRef<"Shipment", 'String'>
    readonly courierId: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly originAddress: FieldRef<"Shipment", 'String'>
    readonly originCity: FieldRef<"Shipment", 'String'>
    readonly originZoneId: FieldRef<"Shipment", 'String'>
    readonly destinationAddress: FieldRef<"Shipment", 'String'>
    readonly destinationCity: FieldRef<"Shipment", 'String'>
    readonly destinationZoneId: FieldRef<"Shipment", 'String'>
    readonly recipientName: FieldRef<"Shipment", 'String'>
    readonly recipientPhone: FieldRef<"Shipment", 'String'>
    readonly serviceType: FieldRef<"Shipment", 'ServiceType'>
    readonly estimatedPrice: FieldRef<"Shipment", 'Decimal'>
    readonly finalPrice: FieldRef<"Shipment", 'Decimal'>
    readonly notes: FieldRef<"Shipment", 'String'>
    readonly pickedUpAt: FieldRef<"Shipment", 'DateTime'>
    readonly deliveredAt: FieldRef<"Shipment", 'DateTime'>
    readonly cancelledAt: FieldRef<"Shipment", 'DateTime'>
    readonly cancellationReason: FieldRef<"Shipment", 'String'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
    readonly deletedAt: FieldRef<"Shipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.courier
   */
  export type Shipment$courierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.parcel
   */
  export type Shipment$parcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
  }

  /**
   * Shipment.trackingEvents
   */
  export type Shipment$trackingEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    where?: TrackingEventWhereInput
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    cursor?: TrackingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * Shipment.deliveryAttempts
   */
  export type Shipment$deliveryAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    where?: DeliveryAttemptWhereInput
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    cursor?: DeliveryAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * Shipment.payment
   */
  export type Shipment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model Parcel
   */

  export type AggregateParcel = {
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  export type ParcelAvgAggregateOutputType = {
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
  }

  export type ParcelSumAggregateOutputType = {
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
  }

  export type ParcelMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    description: string | null
    isFragile: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    weight: Decimal | null
    length: Decimal | null
    width: Decimal | null
    height: Decimal | null
    description: string | null
    isFragile: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelCountAggregateOutputType = {
    id: number
    shipmentId: number
    weight: number
    length: number
    width: number
    height: number
    description: number
    isFragile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParcelAvgAggregateInputType = {
    weight?: true
    length?: true
    width?: true
    height?: true
  }

  export type ParcelSumAggregateInputType = {
    weight?: true
    length?: true
    width?: true
    height?: true
  }

  export type ParcelMinAggregateInputType = {
    id?: true
    shipmentId?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    description?: true
    isFragile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    description?: true
    isFragile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelCountAggregateInputType = {
    id?: true
    shipmentId?: true
    weight?: true
    length?: true
    width?: true
    height?: true
    description?: true
    isFragile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParcelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcel to aggregate.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcels
    **/
    _count?: true | ParcelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelMaxAggregateInputType
  }

  export type GetParcelAggregateType<T extends ParcelAggregateArgs> = {
        [P in keyof T & keyof AggregateParcel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcel[P]>
      : GetScalarType<T[P], AggregateParcel[P]>
  }




  export type ParcelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithAggregationInput | ParcelOrderByWithAggregationInput[]
    by: ParcelScalarFieldEnum[] | ParcelScalarFieldEnum
    having?: ParcelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelCountAggregateInputType | true
    _avg?: ParcelAvgAggregateInputType
    _sum?: ParcelSumAggregateInputType
    _min?: ParcelMinAggregateInputType
    _max?: ParcelMaxAggregateInputType
  }

  export type ParcelGroupByOutputType = {
    id: string
    shipmentId: string
    weight: Decimal
    length: Decimal
    width: Decimal
    height: Decimal
    description: string | null
    isFragile: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  type GetParcelGroupByPayload<T extends ParcelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelGroupByOutputType[P]>
        }
      >
    >


  export type ParcelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    description?: boolean
    isFragile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    description?: boolean
    isFragile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    description?: boolean
    isFragile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    weight?: boolean
    length?: boolean
    width?: boolean
    height?: boolean
    description?: boolean
    isFragile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParcelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "weight" | "length" | "width" | "height" | "description" | "isFragile" | "createdAt" | "updatedAt", ExtArgs["result"]["parcel"]>
  export type ParcelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $ParcelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcel"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      weight: Prisma.Decimal
      length: Prisma.Decimal
      width: Prisma.Decimal
      height: Prisma.Decimal
      description: string | null
      isFragile: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parcel"]>
    composites: {}
  }

  type ParcelGetPayload<S extends boolean | null | undefined | ParcelDefaultArgs> = $Result.GetResult<Prisma.$ParcelPayload, S>

  type ParcelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelCountAggregateInputType | true
    }

  export interface ParcelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcel'], meta: { name: 'Parcel' } }
    /**
     * Find zero or one Parcel that matches the filter.
     * @param {ParcelFindUniqueArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelFindUniqueArgs>(args: SelectSubset<T, ParcelFindUniqueArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parcel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelFindUniqueOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelFindFirstArgs>(args?: SelectSubset<T, ParcelFindFirstArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcel.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelWithIdOnly = await prisma.parcel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelFindManyArgs>(args?: SelectSubset<T, ParcelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parcel.
     * @param {ParcelCreateArgs} args - Arguments to create a Parcel.
     * @example
     * // Create one Parcel
     * const Parcel = await prisma.parcel.create({
     *   data: {
     *     // ... data to create a Parcel
     *   }
     * })
     * 
     */
    create<T extends ParcelCreateArgs>(args: SelectSubset<T, ParcelCreateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcels.
     * @param {ParcelCreateManyArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelCreateManyArgs>(args?: SelectSubset<T, ParcelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcels and returns the data saved in the database.
     * @param {ParcelCreateManyAndReturnArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parcel.
     * @param {ParcelDeleteArgs} args - Arguments to delete one Parcel.
     * @example
     * // Delete one Parcel
     * const Parcel = await prisma.parcel.delete({
     *   where: {
     *     // ... filter to delete one Parcel
     *   }
     * })
     * 
     */
    delete<T extends ParcelDeleteArgs>(args: SelectSubset<T, ParcelDeleteArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parcel.
     * @param {ParcelUpdateArgs} args - Arguments to update one Parcel.
     * @example
     * // Update one Parcel
     * const parcel = await prisma.parcel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelUpdateArgs>(args: SelectSubset<T, ParcelUpdateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcels.
     * @param {ParcelDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelDeleteManyArgs>(args?: SelectSubset<T, ParcelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelUpdateManyArgs>(args: SelectSubset<T, ParcelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels and returns the data updated in the database.
     * @param {ParcelUpdateManyAndReturnArgs} args - Arguments to update many Parcels.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParcelUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parcel.
     * @param {ParcelUpsertArgs} args - Arguments to update or create a Parcel.
     * @example
     * // Update or create a Parcel
     * const parcel = await prisma.parcel.upsert({
     *   create: {
     *     // ... data to create a Parcel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcel we want to update
     *   }
     * })
     */
    upsert<T extends ParcelUpsertArgs>(args: SelectSubset<T, ParcelUpsertArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcel.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends ParcelCountArgs>(
      args?: Subset<T, ParcelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelAggregateArgs>(args: Subset<T, ParcelAggregateArgs>): Prisma.PrismaPromise<GetParcelAggregateType<T>>

    /**
     * Group by Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelGroupByArgs['orderBy'] }
        : { orderBy?: ParcelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcel model
   */
  readonly fields: ParcelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parcel model
   */
  interface ParcelFieldRefs {
    readonly id: FieldRef<"Parcel", 'String'>
    readonly shipmentId: FieldRef<"Parcel", 'String'>
    readonly weight: FieldRef<"Parcel", 'Decimal'>
    readonly length: FieldRef<"Parcel", 'Decimal'>
    readonly width: FieldRef<"Parcel", 'Decimal'>
    readonly height: FieldRef<"Parcel", 'Decimal'>
    readonly description: FieldRef<"Parcel", 'String'>
    readonly isFragile: FieldRef<"Parcel", 'Boolean'>
    readonly createdAt: FieldRef<"Parcel", 'DateTime'>
    readonly updatedAt: FieldRef<"Parcel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcel findUnique
   */
  export type ParcelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findUniqueOrThrow
   */
  export type ParcelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findFirst
   */
  export type ParcelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findFirstOrThrow
   */
  export type ParcelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findMany
   */
  export type ParcelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcels to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel create
   */
  export type ParcelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcel.
     */
    data: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
  }

  /**
   * Parcel createMany
   */
  export type ParcelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parcel createManyAndReturn
   */
  export type ParcelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel update
   */
  export type ParcelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcel.
     */
    data: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
    /**
     * Choose, which Parcel to update.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel updateMany
   */
  export type ParcelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
  }

  /**
   * Parcel updateManyAndReturn
   */
  export type ParcelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel upsert
   */
  export type ParcelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcel to update in case it exists.
     */
    where: ParcelWhereUniqueInput
    /**
     * In case the Parcel found by the `where` argument doesn't exist, create a new Parcel with this data.
     */
    create: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
    /**
     * In case the Parcel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
  }

  /**
   * Parcel delete
   */
  export type ParcelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter which Parcel to delete.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel deleteMany
   */
  export type ParcelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcels to delete
     */
    where?: ParcelWhereInput
    /**
     * Limit how many Parcels to delete.
     */
    limit?: number
  }

  /**
   * Parcel without action
   */
  export type ParcelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcel
     */
    omit?: ParcelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
  }


  /**
   * Model TrackingEvent
   */

  export type AggregateTrackingEvent = {
    _count: TrackingEventCountAggregateOutputType | null
    _min: TrackingEventMinAggregateOutputType | null
    _max: TrackingEventMaxAggregateOutputType | null
  }

  export type TrackingEventMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    status: $Enums.ShipmentStatus | null
    description: string | null
    location: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type TrackingEventMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    status: $Enums.ShipmentStatus | null
    description: string | null
    location: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type TrackingEventCountAggregateOutputType = {
    id: number
    shipmentId: number
    status: number
    description: number
    location: number
    actorId: number
    createdAt: number
    _all: number
  }


  export type TrackingEventMinAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    description?: true
    location?: true
    actorId?: true
    createdAt?: true
  }

  export type TrackingEventMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    description?: true
    location?: true
    actorId?: true
    createdAt?: true
  }

  export type TrackingEventCountAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    description?: true
    location?: true
    actorId?: true
    createdAt?: true
    _all?: true
  }

  export type TrackingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingEvent to aggregate.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingEvents
    **/
    _count?: true | TrackingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingEventMaxAggregateInputType
  }

  export type GetTrackingEventAggregateType<T extends TrackingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingEvent[P]>
      : GetScalarType<T[P], AggregateTrackingEvent[P]>
  }




  export type TrackingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingEventWhereInput
    orderBy?: TrackingEventOrderByWithAggregationInput | TrackingEventOrderByWithAggregationInput[]
    by: TrackingEventScalarFieldEnum[] | TrackingEventScalarFieldEnum
    having?: TrackingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingEventCountAggregateInputType | true
    _min?: TrackingEventMinAggregateInputType
    _max?: TrackingEventMaxAggregateInputType
  }

  export type TrackingEventGroupByOutputType = {
    id: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    description: string
    location: string | null
    actorId: string | null
    createdAt: Date
    _count: TrackingEventCountAggregateOutputType | null
    _min: TrackingEventMinAggregateOutputType | null
    _max: TrackingEventMaxAggregateOutputType | null
  }

  type GetTrackingEventGroupByPayload<T extends TrackingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingEventGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingEventGroupByOutputType[P]>
        }
      >
    >


  export type TrackingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    description?: boolean
    location?: boolean
    actorId?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    description?: boolean
    location?: boolean
    actorId?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    description?: boolean
    location?: boolean
    actorId?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    description?: boolean
    location?: boolean
    actorId?: boolean
    createdAt?: boolean
  }

  export type TrackingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "status" | "description" | "location" | "actorId" | "createdAt", ExtArgs["result"]["trackingEvent"]>
  export type TrackingEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }
  export type TrackingEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }
  export type TrackingEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    actor?: boolean | TrackingEvent$actorArgs<ExtArgs>
  }

  export type $TrackingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingEvent"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      status: $Enums.ShipmentStatus
      description: string
      location: string | null
      actorId: string | null
      createdAt: Date
    }, ExtArgs["result"]["trackingEvent"]>
    composites: {}
  }

  type TrackingEventGetPayload<S extends boolean | null | undefined | TrackingEventDefaultArgs> = $Result.GetResult<Prisma.$TrackingEventPayload, S>

  type TrackingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingEventCountAggregateInputType | true
    }

  export interface TrackingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingEvent'], meta: { name: 'TrackingEvent' } }
    /**
     * Find zero or one TrackingEvent that matches the filter.
     * @param {TrackingEventFindUniqueArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingEventFindUniqueArgs>(args: SelectSubset<T, TrackingEventFindUniqueArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingEventFindUniqueOrThrowArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindFirstArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingEventFindFirstArgs>(args?: SelectSubset<T, TrackingEventFindFirstArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindFirstOrThrowArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingEvents
     * const trackingEvents = await prisma.trackingEvent.findMany()
     * 
     * // Get first 10 TrackingEvents
     * const trackingEvents = await prisma.trackingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingEventFindManyArgs>(args?: SelectSubset<T, TrackingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackingEvent.
     * @param {TrackingEventCreateArgs} args - Arguments to create a TrackingEvent.
     * @example
     * // Create one TrackingEvent
     * const TrackingEvent = await prisma.trackingEvent.create({
     *   data: {
     *     // ... data to create a TrackingEvent
     *   }
     * })
     * 
     */
    create<T extends TrackingEventCreateArgs>(args: SelectSubset<T, TrackingEventCreateArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackingEvents.
     * @param {TrackingEventCreateManyArgs} args - Arguments to create many TrackingEvents.
     * @example
     * // Create many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingEventCreateManyArgs>(args?: SelectSubset<T, TrackingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackingEvents and returns the data saved in the database.
     * @param {TrackingEventCreateManyAndReturnArgs} args - Arguments to create many TrackingEvents.
     * @example
     * // Create many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackingEvents and only return the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackingEvent.
     * @param {TrackingEventDeleteArgs} args - Arguments to delete one TrackingEvent.
     * @example
     * // Delete one TrackingEvent
     * const TrackingEvent = await prisma.trackingEvent.delete({
     *   where: {
     *     // ... filter to delete one TrackingEvent
     *   }
     * })
     * 
     */
    delete<T extends TrackingEventDeleteArgs>(args: SelectSubset<T, TrackingEventDeleteArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackingEvent.
     * @param {TrackingEventUpdateArgs} args - Arguments to update one TrackingEvent.
     * @example
     * // Update one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingEventUpdateArgs>(args: SelectSubset<T, TrackingEventUpdateArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackingEvents.
     * @param {TrackingEventDeleteManyArgs} args - Arguments to filter TrackingEvents to delete.
     * @example
     * // Delete a few TrackingEvents
     * const { count } = await prisma.trackingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingEventDeleteManyArgs>(args?: SelectSubset<T, TrackingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingEventUpdateManyArgs>(args: SelectSubset<T, TrackingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingEvents and returns the data updated in the database.
     * @param {TrackingEventUpdateManyAndReturnArgs} args - Arguments to update many TrackingEvents.
     * @example
     * // Update many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackingEvents and only return the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackingEvent.
     * @param {TrackingEventUpsertArgs} args - Arguments to update or create a TrackingEvent.
     * @example
     * // Update or create a TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.upsert({
     *   create: {
     *     // ... data to create a TrackingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingEvent we want to update
     *   }
     * })
     */
    upsert<T extends TrackingEventUpsertArgs>(args: SelectSubset<T, TrackingEventUpsertArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventCountArgs} args - Arguments to filter TrackingEvents to count.
     * @example
     * // Count the number of TrackingEvents
     * const count = await prisma.trackingEvent.count({
     *   where: {
     *     // ... the filter for the TrackingEvents we want to count
     *   }
     * })
    **/
    count<T extends TrackingEventCountArgs>(
      args?: Subset<T, TrackingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackingEventAggregateArgs>(args: Subset<T, TrackingEventAggregateArgs>): Prisma.PrismaPromise<GetTrackingEventAggregateType<T>>

    /**
     * Group by TrackingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingEventGroupByArgs['orderBy'] }
        : { orderBy?: TrackingEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingEvent model
   */
  readonly fields: TrackingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends TrackingEvent$actorArgs<ExtArgs> = {}>(args?: Subset<T, TrackingEvent$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackingEvent model
   */
  interface TrackingEventFieldRefs {
    readonly id: FieldRef<"TrackingEvent", 'String'>
    readonly shipmentId: FieldRef<"TrackingEvent", 'String'>
    readonly status: FieldRef<"TrackingEvent", 'ShipmentStatus'>
    readonly description: FieldRef<"TrackingEvent", 'String'>
    readonly location: FieldRef<"TrackingEvent", 'String'>
    readonly actorId: FieldRef<"TrackingEvent", 'String'>
    readonly createdAt: FieldRef<"TrackingEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackingEvent findUnique
   */
  export type TrackingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent findUniqueOrThrow
   */
  export type TrackingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent findFirst
   */
  export type TrackingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingEvents.
     */
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent findFirstOrThrow
   */
  export type TrackingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingEvents.
     */
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent findMany
   */
  export type TrackingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvents to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingEvents.
     */
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent create
   */
  export type TrackingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingEvent.
     */
    data: XOR<TrackingEventCreateInput, TrackingEventUncheckedCreateInput>
  }

  /**
   * TrackingEvent createMany
   */
  export type TrackingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingEvents.
     */
    data: TrackingEventCreateManyInput | TrackingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingEvent createManyAndReturn
   */
  export type TrackingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * The data used to create many TrackingEvents.
     */
    data: TrackingEventCreateManyInput | TrackingEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingEvent update
   */
  export type TrackingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingEvent.
     */
    data: XOR<TrackingEventUpdateInput, TrackingEventUncheckedUpdateInput>
    /**
     * Choose, which TrackingEvent to update.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent updateMany
   */
  export type TrackingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingEvents.
     */
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackingEvents to update
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to update.
     */
    limit?: number
  }

  /**
   * TrackingEvent updateManyAndReturn
   */
  export type TrackingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * The data used to update TrackingEvents.
     */
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackingEvents to update
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingEvent upsert
   */
  export type TrackingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingEvent to update in case it exists.
     */
    where: TrackingEventWhereUniqueInput
    /**
     * In case the TrackingEvent found by the `where` argument doesn't exist, create a new TrackingEvent with this data.
     */
    create: XOR<TrackingEventCreateInput, TrackingEventUncheckedCreateInput>
    /**
     * In case the TrackingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingEventUpdateInput, TrackingEventUncheckedUpdateInput>
  }

  /**
   * TrackingEvent delete
   */
  export type TrackingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter which TrackingEvent to delete.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent deleteMany
   */
  export type TrackingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingEvents to delete
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to delete.
     */
    limit?: number
  }

  /**
   * TrackingEvent.actor
   */
  export type TrackingEvent$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TrackingEvent without action
   */
  export type TrackingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryAttempt
   */

  export type AggregateDeliveryAttempt = {
    _count: DeliveryAttemptCountAggregateOutputType | null
    _avg: DeliveryAttemptAvgAggregateOutputType | null
    _sum: DeliveryAttemptSumAggregateOutputType | null
    _min: DeliveryAttemptMinAggregateOutputType | null
    _max: DeliveryAttemptMaxAggregateOutputType | null
  }

  export type DeliveryAttemptAvgAggregateOutputType = {
    attemptNumber: number | null
  }

  export type DeliveryAttemptSumAggregateOutputType = {
    attemptNumber: number | null
  }

  export type DeliveryAttemptMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    courierId: string | null
    attemptNumber: number | null
    status: $Enums.DeliveryAttemptStatus | null
    failureReason: string | null
    notes: string | null
    attemptedAt: Date | null
  }

  export type DeliveryAttemptMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    courierId: string | null
    attemptNumber: number | null
    status: $Enums.DeliveryAttemptStatus | null
    failureReason: string | null
    notes: string | null
    attemptedAt: Date | null
  }

  export type DeliveryAttemptCountAggregateOutputType = {
    id: number
    shipmentId: number
    courierId: number
    attemptNumber: number
    status: number
    failureReason: number
    notes: number
    attemptedAt: number
    _all: number
  }


  export type DeliveryAttemptAvgAggregateInputType = {
    attemptNumber?: true
  }

  export type DeliveryAttemptSumAggregateInputType = {
    attemptNumber?: true
  }

  export type DeliveryAttemptMinAggregateInputType = {
    id?: true
    shipmentId?: true
    courierId?: true
    attemptNumber?: true
    status?: true
    failureReason?: true
    notes?: true
    attemptedAt?: true
  }

  export type DeliveryAttemptMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    courierId?: true
    attemptNumber?: true
    status?: true
    failureReason?: true
    notes?: true
    attemptedAt?: true
  }

  export type DeliveryAttemptCountAggregateInputType = {
    id?: true
    shipmentId?: true
    courierId?: true
    attemptNumber?: true
    status?: true
    failureReason?: true
    notes?: true
    attemptedAt?: true
    _all?: true
  }

  export type DeliveryAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryAttempt to aggregate.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryAttempts
    **/
    _count?: true | DeliveryAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryAttemptMaxAggregateInputType
  }

  export type GetDeliveryAttemptAggregateType<T extends DeliveryAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryAttempt[P]>
      : GetScalarType<T[P], AggregateDeliveryAttempt[P]>
  }




  export type DeliveryAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryAttemptWhereInput
    orderBy?: DeliveryAttemptOrderByWithAggregationInput | DeliveryAttemptOrderByWithAggregationInput[]
    by: DeliveryAttemptScalarFieldEnum[] | DeliveryAttemptScalarFieldEnum
    having?: DeliveryAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryAttemptCountAggregateInputType | true
    _avg?: DeliveryAttemptAvgAggregateInputType
    _sum?: DeliveryAttemptSumAggregateInputType
    _min?: DeliveryAttemptMinAggregateInputType
    _max?: DeliveryAttemptMaxAggregateInputType
  }

  export type DeliveryAttemptGroupByOutputType = {
    id: string
    shipmentId: string
    courierId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason: string | null
    notes: string | null
    attemptedAt: Date
    _count: DeliveryAttemptCountAggregateOutputType | null
    _avg: DeliveryAttemptAvgAggregateOutputType | null
    _sum: DeliveryAttemptSumAggregateOutputType | null
    _min: DeliveryAttemptMinAggregateOutputType | null
    _max: DeliveryAttemptMaxAggregateOutputType | null
  }

  type GetDeliveryAttemptGroupByPayload<T extends DeliveryAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryAttemptGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    courierId?: boolean
    attemptNumber?: boolean
    status?: boolean
    failureReason?: boolean
    notes?: boolean
    attemptedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryAttempt"]>

  export type DeliveryAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    courierId?: boolean
    attemptNumber?: boolean
    status?: boolean
    failureReason?: boolean
    notes?: boolean
    attemptedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryAttempt"]>

  export type DeliveryAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    courierId?: boolean
    attemptNumber?: boolean
    status?: boolean
    failureReason?: boolean
    notes?: boolean
    attemptedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryAttempt"]>

  export type DeliveryAttemptSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    courierId?: boolean
    attemptNumber?: boolean
    status?: boolean
    failureReason?: boolean
    notes?: boolean
    attemptedAt?: boolean
  }

  export type DeliveryAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "courierId" | "attemptNumber" | "status" | "failureReason" | "notes" | "attemptedAt", ExtArgs["result"]["deliveryAttempt"]>
  export type DeliveryAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeliveryAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeliveryAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeliveryAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryAttempt"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
      courier: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      courierId: string
      attemptNumber: number
      status: $Enums.DeliveryAttemptStatus
      failureReason: string | null
      notes: string | null
      attemptedAt: Date
    }, ExtArgs["result"]["deliveryAttempt"]>
    composites: {}
  }

  type DeliveryAttemptGetPayload<S extends boolean | null | undefined | DeliveryAttemptDefaultArgs> = $Result.GetResult<Prisma.$DeliveryAttemptPayload, S>

  type DeliveryAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryAttemptCountAggregateInputType | true
    }

  export interface DeliveryAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryAttempt'], meta: { name: 'DeliveryAttempt' } }
    /**
     * Find zero or one DeliveryAttempt that matches the filter.
     * @param {DeliveryAttemptFindUniqueArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryAttemptFindUniqueArgs>(args: SelectSubset<T, DeliveryAttemptFindUniqueArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryAttemptFindUniqueOrThrowArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindFirstArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryAttemptFindFirstArgs>(args?: SelectSubset<T, DeliveryAttemptFindFirstArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindFirstOrThrowArgs} args - Arguments to find a DeliveryAttempt
     * @example
     * // Get one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryAttempts
     * const deliveryAttempts = await prisma.deliveryAttempt.findMany()
     * 
     * // Get first 10 DeliveryAttempts
     * const deliveryAttempts = await prisma.deliveryAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryAttemptWithIdOnly = await prisma.deliveryAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryAttemptFindManyArgs>(args?: SelectSubset<T, DeliveryAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryAttempt.
     * @param {DeliveryAttemptCreateArgs} args - Arguments to create a DeliveryAttempt.
     * @example
     * // Create one DeliveryAttempt
     * const DeliveryAttempt = await prisma.deliveryAttempt.create({
     *   data: {
     *     // ... data to create a DeliveryAttempt
     *   }
     * })
     * 
     */
    create<T extends DeliveryAttemptCreateArgs>(args: SelectSubset<T, DeliveryAttemptCreateArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryAttempts.
     * @param {DeliveryAttemptCreateManyArgs} args - Arguments to create many DeliveryAttempts.
     * @example
     * // Create many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryAttemptCreateManyArgs>(args?: SelectSubset<T, DeliveryAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryAttempts and returns the data saved in the database.
     * @param {DeliveryAttemptCreateManyAndReturnArgs} args - Arguments to create many DeliveryAttempts.
     * @example
     * // Create many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryAttempts and only return the `id`
     * const deliveryAttemptWithIdOnly = await prisma.deliveryAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryAttempt.
     * @param {DeliveryAttemptDeleteArgs} args - Arguments to delete one DeliveryAttempt.
     * @example
     * // Delete one DeliveryAttempt
     * const DeliveryAttempt = await prisma.deliveryAttempt.delete({
     *   where: {
     *     // ... filter to delete one DeliveryAttempt
     *   }
     * })
     * 
     */
    delete<T extends DeliveryAttemptDeleteArgs>(args: SelectSubset<T, DeliveryAttemptDeleteArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryAttempt.
     * @param {DeliveryAttemptUpdateArgs} args - Arguments to update one DeliveryAttempt.
     * @example
     * // Update one DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryAttemptUpdateArgs>(args: SelectSubset<T, DeliveryAttemptUpdateArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryAttempts.
     * @param {DeliveryAttemptDeleteManyArgs} args - Arguments to filter DeliveryAttempts to delete.
     * @example
     * // Delete a few DeliveryAttempts
     * const { count } = await prisma.deliveryAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryAttemptDeleteManyArgs>(args?: SelectSubset<T, DeliveryAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryAttemptUpdateManyArgs>(args: SelectSubset<T, DeliveryAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryAttempts and returns the data updated in the database.
     * @param {DeliveryAttemptUpdateManyAndReturnArgs} args - Arguments to update many DeliveryAttempts.
     * @example
     * // Update many DeliveryAttempts
     * const deliveryAttempt = await prisma.deliveryAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryAttempts and only return the `id`
     * const deliveryAttemptWithIdOnly = await prisma.deliveryAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryAttempt.
     * @param {DeliveryAttemptUpsertArgs} args - Arguments to update or create a DeliveryAttempt.
     * @example
     * // Update or create a DeliveryAttempt
     * const deliveryAttempt = await prisma.deliveryAttempt.upsert({
     *   create: {
     *     // ... data to create a DeliveryAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryAttempt we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryAttemptUpsertArgs>(args: SelectSubset<T, DeliveryAttemptUpsertArgs<ExtArgs>>): Prisma__DeliveryAttemptClient<$Result.GetResult<Prisma.$DeliveryAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptCountArgs} args - Arguments to filter DeliveryAttempts to count.
     * @example
     * // Count the number of DeliveryAttempts
     * const count = await prisma.deliveryAttempt.count({
     *   where: {
     *     // ... the filter for the DeliveryAttempts we want to count
     *   }
     * })
    **/
    count<T extends DeliveryAttemptCountArgs>(
      args?: Subset<T, DeliveryAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAttemptAggregateArgs>(args: Subset<T, DeliveryAttemptAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAttemptAggregateType<T>>

    /**
     * Group by DeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryAttemptGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryAttempt model
   */
  readonly fields: DeliveryAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courier<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryAttempt model
   */
  interface DeliveryAttemptFieldRefs {
    readonly id: FieldRef<"DeliveryAttempt", 'String'>
    readonly shipmentId: FieldRef<"DeliveryAttempt", 'String'>
    readonly courierId: FieldRef<"DeliveryAttempt", 'String'>
    readonly attemptNumber: FieldRef<"DeliveryAttempt", 'Int'>
    readonly status: FieldRef<"DeliveryAttempt", 'DeliveryAttemptStatus'>
    readonly failureReason: FieldRef<"DeliveryAttempt", 'String'>
    readonly notes: FieldRef<"DeliveryAttempt", 'String'>
    readonly attemptedAt: FieldRef<"DeliveryAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryAttempt findUnique
   */
  export type DeliveryAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt findUniqueOrThrow
   */
  export type DeliveryAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt findFirst
   */
  export type DeliveryAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAttempts.
     */
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt findFirstOrThrow
   */
  export type DeliveryAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempt to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAttempts.
     */
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt findMany
   */
  export type DeliveryAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryAttempts to fetch.
     */
    where?: DeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAttempts to fetch.
     */
    orderBy?: DeliveryAttemptOrderByWithRelationInput | DeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryAttempts.
     */
    cursor?: DeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAttempts.
     */
    distinct?: DeliveryAttemptScalarFieldEnum | DeliveryAttemptScalarFieldEnum[]
  }

  /**
   * DeliveryAttempt create
   */
  export type DeliveryAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryAttempt.
     */
    data: XOR<DeliveryAttemptCreateInput, DeliveryAttemptUncheckedCreateInput>
  }

  /**
   * DeliveryAttempt createMany
   */
  export type DeliveryAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryAttempts.
     */
    data: DeliveryAttemptCreateManyInput | DeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryAttempt createManyAndReturn
   */
  export type DeliveryAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryAttempts.
     */
    data: DeliveryAttemptCreateManyInput | DeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryAttempt update
   */
  export type DeliveryAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryAttempt.
     */
    data: XOR<DeliveryAttemptUpdateInput, DeliveryAttemptUncheckedUpdateInput>
    /**
     * Choose, which DeliveryAttempt to update.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt updateMany
   */
  export type DeliveryAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryAttempts.
     */
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryAttempts to update
     */
    where?: DeliveryAttemptWhereInput
    /**
     * Limit how many DeliveryAttempts to update.
     */
    limit?: number
  }

  /**
   * DeliveryAttempt updateManyAndReturn
   */
  export type DeliveryAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryAttempts.
     */
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryAttempts to update
     */
    where?: DeliveryAttemptWhereInput
    /**
     * Limit how many DeliveryAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryAttempt upsert
   */
  export type DeliveryAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryAttempt to update in case it exists.
     */
    where: DeliveryAttemptWhereUniqueInput
    /**
     * In case the DeliveryAttempt found by the `where` argument doesn't exist, create a new DeliveryAttempt with this data.
     */
    create: XOR<DeliveryAttemptCreateInput, DeliveryAttemptUncheckedCreateInput>
    /**
     * In case the DeliveryAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryAttemptUpdateInput, DeliveryAttemptUncheckedUpdateInput>
  }

  /**
   * DeliveryAttempt delete
   */
  export type DeliveryAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter which DeliveryAttempt to delete.
     */
    where: DeliveryAttemptWhereUniqueInput
  }

  /**
   * DeliveryAttempt deleteMany
   */
  export type DeliveryAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryAttempts to delete
     */
    where?: DeliveryAttemptWhereInput
    /**
     * Limit how many DeliveryAttempts to delete.
     */
    limit?: number
  }

  /**
   * DeliveryAttempt without action
   */
  export type DeliveryAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryAttempt
     */
    select?: DeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryAttempt
     */
    omit?: DeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryAttemptInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    bkashPaymentId: string | null
    bkashTrxId: string | null
    transactionId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    bkashPaymentId: string | null
    bkashTrxId: string | null
    transactionId: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    shipmentId: number
    amount: number
    currency: number
    status: number
    method: number
    stripeSessionId: number
    stripePaymentIntentId: number
    bkashPaymentId: number
    bkashTrxId: number
    transactionId: number
    gatewayResponse: number
    paidAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    shipmentId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    bkashPaymentId?: true
    bkashTrxId?: true
    transactionId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    bkashPaymentId?: true
    bkashTrxId?: true
    transactionId?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    shipmentId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    bkashPaymentId?: true
    bkashTrxId?: true
    transactionId?: true
    gatewayResponse?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    shipmentId: string
    amount: Decimal
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    bkashPaymentId: string | null
    bkashTrxId: string | null
    transactionId: string | null
    gatewayResponse: JsonValue | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    bkashPaymentId?: boolean
    bkashTrxId?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    bkashPaymentId?: boolean
    bkashTrxId?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    bkashPaymentId?: boolean
    bkashTrxId?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    bkashPaymentId?: boolean
    bkashTrxId?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "amount" | "currency" | "status" | "method" | "stripeSessionId" | "stripePaymentIntentId" | "bkashPaymentId" | "bkashTrxId" | "transactionId" | "gatewayResponse" | "paidAt" | "refundedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PaymentStatus
      method: $Enums.PaymentMethod
      stripeSessionId: string | null
      stripePaymentIntentId: string | null
      bkashPaymentId: string | null
      bkashTrxId: string | null
      transactionId: string | null
      gatewayResponse: Prisma.JsonValue | null
      paidAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly shipmentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly stripeSessionId: FieldRef<"Payment", 'String'>
    readonly stripePaymentIntentId: FieldRef<"Payment", 'String'>
    readonly bkashPaymentId: FieldRef<"Payment", 'String'>
    readonly bkashTrxId: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly gatewayResponse: FieldRef<"Payment", 'Json'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryZone
   */

  export type AggregateDeliveryZone = {
    _count: DeliveryZoneCountAggregateOutputType | null
    _min: DeliveryZoneMinAggregateOutputType | null
    _max: DeliveryZoneMaxAggregateOutputType | null
  }

  export type DeliveryZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DeliveryZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DeliveryZoneCountAggregateOutputType = {
    id: number
    name: number
    city: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DeliveryZoneMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DeliveryZoneMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DeliveryZoneCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DeliveryZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZone to aggregate.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryZones
    **/
    _count?: true | DeliveryZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryZoneMaxAggregateInputType
  }

  export type GetDeliveryZoneAggregateType<T extends DeliveryZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryZone[P]>
      : GetScalarType<T[P], AggregateDeliveryZone[P]>
  }




  export type DeliveryZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryZoneWhereInput
    orderBy?: DeliveryZoneOrderByWithAggregationInput | DeliveryZoneOrderByWithAggregationInput[]
    by: DeliveryZoneScalarFieldEnum[] | DeliveryZoneScalarFieldEnum
    having?: DeliveryZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryZoneCountAggregateInputType | true
    _min?: DeliveryZoneMinAggregateInputType
    _max?: DeliveryZoneMaxAggregateInputType
  }

  export type DeliveryZoneGroupByOutputType = {
    id: string
    name: string
    city: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DeliveryZoneCountAggregateOutputType | null
    _min: DeliveryZoneMinAggregateOutputType | null
    _max: DeliveryZoneMaxAggregateOutputType | null
  }

  type GetDeliveryZoneGroupByPayload<T extends DeliveryZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryZoneGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    originShipments?: boolean | DeliveryZone$originShipmentsArgs<ExtArgs>
    destinationShipments?: boolean | DeliveryZone$destinationShipmentsArgs<ExtArgs>
    pricingRules?: boolean | DeliveryZone$pricingRulesArgs<ExtArgs>
    _count?: boolean | DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["deliveryZone"]>

  export type DeliveryZoneSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DeliveryZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["deliveryZone"]>
  export type DeliveryZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originShipments?: boolean | DeliveryZone$originShipmentsArgs<ExtArgs>
    destinationShipments?: boolean | DeliveryZone$destinationShipmentsArgs<ExtArgs>
    pricingRules?: boolean | DeliveryZone$pricingRulesArgs<ExtArgs>
    _count?: boolean | DeliveryZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeliveryZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeliveryZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryZone"
    objects: {
      originShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      destinationShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      pricingRules: Prisma.$PricingRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["deliveryZone"]>
    composites: {}
  }

  type DeliveryZoneGetPayload<S extends boolean | null | undefined | DeliveryZoneDefaultArgs> = $Result.GetResult<Prisma.$DeliveryZonePayload, S>

  type DeliveryZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryZoneCountAggregateInputType | true
    }

  export interface DeliveryZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryZone'], meta: { name: 'DeliveryZone' } }
    /**
     * Find zero or one DeliveryZone that matches the filter.
     * @param {DeliveryZoneFindUniqueArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryZoneFindUniqueArgs>(args: SelectSubset<T, DeliveryZoneFindUniqueArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryZoneFindUniqueOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryZoneFindFirstArgs>(args?: SelectSubset<T, DeliveryZoneFindFirstArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindFirstOrThrowArgs} args - Arguments to find a DeliveryZone
     * @example
     * // Get one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany()
     * 
     * // Get first 10 DeliveryZones
     * const deliveryZones = await prisma.deliveryZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryZoneFindManyArgs>(args?: SelectSubset<T, DeliveryZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryZone.
     * @param {DeliveryZoneCreateArgs} args - Arguments to create a DeliveryZone.
     * @example
     * // Create one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.create({
     *   data: {
     *     // ... data to create a DeliveryZone
     *   }
     * })
     * 
     */
    create<T extends DeliveryZoneCreateArgs>(args: SelectSubset<T, DeliveryZoneCreateArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryZones.
     * @param {DeliveryZoneCreateManyArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryZoneCreateManyArgs>(args?: SelectSubset<T, DeliveryZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryZones and returns the data saved in the database.
     * @param {DeliveryZoneCreateManyAndReturnArgs} args - Arguments to create many DeliveryZones.
     * @example
     * // Create many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryZone.
     * @param {DeliveryZoneDeleteArgs} args - Arguments to delete one DeliveryZone.
     * @example
     * // Delete one DeliveryZone
     * const DeliveryZone = await prisma.deliveryZone.delete({
     *   where: {
     *     // ... filter to delete one DeliveryZone
     *   }
     * })
     * 
     */
    delete<T extends DeliveryZoneDeleteArgs>(args: SelectSubset<T, DeliveryZoneDeleteArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryZone.
     * @param {DeliveryZoneUpdateArgs} args - Arguments to update one DeliveryZone.
     * @example
     * // Update one DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryZoneUpdateArgs>(args: SelectSubset<T, DeliveryZoneUpdateArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryZones.
     * @param {DeliveryZoneDeleteManyArgs} args - Arguments to filter DeliveryZones to delete.
     * @example
     * // Delete a few DeliveryZones
     * const { count } = await prisma.deliveryZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryZoneDeleteManyArgs>(args?: SelectSubset<T, DeliveryZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryZoneUpdateManyArgs>(args: SelectSubset<T, DeliveryZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryZones and returns the data updated in the database.
     * @param {DeliveryZoneUpdateManyAndReturnArgs} args - Arguments to update many DeliveryZones.
     * @example
     * // Update many DeliveryZones
     * const deliveryZone = await prisma.deliveryZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryZones and only return the `id`
     * const deliveryZoneWithIdOnly = await prisma.deliveryZone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryZone.
     * @param {DeliveryZoneUpsertArgs} args - Arguments to update or create a DeliveryZone.
     * @example
     * // Update or create a DeliveryZone
     * const deliveryZone = await prisma.deliveryZone.upsert({
     *   create: {
     *     // ... data to create a DeliveryZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryZone we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryZoneUpsertArgs>(args: SelectSubset<T, DeliveryZoneUpsertArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneCountArgs} args - Arguments to filter DeliveryZones to count.
     * @example
     * // Count the number of DeliveryZones
     * const count = await prisma.deliveryZone.count({
     *   where: {
     *     // ... the filter for the DeliveryZones we want to count
     *   }
     * })
    **/
    count<T extends DeliveryZoneCountArgs>(
      args?: Subset<T, DeliveryZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryZoneAggregateArgs>(args: Subset<T, DeliveryZoneAggregateArgs>): Prisma.PrismaPromise<GetDeliveryZoneAggregateType<T>>

    /**
     * Group by DeliveryZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryZoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryZoneGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryZone model
   */
  readonly fields: DeliveryZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originShipments<T extends DeliveryZone$originShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryZone$originShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinationShipments<T extends DeliveryZone$destinationShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryZone$destinationShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pricingRules<T extends DeliveryZone$pricingRulesArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryZone$pricingRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryZone model
   */
  interface DeliveryZoneFieldRefs {
    readonly id: FieldRef<"DeliveryZone", 'String'>
    readonly name: FieldRef<"DeliveryZone", 'String'>
    readonly city: FieldRef<"DeliveryZone", 'String'>
    readonly isActive: FieldRef<"DeliveryZone", 'Boolean'>
    readonly createdAt: FieldRef<"DeliveryZone", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryZone", 'DateTime'>
    readonly deletedAt: FieldRef<"DeliveryZone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryZone findUnique
   */
  export type DeliveryZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone findUniqueOrThrow
   */
  export type DeliveryZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone findFirst
   */
  export type DeliveryZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone findFirstOrThrow
   */
  export type DeliveryZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryZone to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone findMany
   */
  export type DeliveryZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryZones to fetch.
     */
    where?: DeliveryZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryZones to fetch.
     */
    orderBy?: DeliveryZoneOrderByWithRelationInput | DeliveryZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryZones.
     */
    cursor?: DeliveryZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryZones.
     */
    distinct?: DeliveryZoneScalarFieldEnum | DeliveryZoneScalarFieldEnum[]
  }

  /**
   * DeliveryZone create
   */
  export type DeliveryZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryZone.
     */
    data: XOR<DeliveryZoneCreateInput, DeliveryZoneUncheckedCreateInput>
  }

  /**
   * DeliveryZone createMany
   */
  export type DeliveryZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryZones.
     */
    data: DeliveryZoneCreateManyInput | DeliveryZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryZone createManyAndReturn
   */
  export type DeliveryZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryZones.
     */
    data: DeliveryZoneCreateManyInput | DeliveryZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryZone update
   */
  export type DeliveryZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryZone.
     */
    data: XOR<DeliveryZoneUpdateInput, DeliveryZoneUncheckedUpdateInput>
    /**
     * Choose, which DeliveryZone to update.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone updateMany
   */
  export type DeliveryZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryZones.
     */
    data: XOR<DeliveryZoneUpdateManyMutationInput, DeliveryZoneUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryZones to update
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number
  }

  /**
   * DeliveryZone updateManyAndReturn
   */
  export type DeliveryZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryZones.
     */
    data: XOR<DeliveryZoneUpdateManyMutationInput, DeliveryZoneUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryZones to update
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to update.
     */
    limit?: number
  }

  /**
   * DeliveryZone upsert
   */
  export type DeliveryZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryZone to update in case it exists.
     */
    where: DeliveryZoneWhereUniqueInput
    /**
     * In case the DeliveryZone found by the `where` argument doesn't exist, create a new DeliveryZone with this data.
     */
    create: XOR<DeliveryZoneCreateInput, DeliveryZoneUncheckedCreateInput>
    /**
     * In case the DeliveryZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryZoneUpdateInput, DeliveryZoneUncheckedUpdateInput>
  }

  /**
   * DeliveryZone delete
   */
  export type DeliveryZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    /**
     * Filter which DeliveryZone to delete.
     */
    where: DeliveryZoneWhereUniqueInput
  }

  /**
   * DeliveryZone deleteMany
   */
  export type DeliveryZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryZones to delete
     */
    where?: DeliveryZoneWhereInput
    /**
     * Limit how many DeliveryZones to delete.
     */
    limit?: number
  }

  /**
   * DeliveryZone.originShipments
   */
  export type DeliveryZone$originShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * DeliveryZone.destinationShipments
   */
  export type DeliveryZone$destinationShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * DeliveryZone.pricingRules
   */
  export type DeliveryZone$pricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    cursor?: PricingRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * DeliveryZone without action
   */
  export type DeliveryZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
  }


  /**
   * Model PricingRule
   */

  export type AggregatePricingRule = {
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  export type PricingRuleAvgAggregateOutputType = {
    basePrice: Decimal | null
    pricePerKg: Decimal | null
    maxWeight: Decimal | null
  }

  export type PricingRuleSumAggregateOutputType = {
    basePrice: Decimal | null
    pricePerKg: Decimal | null
    maxWeight: Decimal | null
  }

  export type PricingRuleMinAggregateOutputType = {
    id: string | null
    zoneId: string | null
    serviceType: $Enums.ServiceType | null
    basePrice: Decimal | null
    pricePerKg: Decimal | null
    maxWeight: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingRuleMaxAggregateOutputType = {
    id: string | null
    zoneId: string | null
    serviceType: $Enums.ServiceType | null
    basePrice: Decimal | null
    pricePerKg: Decimal | null
    maxWeight: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingRuleCountAggregateOutputType = {
    id: number
    zoneId: number
    serviceType: number
    basePrice: number
    pricePerKg: number
    maxWeight: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingRuleAvgAggregateInputType = {
    basePrice?: true
    pricePerKg?: true
    maxWeight?: true
  }

  export type PricingRuleSumAggregateInputType = {
    basePrice?: true
    pricePerKg?: true
    maxWeight?: true
  }

  export type PricingRuleMinAggregateInputType = {
    id?: true
    zoneId?: true
    serviceType?: true
    basePrice?: true
    pricePerKg?: true
    maxWeight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingRuleMaxAggregateInputType = {
    id?: true
    zoneId?: true
    serviceType?: true
    basePrice?: true
    pricePerKg?: true
    maxWeight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingRuleCountAggregateInputType = {
    id?: true
    zoneId?: true
    serviceType?: true
    basePrice?: true
    pricePerKg?: true
    maxWeight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRule to aggregate.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingRules
    **/
    _count?: true | PricingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingRuleMaxAggregateInputType
  }

  export type GetPricingRuleAggregateType<T extends PricingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingRule[P]>
      : GetScalarType<T[P], AggregatePricingRule[P]>
  }




  export type PricingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithAggregationInput | PricingRuleOrderByWithAggregationInput[]
    by: PricingRuleScalarFieldEnum[] | PricingRuleScalarFieldEnum
    having?: PricingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingRuleCountAggregateInputType | true
    _avg?: PricingRuleAvgAggregateInputType
    _sum?: PricingRuleSumAggregateInputType
    _min?: PricingRuleMinAggregateInputType
    _max?: PricingRuleMaxAggregateInputType
  }

  export type PricingRuleGroupByOutputType = {
    id: string
    zoneId: string | null
    serviceType: $Enums.ServiceType
    basePrice: Decimal
    pricePerKg: Decimal
    maxWeight: Decimal | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  type GetPricingRuleGroupByPayload<T extends PricingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
        }
      >
    >


  export type PricingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    serviceType?: boolean
    basePrice?: boolean
    pricePerKg?: boolean
    maxWeight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    serviceType?: boolean
    basePrice?: boolean
    pricePerKg?: boolean
    maxWeight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    serviceType?: boolean
    basePrice?: boolean
    pricePerKg?: boolean
    maxWeight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>

  export type PricingRuleSelectScalar = {
    id?: boolean
    zoneId?: boolean
    serviceType?: boolean
    basePrice?: boolean
    pricePerKg?: boolean
    maxWeight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zoneId" | "serviceType" | "basePrice" | "pricePerKg" | "maxWeight" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingRule"]>
  export type PricingRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }
  export type PricingRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }
  export type PricingRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | PricingRule$zoneArgs<ExtArgs>
  }

  export type $PricingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingRule"
    objects: {
      zone: Prisma.$DeliveryZonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zoneId: string | null
      serviceType: $Enums.ServiceType
      basePrice: Prisma.Decimal
      pricePerKg: Prisma.Decimal
      maxWeight: Prisma.Decimal | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingRule"]>
    composites: {}
  }

  type PricingRuleGetPayload<S extends boolean | null | undefined | PricingRuleDefaultArgs> = $Result.GetResult<Prisma.$PricingRulePayload, S>

  type PricingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingRuleCountAggregateInputType | true
    }

  export interface PricingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingRule'], meta: { name: 'PricingRule' } }
    /**
     * Find zero or one PricingRule that matches the filter.
     * @param {PricingRuleFindUniqueArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingRuleFindUniqueArgs>(args: SelectSubset<T, PricingRuleFindUniqueArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingRuleFindUniqueOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingRuleFindFirstArgs>(args?: SelectSubset<T, PricingRuleFindFirstArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingRules
     * const pricingRules = await prisma.pricingRule.findMany()
     * 
     * // Get first 10 PricingRules
     * const pricingRules = await prisma.pricingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingRuleFindManyArgs>(args?: SelectSubset<T, PricingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingRule.
     * @param {PricingRuleCreateArgs} args - Arguments to create a PricingRule.
     * @example
     * // Create one PricingRule
     * const PricingRule = await prisma.pricingRule.create({
     *   data: {
     *     // ... data to create a PricingRule
     *   }
     * })
     * 
     */
    create<T extends PricingRuleCreateArgs>(args: SelectSubset<T, PricingRuleCreateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingRules.
     * @param {PricingRuleCreateManyArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingRuleCreateManyArgs>(args?: SelectSubset<T, PricingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingRules and returns the data saved in the database.
     * @param {PricingRuleCreateManyAndReturnArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingRules and only return the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingRule.
     * @param {PricingRuleDeleteArgs} args - Arguments to delete one PricingRule.
     * @example
     * // Delete one PricingRule
     * const PricingRule = await prisma.pricingRule.delete({
     *   where: {
     *     // ... filter to delete one PricingRule
     *   }
     * })
     * 
     */
    delete<T extends PricingRuleDeleteArgs>(args: SelectSubset<T, PricingRuleDeleteArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingRule.
     * @param {PricingRuleUpdateArgs} args - Arguments to update one PricingRule.
     * @example
     * // Update one PricingRule
     * const pricingRule = await prisma.pricingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingRuleUpdateArgs>(args: SelectSubset<T, PricingRuleUpdateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingRules.
     * @param {PricingRuleDeleteManyArgs} args - Arguments to filter PricingRules to delete.
     * @example
     * // Delete a few PricingRules
     * const { count } = await prisma.pricingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingRuleDeleteManyArgs>(args?: SelectSubset<T, PricingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingRuleUpdateManyArgs>(args: SelectSubset<T, PricingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules and returns the data updated in the database.
     * @param {PricingRuleUpdateManyAndReturnArgs} args - Arguments to update many PricingRules.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingRules and only return the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricingRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingRule.
     * @param {PricingRuleUpsertArgs} args - Arguments to update or create a PricingRule.
     * @example
     * // Update or create a PricingRule
     * const pricingRule = await prisma.pricingRule.upsert({
     *   create: {
     *     // ... data to create a PricingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingRule we want to update
     *   }
     * })
     */
    upsert<T extends PricingRuleUpsertArgs>(args: SelectSubset<T, PricingRuleUpsertArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleCountArgs} args - Arguments to filter PricingRules to count.
     * @example
     * // Count the number of PricingRules
     * const count = await prisma.pricingRule.count({
     *   where: {
     *     // ... the filter for the PricingRules we want to count
     *   }
     * })
    **/
    count<T extends PricingRuleCountArgs>(
      args?: Subset<T, PricingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingRuleAggregateArgs>(args: Subset<T, PricingRuleAggregateArgs>): Prisma.PrismaPromise<GetPricingRuleAggregateType<T>>

    /**
     * Group by PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingRuleGroupByArgs['orderBy'] }
        : { orderBy?: PricingRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingRule model
   */
  readonly fields: PricingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends PricingRule$zoneArgs<ExtArgs> = {}>(args?: Subset<T, PricingRule$zoneArgs<ExtArgs>>): Prisma__DeliveryZoneClient<$Result.GetResult<Prisma.$DeliveryZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingRule model
   */
  interface PricingRuleFieldRefs {
    readonly id: FieldRef<"PricingRule", 'String'>
    readonly zoneId: FieldRef<"PricingRule", 'String'>
    readonly serviceType: FieldRef<"PricingRule", 'ServiceType'>
    readonly basePrice: FieldRef<"PricingRule", 'Decimal'>
    readonly pricePerKg: FieldRef<"PricingRule", 'Decimal'>
    readonly maxWeight: FieldRef<"PricingRule", 'Decimal'>
    readonly isActive: FieldRef<"PricingRule", 'Boolean'>
    readonly createdAt: FieldRef<"PricingRule", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingRule findUnique
   */
  export type PricingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findUniqueOrThrow
   */
  export type PricingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findFirst
   */
  export type PricingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findFirstOrThrow
   */
  export type PricingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findMany
   */
  export type PricingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRules to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule create
   */
  export type PricingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingRule.
     */
    data: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
  }

  /**
   * PricingRule createMany
   */
  export type PricingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingRule createManyAndReturn
   */
  export type PricingRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRule update
   */
  export type PricingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingRule.
     */
    data: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
    /**
     * Choose, which PricingRule to update.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule updateMany
   */
  export type PricingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to update.
     */
    limit?: number
  }

  /**
   * PricingRule updateManyAndReturn
   */
  export type PricingRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingRule upsert
   */
  export type PricingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingRule to update in case it exists.
     */
    where: PricingRuleWhereUniqueInput
    /**
     * In case the PricingRule found by the `where` argument doesn't exist, create a new PricingRule with this data.
     */
    create: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
    /**
     * In case the PricingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
  }

  /**
   * PricingRule delete
   */
  export type PricingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter which PricingRule to delete.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule deleteMany
   */
  export type PricingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRules to delete
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to delete.
     */
    limit?: number
  }

  /**
   * PricingRule.zone
   */
  export type PricingRule$zoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryZone
     */
    select?: DeliveryZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryZone
     */
    omit?: DeliveryZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryZoneInclude<ExtArgs> | null
    where?: DeliveryZoneWhereInput
  }

  /**
   * PricingRule without action
   */
  export type PricingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    entity: number
    entityId: number
    oldValue: number
    newValue: number
    ipAddress: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    oldValue?: true
    newValue?: true
    ipAddress?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    action: string
    entity: string
    entityId: string
    oldValue: JsonValue | null
    newValue: JsonValue | null
    ipAddress: string | null
    description: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    description?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    description?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    description?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "entity" | "entityId" | "oldValue" | "newValue" | "ipAddress" | "description" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      action: string
      entity: string
      entityId: string
      oldValue: Prisma.JsonValue | null
      newValue: Prisma.JsonValue | null
      ipAddress: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'Json'>
    readonly newValue: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    referenceId: string | null
    referenceType: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    referenceId: string | null
    referenceType: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    referenceId: number
    referenceType: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    referenceId?: true
    referenceType?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    referenceId?: true
    referenceType?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    referenceId?: true
    referenceType?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    message: string
    referenceId: string | null
    referenceType: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    referenceId?: boolean
    referenceType?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    referenceId?: boolean
    referenceType?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    referenceId?: boolean
    referenceType?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    referenceId?: boolean
    referenceType?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "referenceId" | "referenceType" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      referenceId: string | null
      referenceType: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly referenceId: FieldRef<"Notification", 'String'>
    readonly referenceType: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    role: 'role',
    avatar: 'avatar',
    googleId: 'googleId',
    isActive: 'isActive',
    isAvailable: 'isAvailable',
    serviceArea: 'serviceArea',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    trackingNumber: 'trackingNumber',
    customerId: 'customerId',
    courierId: 'courierId',
    status: 'status',
    originAddress: 'originAddress',
    originCity: 'originCity',
    originZoneId: 'originZoneId',
    destinationAddress: 'destinationAddress',
    destinationCity: 'destinationCity',
    destinationZoneId: 'destinationZoneId',
    recipientName: 'recipientName',
    recipientPhone: 'recipientPhone',
    serviceType: 'serviceType',
    estimatedPrice: 'estimatedPrice',
    finalPrice: 'finalPrice',
    notes: 'notes',
    pickedUpAt: 'pickedUpAt',
    deliveredAt: 'deliveredAt',
    cancelledAt: 'cancelledAt',
    cancellationReason: 'cancellationReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ParcelScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    weight: 'weight',
    length: 'length',
    width: 'width',
    height: 'height',
    description: 'description',
    isFragile: 'isFragile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParcelScalarFieldEnum = (typeof ParcelScalarFieldEnum)[keyof typeof ParcelScalarFieldEnum]


  export const TrackingEventScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    status: 'status',
    description: 'description',
    location: 'location',
    actorId: 'actorId',
    createdAt: 'createdAt'
  };

  export type TrackingEventScalarFieldEnum = (typeof TrackingEventScalarFieldEnum)[keyof typeof TrackingEventScalarFieldEnum]


  export const DeliveryAttemptScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    courierId: 'courierId',
    attemptNumber: 'attemptNumber',
    status: 'status',
    failureReason: 'failureReason',
    notes: 'notes',
    attemptedAt: 'attemptedAt'
  };

  export type DeliveryAttemptScalarFieldEnum = (typeof DeliveryAttemptScalarFieldEnum)[keyof typeof DeliveryAttemptScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    method: 'method',
    stripeSessionId: 'stripeSessionId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    bkashPaymentId: 'bkashPaymentId',
    bkashTrxId: 'bkashTrxId',
    transactionId: 'transactionId',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const DeliveryZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DeliveryZoneScalarFieldEnum = (typeof DeliveryZoneScalarFieldEnum)[keyof typeof DeliveryZoneScalarFieldEnum]


  export const PricingRuleScalarFieldEnum: {
    id: 'id',
    zoneId: 'zoneId',
    serviceType: 'serviceType',
    basePrice: 'basePrice',
    pricePerKg: 'pricePerKg',
    maxWeight: 'maxWeight',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingRuleScalarFieldEnum = (typeof PricingRuleScalarFieldEnum)[keyof typeof PricingRuleScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    ipAddress: 'ipAddress',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DeliveryAttemptStatus'
   */
  export type EnumDeliveryAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryAttemptStatus'>
    


  /**
   * Reference to a field of type 'DeliveryAttemptStatus[]'
   */
  export type ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryAttemptStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAvailable?: BoolFilter<"User"> | boolean
    serviceArea?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    shipmentsAsCustomer?: ShipmentListRelationFilter
    shipmentsAsCourier?: ShipmentListRelationFilter
    trackingEventsActed?: TrackingEventListRelationFilter
    deliveryAttempts?: DeliveryAttemptListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    serviceArea?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shipmentsAsCustomer?: ShipmentOrderByRelationAggregateInput
    shipmentsAsCourier?: ShipmentOrderByRelationAggregateInput
    trackingEventsActed?: TrackingEventOrderByRelationAggregateInput
    deliveryAttempts?: DeliveryAttemptOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAvailable?: BoolFilter<"User"> | boolean
    serviceArea?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    shipmentsAsCustomer?: ShipmentListRelationFilter
    shipmentsAsCourier?: ShipmentListRelationFilter
    trackingEventsActed?: TrackingEventListRelationFilter
    deliveryAttempts?: DeliveryAttemptListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    serviceArea?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isAvailable?: BoolWithAggregatesFilter<"User"> | boolean
    serviceArea?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: UuidFilter<"Shipment"> | string
    trackingNumber?: StringFilter<"Shipment"> | string
    customerId?: UuidFilter<"Shipment"> | string
    courierId?: UuidNullableFilter<"Shipment"> | string | null
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    originAddress?: StringFilter<"Shipment"> | string
    originCity?: StringFilter<"Shipment"> | string
    originZoneId?: UuidFilter<"Shipment"> | string
    destinationAddress?: StringFilter<"Shipment"> | string
    destinationCity?: StringFilter<"Shipment"> | string
    destinationZoneId?: UuidFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    serviceType?: EnumServiceTypeFilter<"Shipment"> | $Enums.ServiceType
    estimatedPrice?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    pickedUpAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancellationReason?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    courier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    originZone?: XOR<DeliveryZoneScalarRelationFilter, DeliveryZoneWhereInput>
    destinationZone?: XOR<DeliveryZoneScalarRelationFilter, DeliveryZoneWhereInput>
    parcel?: XOR<ParcelNullableScalarRelationFilter, ParcelWhereInput> | null
    trackingEvents?: TrackingEventListRelationFilter
    deliveryAttempts?: DeliveryAttemptListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    customerId?: SortOrder
    courierId?: SortOrderInput | SortOrder
    status?: SortOrder
    originAddress?: SortOrder
    originCity?: SortOrder
    originZoneId?: SortOrder
    destinationAddress?: SortOrder
    destinationCity?: SortOrder
    destinationZoneId?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    serviceType?: SortOrder
    estimatedPrice?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    customer?: UserOrderByWithRelationInput
    courier?: UserOrderByWithRelationInput
    originZone?: DeliveryZoneOrderByWithRelationInput
    destinationZone?: DeliveryZoneOrderByWithRelationInput
    parcel?: ParcelOrderByWithRelationInput
    trackingEvents?: TrackingEventOrderByRelationAggregateInput
    deliveryAttempts?: DeliveryAttemptOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingNumber?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    customerId?: UuidFilter<"Shipment"> | string
    courierId?: UuidNullableFilter<"Shipment"> | string | null
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    originAddress?: StringFilter<"Shipment"> | string
    originCity?: StringFilter<"Shipment"> | string
    originZoneId?: UuidFilter<"Shipment"> | string
    destinationAddress?: StringFilter<"Shipment"> | string
    destinationCity?: StringFilter<"Shipment"> | string
    destinationZoneId?: UuidFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    serviceType?: EnumServiceTypeFilter<"Shipment"> | $Enums.ServiceType
    estimatedPrice?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    pickedUpAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancellationReason?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    courier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    originZone?: XOR<DeliveryZoneScalarRelationFilter, DeliveryZoneWhereInput>
    destinationZone?: XOR<DeliveryZoneScalarRelationFilter, DeliveryZoneWhereInput>
    parcel?: XOR<ParcelNullableScalarRelationFilter, ParcelWhereInput> | null
    trackingEvents?: TrackingEventListRelationFilter
    deliveryAttempts?: DeliveryAttemptListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "trackingNumber">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    customerId?: SortOrder
    courierId?: SortOrderInput | SortOrder
    status?: SortOrder
    originAddress?: SortOrder
    originCity?: SortOrder
    originZoneId?: SortOrder
    destinationAddress?: SortOrder
    destinationCity?: SortOrder
    destinationZoneId?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    serviceType?: SortOrder
    estimatedPrice?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    pickedUpAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Shipment"> | string
    trackingNumber?: StringWithAggregatesFilter<"Shipment"> | string
    customerId?: UuidWithAggregatesFilter<"Shipment"> | string
    courierId?: UuidNullableWithAggregatesFilter<"Shipment"> | string | null
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    originAddress?: StringWithAggregatesFilter<"Shipment"> | string
    originCity?: StringWithAggregatesFilter<"Shipment"> | string
    originZoneId?: UuidWithAggregatesFilter<"Shipment"> | string
    destinationAddress?: StringWithAggregatesFilter<"Shipment"> | string
    destinationCity?: StringWithAggregatesFilter<"Shipment"> | string
    destinationZoneId?: UuidWithAggregatesFilter<"Shipment"> | string
    recipientName?: StringWithAggregatesFilter<"Shipment"> | string
    recipientPhone?: StringWithAggregatesFilter<"Shipment"> | string
    serviceType?: EnumServiceTypeWithAggregatesFilter<"Shipment"> | $Enums.ServiceType
    estimatedPrice?: DecimalWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    pickedUpAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    cancellationReason?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
  }

  export type ParcelWhereInput = {
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    id?: UuidFilter<"Parcel"> | string
    shipmentId?: UuidFilter<"Parcel"> | string
    weight?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    length?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    width?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Parcel"> | string | null
    isFragile?: BoolFilter<"Parcel"> | boolean
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type ParcelOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    description?: SortOrderInput | SortOrder
    isFragile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type ParcelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shipmentId?: string
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    weight?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    length?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    width?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Parcel"> | string | null
    isFragile?: BoolFilter<"Parcel"> | boolean
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id" | "shipmentId">

  export type ParcelOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    description?: SortOrderInput | SortOrder
    isFragile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParcelCountOrderByAggregateInput
    _avg?: ParcelAvgOrderByAggregateInput
    _max?: ParcelMaxOrderByAggregateInput
    _min?: ParcelMinOrderByAggregateInput
    _sum?: ParcelSumOrderByAggregateInput
  }

  export type ParcelScalarWhereWithAggregatesInput = {
    AND?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    OR?: ParcelScalarWhereWithAggregatesInput[]
    NOT?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Parcel"> | string
    shipmentId?: UuidWithAggregatesFilter<"Parcel"> | string
    weight?: DecimalWithAggregatesFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    length?: DecimalWithAggregatesFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    width?: DecimalWithAggregatesFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    height?: DecimalWithAggregatesFilter<"Parcel"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    isFragile?: BoolWithAggregatesFilter<"Parcel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
  }

  export type TrackingEventWhereInput = {
    AND?: TrackingEventWhereInput | TrackingEventWhereInput[]
    OR?: TrackingEventWhereInput[]
    NOT?: TrackingEventWhereInput | TrackingEventWhereInput[]
    id?: UuidFilter<"TrackingEvent"> | string
    shipmentId?: UuidFilter<"TrackingEvent"> | string
    status?: EnumShipmentStatusFilter<"TrackingEvent"> | $Enums.ShipmentStatus
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringNullableFilter<"TrackingEvent"> | string | null
    actorId?: UuidNullableFilter<"TrackingEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackingEvent"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TrackingEventOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type TrackingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackingEventWhereInput | TrackingEventWhereInput[]
    OR?: TrackingEventWhereInput[]
    NOT?: TrackingEventWhereInput | TrackingEventWhereInput[]
    shipmentId?: UuidFilter<"TrackingEvent"> | string
    status?: EnumShipmentStatusFilter<"TrackingEvent"> | $Enums.ShipmentStatus
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringNullableFilter<"TrackingEvent"> | string | null
    actorId?: UuidNullableFilter<"TrackingEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackingEvent"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TrackingEventOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TrackingEventCountOrderByAggregateInput
    _max?: TrackingEventMaxOrderByAggregateInput
    _min?: TrackingEventMinOrderByAggregateInput
  }

  export type TrackingEventScalarWhereWithAggregatesInput = {
    AND?: TrackingEventScalarWhereWithAggregatesInput | TrackingEventScalarWhereWithAggregatesInput[]
    OR?: TrackingEventScalarWhereWithAggregatesInput[]
    NOT?: TrackingEventScalarWhereWithAggregatesInput | TrackingEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TrackingEvent"> | string
    shipmentId?: UuidWithAggregatesFilter<"TrackingEvent"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"TrackingEvent"> | $Enums.ShipmentStatus
    description?: StringWithAggregatesFilter<"TrackingEvent"> | string
    location?: StringNullableWithAggregatesFilter<"TrackingEvent"> | string | null
    actorId?: UuidNullableWithAggregatesFilter<"TrackingEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrackingEvent"> | Date | string
  }

  export type DeliveryAttemptWhereInput = {
    AND?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    OR?: DeliveryAttemptWhereInput[]
    NOT?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    id?: UuidFilter<"DeliveryAttempt"> | string
    shipmentId?: UuidFilter<"DeliveryAttempt"> | string
    courierId?: UuidFilter<"DeliveryAttempt"> | string
    attemptNumber?: IntFilter<"DeliveryAttempt"> | number
    status?: EnumDeliveryAttemptStatusFilter<"DeliveryAttempt"> | $Enums.DeliveryAttemptStatus
    failureReason?: StringNullableFilter<"DeliveryAttempt"> | string | null
    notes?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    courier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeliveryAttemptOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    attemptNumber?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    attemptedAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
    courier?: UserOrderByWithRelationInput
  }

  export type DeliveryAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    OR?: DeliveryAttemptWhereInput[]
    NOT?: DeliveryAttemptWhereInput | DeliveryAttemptWhereInput[]
    shipmentId?: UuidFilter<"DeliveryAttempt"> | string
    courierId?: UuidFilter<"DeliveryAttempt"> | string
    attemptNumber?: IntFilter<"DeliveryAttempt"> | number
    status?: EnumDeliveryAttemptStatusFilter<"DeliveryAttempt"> | $Enums.DeliveryAttemptStatus
    failureReason?: StringNullableFilter<"DeliveryAttempt"> | string | null
    notes?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    courier?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeliveryAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    attemptNumber?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    attemptedAt?: SortOrder
    _count?: DeliveryAttemptCountOrderByAggregateInput
    _avg?: DeliveryAttemptAvgOrderByAggregateInput
    _max?: DeliveryAttemptMaxOrderByAggregateInput
    _min?: DeliveryAttemptMinOrderByAggregateInput
    _sum?: DeliveryAttemptSumOrderByAggregateInput
  }

  export type DeliveryAttemptScalarWhereWithAggregatesInput = {
    AND?: DeliveryAttemptScalarWhereWithAggregatesInput | DeliveryAttemptScalarWhereWithAggregatesInput[]
    OR?: DeliveryAttemptScalarWhereWithAggregatesInput[]
    NOT?: DeliveryAttemptScalarWhereWithAggregatesInput | DeliveryAttemptScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeliveryAttempt"> | string
    shipmentId?: UuidWithAggregatesFilter<"DeliveryAttempt"> | string
    courierId?: UuidWithAggregatesFilter<"DeliveryAttempt"> | string
    attemptNumber?: IntWithAggregatesFilter<"DeliveryAttempt"> | number
    status?: EnumDeliveryAttemptStatusWithAggregatesFilter<"DeliveryAttempt"> | $Enums.DeliveryAttemptStatus
    failureReason?: StringNullableWithAggregatesFilter<"DeliveryAttempt"> | string | null
    notes?: StringNullableWithAggregatesFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeWithAggregatesFilter<"DeliveryAttempt"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<"Payment"> | string
    shipmentId?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    stripeSessionId?: StringNullableFilter<"Payment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Payment"> | string | null
    bkashPaymentId?: StringNullableFilter<"Payment"> | string | null
    bkashTrxId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    bkashPaymentId?: SortOrderInput | SortOrder
    bkashTrxId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shipmentId?: string
    stripeSessionId?: string
    stripePaymentIntentId?: string
    bkashPaymentId?: string
    bkashTrxId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id" | "shipmentId" | "stripeSessionId" | "stripePaymentIntentId" | "bkashPaymentId" | "bkashTrxId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    bkashPaymentId?: SortOrderInput | SortOrder
    bkashTrxId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payment"> | string
    shipmentId?: UuidWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    stripeSessionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bkashPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bkashTrxId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"Payment">
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type DeliveryZoneWhereInput = {
    AND?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    OR?: DeliveryZoneWhereInput[]
    NOT?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    id?: UuidFilter<"DeliveryZone"> | string
    name?: StringFilter<"DeliveryZone"> | string
    city?: StringFilter<"DeliveryZone"> | string
    isActive?: BoolFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeFilter<"DeliveryZone"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryZone"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DeliveryZone"> | Date | string | null
    originShipments?: ShipmentListRelationFilter
    destinationShipments?: ShipmentListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
  }

  export type DeliveryZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    originShipments?: ShipmentOrderByRelationAggregateInput
    destinationShipments?: ShipmentOrderByRelationAggregateInput
    pricingRules?: PricingRuleOrderByRelationAggregateInput
  }

  export type DeliveryZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    OR?: DeliveryZoneWhereInput[]
    NOT?: DeliveryZoneWhereInput | DeliveryZoneWhereInput[]
    city?: StringFilter<"DeliveryZone"> | string
    isActive?: BoolFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeFilter<"DeliveryZone"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryZone"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DeliveryZone"> | Date | string | null
    originShipments?: ShipmentListRelationFilter
    destinationShipments?: ShipmentListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
  }, "id" | "name">

  export type DeliveryZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DeliveryZoneCountOrderByAggregateInput
    _max?: DeliveryZoneMaxOrderByAggregateInput
    _min?: DeliveryZoneMinOrderByAggregateInput
  }

  export type DeliveryZoneScalarWhereWithAggregatesInput = {
    AND?: DeliveryZoneScalarWhereWithAggregatesInput | DeliveryZoneScalarWhereWithAggregatesInput[]
    OR?: DeliveryZoneScalarWhereWithAggregatesInput[]
    NOT?: DeliveryZoneScalarWhereWithAggregatesInput | DeliveryZoneScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeliveryZone"> | string
    name?: StringWithAggregatesFilter<"DeliveryZone"> | string
    city?: StringWithAggregatesFilter<"DeliveryZone"> | string
    isActive?: BoolWithAggregatesFilter<"DeliveryZone"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryZone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeliveryZone"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DeliveryZone"> | Date | string | null
  }

  export type PricingRuleWhereInput = {
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    id?: UuidFilter<"PricingRule"> | string
    zoneId?: UuidNullableFilter<"PricingRule"> | string | null
    serviceType?: EnumServiceTypeFilter<"PricingRule"> | $Enums.ServiceType
    basePrice?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    maxWeight?: DecimalNullableFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
    zone?: XOR<DeliveryZoneNullableScalarRelationFilter, DeliveryZoneWhereInput> | null
  }

  export type PricingRuleOrderByWithRelationInput = {
    id?: SortOrder
    zoneId?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zone?: DeliveryZoneOrderByWithRelationInput
  }

  export type PricingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zoneId_serviceType?: PricingRuleZoneIdServiceTypeCompoundUniqueInput
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    zoneId?: UuidNullableFilter<"PricingRule"> | string | null
    serviceType?: EnumServiceTypeFilter<"PricingRule"> | $Enums.ServiceType
    basePrice?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    maxWeight?: DecimalNullableFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
    zone?: XOR<DeliveryZoneNullableScalarRelationFilter, DeliveryZoneWhereInput> | null
  }, "id" | "zoneId_serviceType">

  export type PricingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    zoneId?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingRuleCountOrderByAggregateInput
    _avg?: PricingRuleAvgOrderByAggregateInput
    _max?: PricingRuleMaxOrderByAggregateInput
    _min?: PricingRuleMinOrderByAggregateInput
    _sum?: PricingRuleSumOrderByAggregateInput
  }

  export type PricingRuleScalarWhereWithAggregatesInput = {
    AND?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    OR?: PricingRuleScalarWhereWithAggregatesInput[]
    NOT?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PricingRule"> | string
    zoneId?: UuidNullableWithAggregatesFilter<"PricingRule"> | string | null
    serviceType?: EnumServiceTypeWithAggregatesFilter<"PricingRule"> | $Enums.ServiceType
    basePrice?: DecimalWithAggregatesFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalWithAggregatesFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    maxWeight?: DecimalNullableWithAggregatesFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolWithAggregatesFilter<"PricingRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingRule"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    actorId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    actorId?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: UuidWithAggregatesFilter<"AuditLog"> | string
    oldValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    referenceId?: UuidNullableFilter<"Notification"> | string | null
    referenceType?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    referenceId?: UuidNullableFilter<"Notification"> | string | null
    referenceType?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    referenceId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    referenceType?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCreateInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParcelCreateInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    description?: string | null
    isFragile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutParcelInput
  }

  export type ParcelUncheckedCreateInput = {
    id?: string
    shipmentId: string
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    description?: string | null
    isFragile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateManyInput = {
    id?: string
    shipmentId: string
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    description?: string | null
    isFragile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventCreateInput = {
    id?: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    createdAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutTrackingEventsInput
    actor?: UserCreateNestedOneWithoutTrackingEventsActedInput
  }

  export type TrackingEventUncheckedCreateInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type TrackingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutTrackingEventsNestedInput
    actor?: UserUpdateOneWithoutTrackingEventsActedNestedInput
  }

  export type TrackingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventCreateManyInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type TrackingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptCreateInput = {
    id?: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutDeliveryAttemptsInput
    courier: UserCreateNestedOneWithoutDeliveryAttemptsInput
  }

  export type DeliveryAttemptUncheckedCreateInput = {
    id?: string
    shipmentId: string
    courierId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutDeliveryAttemptsNestedInput
    courier?: UserUpdateOneRequiredWithoutDeliveryAttemptsNestedInput
  }

  export type DeliveryAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptCreateManyInput = {
    id?: string
    shipmentId: string
    courierId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    bkashPaymentId?: string | null
    bkashTrxId?: string | null
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    shipmentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    bkashPaymentId?: string | null
    bkashTrxId?: string | null
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    shipmentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    bkashPaymentId?: string | null
    bkashTrxId?: string | null
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryZoneCreateInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentCreateNestedManyWithoutOriginZoneInput
    destinationShipments?: ShipmentCreateNestedManyWithoutDestinationZoneInput
    pricingRules?: PricingRuleCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneUncheckedCreateInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentUncheckedCreateNestedManyWithoutOriginZoneInput
    destinationShipments?: ShipmentUncheckedCreateNestedManyWithoutDestinationZoneInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUpdateManyWithoutOriginZoneNestedInput
    destinationShipments?: ShipmentUpdateManyWithoutDestinationZoneNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutZoneNestedInput
  }

  export type DeliveryZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUncheckedUpdateManyWithoutOriginZoneNestedInput
    destinationShipments?: ShipmentUncheckedUpdateManyWithoutDestinationZoneNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type DeliveryZoneCreateManyInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DeliveryZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PricingRuleCreateInput = {
    id?: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    zone?: DeliveryZoneCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateInput = {
    id?: string
    zoneId?: string | null
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: DeliveryZoneUpdateOneWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateManyInput = {
    id?: string
    zoneId?: string | null
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId?: string | null
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId?: string | null
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type TrackingEventListRelationFilter = {
    every?: TrackingEventWhereInput
    some?: TrackingEventWhereInput
    none?: TrackingEventWhereInput
  }

  export type DeliveryAttemptListRelationFilter = {
    every?: DeliveryAttemptWhereInput
    some?: DeliveryAttemptWhereInput
    none?: DeliveryAttemptWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackingEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    serviceArea?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    serviceArea?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    googleId?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    serviceArea?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DeliveryZoneScalarRelationFilter = {
    is?: DeliveryZoneWhereInput
    isNot?: DeliveryZoneWhereInput
  }

  export type ParcelNullableScalarRelationFilter = {
    is?: ParcelWhereInput | null
    isNot?: ParcelWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    customerId?: SortOrder
    courierId?: SortOrder
    status?: SortOrder
    originAddress?: SortOrder
    originCity?: SortOrder
    originZoneId?: SortOrder
    destinationAddress?: SortOrder
    destinationCity?: SortOrder
    destinationZoneId?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    serviceType?: SortOrder
    estimatedPrice?: SortOrder
    finalPrice?: SortOrder
    notes?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    estimatedPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    customerId?: SortOrder
    courierId?: SortOrder
    status?: SortOrder
    originAddress?: SortOrder
    originCity?: SortOrder
    originZoneId?: SortOrder
    destinationAddress?: SortOrder
    destinationCity?: SortOrder
    destinationZoneId?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    serviceType?: SortOrder
    estimatedPrice?: SortOrder
    finalPrice?: SortOrder
    notes?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    customerId?: SortOrder
    courierId?: SortOrder
    status?: SortOrder
    originAddress?: SortOrder
    originCity?: SortOrder
    originZoneId?: SortOrder
    destinationAddress?: SortOrder
    destinationCity?: SortOrder
    destinationZoneId?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    serviceType?: SortOrder
    estimatedPrice?: SortOrder
    finalPrice?: SortOrder
    notes?: SortOrder
    pickedUpAt?: SortOrder
    deliveredAt?: SortOrder
    cancelledAt?: SortOrder
    cancellationReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    estimatedPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type ParcelCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    description?: SortOrder
    isFragile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelAvgOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ParcelMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    description?: SortOrder
    isFragile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
    description?: SortOrder
    isFragile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelSumOrderByAggregateInput = {
    weight?: SortOrder
    length?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type TrackingEventCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    location?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    location?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type TrackingEventMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    location?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDeliveryAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryAttemptStatus | EnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel> | $Enums.DeliveryAttemptStatus
  }

  export type DeliveryAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    attemptNumber?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    notes?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptAvgOrderByAggregateInput = {
    attemptNumber?: SortOrder
  }

  export type DeliveryAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    attemptNumber?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    notes?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    attemptNumber?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    notes?: SortOrder
    attemptedAt?: SortOrder
  }

  export type DeliveryAttemptSumOrderByAggregateInput = {
    attemptNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDeliveryAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryAttemptStatus | EnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryAttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    bkashPaymentId?: SortOrder
    bkashTrxId?: SortOrder
    transactionId?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    bkashPaymentId?: SortOrder
    bkashTrxId?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    bkashPaymentId?: SortOrder
    bkashTrxId?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PricingRuleListRelationFilter = {
    every?: PricingRuleWhereInput
    some?: PricingRuleWhereInput
    none?: PricingRuleWhereInput
  }

  export type PricingRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DeliveryZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DeliveryZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DeliveryZoneNullableScalarRelationFilter = {
    is?: DeliveryZoneWhereInput | null
    isNot?: DeliveryZoneWhereInput | null
  }

  export type PricingRuleZoneIdServiceTypeCompoundUniqueInput = {
    zoneId: string
    serviceType: $Enums.ServiceType
  }

  export type PricingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleAvgOrderByAggregateInput = {
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrder
  }

  export type PricingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    serviceType?: SortOrder
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingRuleSumOrderByAggregateInput = {
    basePrice?: SortOrder
    pricePerKg?: SortOrder
    maxWeight?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutCourierInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type TrackingEventCreateNestedManyWithoutActorInput = {
    create?: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput> | TrackingEventCreateWithoutActorInput[] | TrackingEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutActorInput | TrackingEventCreateOrConnectWithoutActorInput[]
    createMany?: TrackingEventCreateManyActorInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type DeliveryAttemptCreateNestedManyWithoutCourierInput = {
    create?: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput> | DeliveryAttemptCreateWithoutCourierInput[] | DeliveryAttemptUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutCourierInput | DeliveryAttemptCreateOrConnectWithoutCourierInput[]
    createMany?: DeliveryAttemptCreateManyCourierInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type TrackingEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput> | TrackingEventCreateWithoutActorInput[] | TrackingEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutActorInput | TrackingEventCreateOrConnectWithoutActorInput[]
    createMany?: TrackingEventCreateManyActorInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput> | DeliveryAttemptCreateWithoutCourierInput[] | DeliveryAttemptUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutCourierInput | DeliveryAttemptCreateOrConnectWithoutCourierInput[]
    createMany?: DeliveryAttemptCreateManyCourierInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShipmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCourierInput | ShipmentUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCourierInput | ShipmentUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCourierInput | ShipmentUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type TrackingEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput> | TrackingEventCreateWithoutActorInput[] | TrackingEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutActorInput | TrackingEventCreateOrConnectWithoutActorInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutActorInput | TrackingEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: TrackingEventCreateManyActorInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutActorInput | TrackingEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutActorInput | TrackingEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type DeliveryAttemptUpdateManyWithoutCourierNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput> | DeliveryAttemptCreateWithoutCourierInput[] | DeliveryAttemptUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutCourierInput | DeliveryAttemptCreateOrConnectWithoutCourierInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutCourierInput | DeliveryAttemptUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: DeliveryAttemptCreateManyCourierInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutCourierInput | DeliveryAttemptUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutCourierInput | DeliveryAttemptUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput> | ShipmentCreateWithoutCustomerInput[] | ShipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCustomerInput | ShipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCustomerInput | ShipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentCreateManyCustomerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCustomerInput | ShipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCustomerInput | ShipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCourierInput | ShipmentUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCourierInput | ShipmentUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCourierInput | ShipmentUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type TrackingEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput> | TrackingEventCreateWithoutActorInput[] | TrackingEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutActorInput | TrackingEventCreateOrConnectWithoutActorInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutActorInput | TrackingEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: TrackingEventCreateManyActorInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutActorInput | TrackingEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutActorInput | TrackingEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput> | DeliveryAttemptCreateWithoutCourierInput[] | DeliveryAttemptUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutCourierInput | DeliveryAttemptCreateOrConnectWithoutCourierInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutCourierInput | DeliveryAttemptUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: DeliveryAttemptCreateManyCourierInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutCourierInput | DeliveryAttemptUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutCourierInput | DeliveryAttemptUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShipmentsAsCustomerInput = {
    create?: XOR<UserCreateWithoutShipmentsAsCustomerInput, UserUncheckedCreateWithoutShipmentsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShipmentsAsCourierInput = {
    create?: XOR<UserCreateWithoutShipmentsAsCourierInput, UserUncheckedCreateWithoutShipmentsAsCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsCourierInput
    connect?: UserWhereUniqueInput
  }

  export type DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput = {
    create?: XOR<DeliveryZoneCreateWithoutOriginShipmentsInput, DeliveryZoneUncheckedCreateWithoutOriginShipmentsInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutOriginShipmentsInput
    connect?: DeliveryZoneWhereUniqueInput
  }

  export type DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput = {
    create?: XOR<DeliveryZoneCreateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedCreateWithoutDestinationShipmentsInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutDestinationShipmentsInput
    connect?: DeliveryZoneWhereUniqueInput
  }

  export type ParcelCreateNestedOneWithoutShipmentInput = {
    create?: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutShipmentInput
    connect?: ParcelWhereUniqueInput
  }

  export type TrackingEventCreateNestedManyWithoutShipmentInput = {
    create?: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput> | TrackingEventCreateWithoutShipmentInput[] | TrackingEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutShipmentInput | TrackingEventCreateOrConnectWithoutShipmentInput[]
    createMany?: TrackingEventCreateManyShipmentInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type DeliveryAttemptCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput> | DeliveryAttemptCreateWithoutShipmentInput[] | DeliveryAttemptUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutShipmentInput | DeliveryAttemptCreateOrConnectWithoutShipmentInput[]
    createMany?: DeliveryAttemptCreateManyShipmentInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutShipmentInput = {
    create?: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutShipmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type ParcelUncheckedCreateNestedOneWithoutShipmentInput = {
    create?: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutShipmentInput
    connect?: ParcelWhereUniqueInput
  }

  export type TrackingEventUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput> | TrackingEventCreateWithoutShipmentInput[] | TrackingEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutShipmentInput | TrackingEventCreateOrConnectWithoutShipmentInput[]
    createMany?: TrackingEventCreateManyShipmentInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput> | DeliveryAttemptCreateWithoutShipmentInput[] | DeliveryAttemptUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutShipmentInput | DeliveryAttemptCreateOrConnectWithoutShipmentInput[]
    createMany?: DeliveryAttemptCreateManyShipmentInputEnvelope
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutShipmentInput = {
    create?: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutShipmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsAsCustomerInput, UserUncheckedCreateWithoutShipmentsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsCustomerInput
    upsert?: UserUpsertWithoutShipmentsAsCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsAsCustomerInput, UserUpdateWithoutShipmentsAsCustomerInput>, UserUncheckedUpdateWithoutShipmentsAsCustomerInput>
  }

  export type UserUpdateOneWithoutShipmentsAsCourierNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsAsCourierInput, UserUncheckedCreateWithoutShipmentsAsCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsCourierInput
    upsert?: UserUpsertWithoutShipmentsAsCourierInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsAsCourierInput, UserUpdateWithoutShipmentsAsCourierInput>, UserUncheckedUpdateWithoutShipmentsAsCourierInput>
  }

  export type DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput = {
    create?: XOR<DeliveryZoneCreateWithoutOriginShipmentsInput, DeliveryZoneUncheckedCreateWithoutOriginShipmentsInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutOriginShipmentsInput
    upsert?: DeliveryZoneUpsertWithoutOriginShipmentsInput
    connect?: DeliveryZoneWhereUniqueInput
    update?: XOR<XOR<DeliveryZoneUpdateToOneWithWhereWithoutOriginShipmentsInput, DeliveryZoneUpdateWithoutOriginShipmentsInput>, DeliveryZoneUncheckedUpdateWithoutOriginShipmentsInput>
  }

  export type DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput = {
    create?: XOR<DeliveryZoneCreateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedCreateWithoutDestinationShipmentsInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutDestinationShipmentsInput
    upsert?: DeliveryZoneUpsertWithoutDestinationShipmentsInput
    connect?: DeliveryZoneWhereUniqueInput
    update?: XOR<XOR<DeliveryZoneUpdateToOneWithWhereWithoutDestinationShipmentsInput, DeliveryZoneUpdateWithoutDestinationShipmentsInput>, DeliveryZoneUncheckedUpdateWithoutDestinationShipmentsInput>
  }

  export type ParcelUpdateOneWithoutShipmentNestedInput = {
    create?: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutShipmentInput
    upsert?: ParcelUpsertWithoutShipmentInput
    disconnect?: ParcelWhereInput | boolean
    delete?: ParcelWhereInput | boolean
    connect?: ParcelWhereUniqueInput
    update?: XOR<XOR<ParcelUpdateToOneWithWhereWithoutShipmentInput, ParcelUpdateWithoutShipmentInput>, ParcelUncheckedUpdateWithoutShipmentInput>
  }

  export type TrackingEventUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput> | TrackingEventCreateWithoutShipmentInput[] | TrackingEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutShipmentInput | TrackingEventCreateOrConnectWithoutShipmentInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutShipmentInput | TrackingEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: TrackingEventCreateManyShipmentInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutShipmentInput | TrackingEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutShipmentInput | TrackingEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type DeliveryAttemptUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput> | DeliveryAttemptCreateWithoutShipmentInput[] | DeliveryAttemptUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutShipmentInput | DeliveryAttemptCreateOrConnectWithoutShipmentInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutShipmentInput | DeliveryAttemptUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DeliveryAttemptCreateManyShipmentInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutShipmentInput | DeliveryAttemptUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutShipmentInput | DeliveryAttemptUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutShipmentNestedInput = {
    create?: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutShipmentInput
    upsert?: PaymentUpsertWithoutShipmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutShipmentInput, PaymentUpdateWithoutShipmentInput>, PaymentUncheckedUpdateWithoutShipmentInput>
  }

  export type ParcelUncheckedUpdateOneWithoutShipmentNestedInput = {
    create?: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: ParcelCreateOrConnectWithoutShipmentInput
    upsert?: ParcelUpsertWithoutShipmentInput
    disconnect?: ParcelWhereInput | boolean
    delete?: ParcelWhereInput | boolean
    connect?: ParcelWhereUniqueInput
    update?: XOR<XOR<ParcelUpdateToOneWithWhereWithoutShipmentInput, ParcelUpdateWithoutShipmentInput>, ParcelUncheckedUpdateWithoutShipmentInput>
  }

  export type TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput> | TrackingEventCreateWithoutShipmentInput[] | TrackingEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutShipmentInput | TrackingEventCreateOrConnectWithoutShipmentInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutShipmentInput | TrackingEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: TrackingEventCreateManyShipmentInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutShipmentInput | TrackingEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutShipmentInput | TrackingEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput> | DeliveryAttemptCreateWithoutShipmentInput[] | DeliveryAttemptUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DeliveryAttemptCreateOrConnectWithoutShipmentInput | DeliveryAttemptCreateOrConnectWithoutShipmentInput[]
    upsert?: DeliveryAttemptUpsertWithWhereUniqueWithoutShipmentInput | DeliveryAttemptUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DeliveryAttemptCreateManyShipmentInputEnvelope
    set?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    disconnect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    delete?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    connect?: DeliveryAttemptWhereUniqueInput | DeliveryAttemptWhereUniqueInput[]
    update?: DeliveryAttemptUpdateWithWhereUniqueWithoutShipmentInput | DeliveryAttemptUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DeliveryAttemptUpdateManyWithWhereWithoutShipmentInput | DeliveryAttemptUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutShipmentNestedInput = {
    create?: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutShipmentInput
    upsert?: PaymentUpsertWithoutShipmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutShipmentInput, PaymentUpdateWithoutShipmentInput>, PaymentUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentCreateNestedOneWithoutParcelInput = {
    create?: XOR<ShipmentCreateWithoutParcelInput, ShipmentUncheckedCreateWithoutParcelInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutParcelInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutParcelNestedInput = {
    create?: XOR<ShipmentCreateWithoutParcelInput, ShipmentUncheckedCreateWithoutParcelInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutParcelInput
    upsert?: ShipmentUpsertWithoutParcelInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutParcelInput, ShipmentUpdateWithoutParcelInput>, ShipmentUncheckedUpdateWithoutParcelInput>
  }

  export type ShipmentCreateNestedOneWithoutTrackingEventsInput = {
    create?: XOR<ShipmentCreateWithoutTrackingEventsInput, ShipmentUncheckedCreateWithoutTrackingEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutTrackingEventsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTrackingEventsActedInput = {
    create?: XOR<UserCreateWithoutTrackingEventsActedInput, UserUncheckedCreateWithoutTrackingEventsActedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackingEventsActedInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutTrackingEventsNestedInput = {
    create?: XOR<ShipmentCreateWithoutTrackingEventsInput, ShipmentUncheckedCreateWithoutTrackingEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutTrackingEventsInput
    upsert?: ShipmentUpsertWithoutTrackingEventsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutTrackingEventsInput, ShipmentUpdateWithoutTrackingEventsInput>, ShipmentUncheckedUpdateWithoutTrackingEventsInput>
  }

  export type UserUpdateOneWithoutTrackingEventsActedNestedInput = {
    create?: XOR<UserCreateWithoutTrackingEventsActedInput, UserUncheckedCreateWithoutTrackingEventsActedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrackingEventsActedInput
    upsert?: UserUpsertWithoutTrackingEventsActedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrackingEventsActedInput, UserUpdateWithoutTrackingEventsActedInput>, UserUncheckedUpdateWithoutTrackingEventsActedInput>
  }

  export type ShipmentCreateNestedOneWithoutDeliveryAttemptsInput = {
    create?: XOR<ShipmentCreateWithoutDeliveryAttemptsInput, ShipmentUncheckedCreateWithoutDeliveryAttemptsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDeliveryAttemptsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeliveryAttemptsInput = {
    create?: XOR<UserCreateWithoutDeliveryAttemptsInput, UserUncheckedCreateWithoutDeliveryAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDeliveryAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryAttemptStatus
  }

  export type ShipmentUpdateOneRequiredWithoutDeliveryAttemptsNestedInput = {
    create?: XOR<ShipmentCreateWithoutDeliveryAttemptsInput, ShipmentUncheckedCreateWithoutDeliveryAttemptsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDeliveryAttemptsInput
    upsert?: ShipmentUpsertWithoutDeliveryAttemptsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutDeliveryAttemptsInput, ShipmentUpdateWithoutDeliveryAttemptsInput>, ShipmentUncheckedUpdateWithoutDeliveryAttemptsInput>
  }

  export type UserUpdateOneRequiredWithoutDeliveryAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryAttemptsInput, UserUncheckedCreateWithoutDeliveryAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryAttemptsInput
    upsert?: UserUpsertWithoutDeliveryAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryAttemptsInput, UserUpdateWithoutDeliveryAttemptsInput>, UserUncheckedUpdateWithoutDeliveryAttemptsInput>
  }

  export type ShipmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<ShipmentCreateWithoutPaymentInput, ShipmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutPaymentInput
    connect?: ShipmentWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type ShipmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<ShipmentCreateWithoutPaymentInput, ShipmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutPaymentInput
    upsert?: ShipmentUpsertWithoutPaymentInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutPaymentInput, ShipmentUpdateWithoutPaymentInput>, ShipmentUncheckedUpdateWithoutPaymentInput>
  }

  export type ShipmentCreateNestedManyWithoutOriginZoneInput = {
    create?: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput> | ShipmentCreateWithoutOriginZoneInput[] | ShipmentUncheckedCreateWithoutOriginZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutOriginZoneInput | ShipmentCreateOrConnectWithoutOriginZoneInput[]
    createMany?: ShipmentCreateManyOriginZoneInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutDestinationZoneInput = {
    create?: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput> | ShipmentCreateWithoutDestinationZoneInput[] | ShipmentUncheckedCreateWithoutDestinationZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDestinationZoneInput | ShipmentCreateOrConnectWithoutDestinationZoneInput[]
    createMany?: ShipmentCreateManyDestinationZoneInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type PricingRuleCreateNestedManyWithoutZoneInput = {
    create?: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput> | PricingRuleCreateWithoutZoneInput[] | PricingRuleUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutZoneInput | PricingRuleCreateOrConnectWithoutZoneInput[]
    createMany?: PricingRuleCreateManyZoneInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutOriginZoneInput = {
    create?: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput> | ShipmentCreateWithoutOriginZoneInput[] | ShipmentUncheckedCreateWithoutOriginZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutOriginZoneInput | ShipmentCreateOrConnectWithoutOriginZoneInput[]
    createMany?: ShipmentCreateManyOriginZoneInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutDestinationZoneInput = {
    create?: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput> | ShipmentCreateWithoutDestinationZoneInput[] | ShipmentUncheckedCreateWithoutDestinationZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDestinationZoneInput | ShipmentCreateOrConnectWithoutDestinationZoneInput[]
    createMany?: ShipmentCreateManyDestinationZoneInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type PricingRuleUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput> | PricingRuleCreateWithoutZoneInput[] | PricingRuleUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutZoneInput | PricingRuleCreateOrConnectWithoutZoneInput[]
    createMany?: PricingRuleCreateManyZoneInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type ShipmentUpdateManyWithoutOriginZoneNestedInput = {
    create?: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput> | ShipmentCreateWithoutOriginZoneInput[] | ShipmentUncheckedCreateWithoutOriginZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutOriginZoneInput | ShipmentCreateOrConnectWithoutOriginZoneInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutOriginZoneInput | ShipmentUpsertWithWhereUniqueWithoutOriginZoneInput[]
    createMany?: ShipmentCreateManyOriginZoneInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutOriginZoneInput | ShipmentUpdateWithWhereUniqueWithoutOriginZoneInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutOriginZoneInput | ShipmentUpdateManyWithWhereWithoutOriginZoneInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutDestinationZoneNestedInput = {
    create?: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput> | ShipmentCreateWithoutDestinationZoneInput[] | ShipmentUncheckedCreateWithoutDestinationZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDestinationZoneInput | ShipmentCreateOrConnectWithoutDestinationZoneInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDestinationZoneInput | ShipmentUpsertWithWhereUniqueWithoutDestinationZoneInput[]
    createMany?: ShipmentCreateManyDestinationZoneInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDestinationZoneInput | ShipmentUpdateWithWhereUniqueWithoutDestinationZoneInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDestinationZoneInput | ShipmentUpdateManyWithWhereWithoutDestinationZoneInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type PricingRuleUpdateManyWithoutZoneNestedInput = {
    create?: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput> | PricingRuleCreateWithoutZoneInput[] | PricingRuleUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutZoneInput | PricingRuleCreateOrConnectWithoutZoneInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutZoneInput | PricingRuleUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: PricingRuleCreateManyZoneInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutZoneInput | PricingRuleUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutZoneInput | PricingRuleUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutOriginZoneNestedInput = {
    create?: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput> | ShipmentCreateWithoutOriginZoneInput[] | ShipmentUncheckedCreateWithoutOriginZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutOriginZoneInput | ShipmentCreateOrConnectWithoutOriginZoneInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutOriginZoneInput | ShipmentUpsertWithWhereUniqueWithoutOriginZoneInput[]
    createMany?: ShipmentCreateManyOriginZoneInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutOriginZoneInput | ShipmentUpdateWithWhereUniqueWithoutOriginZoneInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutOriginZoneInput | ShipmentUpdateManyWithWhereWithoutOriginZoneInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutDestinationZoneNestedInput = {
    create?: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput> | ShipmentCreateWithoutDestinationZoneInput[] | ShipmentUncheckedCreateWithoutDestinationZoneInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDestinationZoneInput | ShipmentCreateOrConnectWithoutDestinationZoneInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDestinationZoneInput | ShipmentUpsertWithWhereUniqueWithoutDestinationZoneInput[]
    createMany?: ShipmentCreateManyDestinationZoneInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDestinationZoneInput | ShipmentUpdateWithWhereUniqueWithoutDestinationZoneInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDestinationZoneInput | ShipmentUpdateManyWithWhereWithoutDestinationZoneInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type PricingRuleUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput> | PricingRuleCreateWithoutZoneInput[] | PricingRuleUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutZoneInput | PricingRuleCreateOrConnectWithoutZoneInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutZoneInput | PricingRuleUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: PricingRuleCreateManyZoneInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutZoneInput | PricingRuleUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutZoneInput | PricingRuleUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type DeliveryZoneCreateNestedOneWithoutPricingRulesInput = {
    create?: XOR<DeliveryZoneCreateWithoutPricingRulesInput, DeliveryZoneUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutPricingRulesInput
    connect?: DeliveryZoneWhereUniqueInput
  }

  export type DeliveryZoneUpdateOneWithoutPricingRulesNestedInput = {
    create?: XOR<DeliveryZoneCreateWithoutPricingRulesInput, DeliveryZoneUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: DeliveryZoneCreateOrConnectWithoutPricingRulesInput
    upsert?: DeliveryZoneUpsertWithoutPricingRulesInput
    disconnect?: DeliveryZoneWhereInput | boolean
    delete?: DeliveryZoneWhereInput | boolean
    connect?: DeliveryZoneWhereUniqueInput
    update?: XOR<XOR<DeliveryZoneUpdateToOneWithWhereWithoutPricingRulesInput, DeliveryZoneUpdateWithoutPricingRulesInput>, DeliveryZoneUncheckedUpdateWithoutPricingRulesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryAttemptStatus | EnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel> | $Enums.DeliveryAttemptStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDeliveryAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryAttemptStatus | EnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryAttemptStatus[] | ListEnumDeliveryAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryAttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryAttemptStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ShipmentCreateWithoutCustomerInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    trackingNumber: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentCreateManyCustomerInputEnvelope = {
    data: ShipmentCreateManyCustomerInput | ShipmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutCourierInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCourierInput = {
    id?: string
    trackingNumber: string
    customerId: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput>
  }

  export type ShipmentCreateManyCourierInputEnvelope = {
    data: ShipmentCreateManyCourierInput | ShipmentCreateManyCourierInput[]
    skipDuplicates?: boolean
  }

  export type TrackingEventCreateWithoutActorInput = {
    id?: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    createdAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutTrackingEventsInput
  }

  export type TrackingEventUncheckedCreateWithoutActorInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    createdAt?: Date | string
  }

  export type TrackingEventCreateOrConnectWithoutActorInput = {
    where: TrackingEventWhereUniqueInput
    create: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput>
  }

  export type TrackingEventCreateManyActorInputEnvelope = {
    data: TrackingEventCreateManyActorInput | TrackingEventCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryAttemptCreateWithoutCourierInput = {
    id?: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutDeliveryAttemptsInput
  }

  export type DeliveryAttemptUncheckedCreateWithoutCourierInput = {
    id?: string
    shipmentId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptCreateOrConnectWithoutCourierInput = {
    where: DeliveryAttemptWhereUniqueInput
    create: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput>
  }

  export type DeliveryAttemptCreateManyCourierInputEnvelope = {
    data: DeliveryAttemptCreateManyCourierInput | DeliveryAttemptCreateManyCourierInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShipmentCreateWithoutCustomerInput, ShipmentUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCustomerInput, ShipmentUncheckedUpdateWithoutCustomerInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCustomerInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: UuidFilter<"Shipment"> | string
    trackingNumber?: StringFilter<"Shipment"> | string
    customerId?: UuidFilter<"Shipment"> | string
    courierId?: UuidNullableFilter<"Shipment"> | string | null
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    originAddress?: StringFilter<"Shipment"> | string
    originCity?: StringFilter<"Shipment"> | string
    originZoneId?: UuidFilter<"Shipment"> | string
    destinationAddress?: StringFilter<"Shipment"> | string
    destinationCity?: StringFilter<"Shipment"> | string
    destinationZoneId?: UuidFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    serviceType?: EnumServiceTypeFilter<"Shipment"> | $Enums.ServiceType
    estimatedPrice?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    pickedUpAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    cancellationReason?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCourierInput, ShipmentUncheckedUpdateWithoutCourierInput>
    create: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCourierInput, ShipmentUncheckedUpdateWithoutCourierInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCourierInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCourierInput>
  }

  export type TrackingEventUpsertWithWhereUniqueWithoutActorInput = {
    where: TrackingEventWhereUniqueInput
    update: XOR<TrackingEventUpdateWithoutActorInput, TrackingEventUncheckedUpdateWithoutActorInput>
    create: XOR<TrackingEventCreateWithoutActorInput, TrackingEventUncheckedCreateWithoutActorInput>
  }

  export type TrackingEventUpdateWithWhereUniqueWithoutActorInput = {
    where: TrackingEventWhereUniqueInput
    data: XOR<TrackingEventUpdateWithoutActorInput, TrackingEventUncheckedUpdateWithoutActorInput>
  }

  export type TrackingEventUpdateManyWithWhereWithoutActorInput = {
    where: TrackingEventScalarWhereInput
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyWithoutActorInput>
  }

  export type TrackingEventScalarWhereInput = {
    AND?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
    OR?: TrackingEventScalarWhereInput[]
    NOT?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
    id?: UuidFilter<"TrackingEvent"> | string
    shipmentId?: UuidFilter<"TrackingEvent"> | string
    status?: EnumShipmentStatusFilter<"TrackingEvent"> | $Enums.ShipmentStatus
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringNullableFilter<"TrackingEvent"> | string | null
    actorId?: UuidNullableFilter<"TrackingEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackingEvent"> | Date | string
  }

  export type DeliveryAttemptUpsertWithWhereUniqueWithoutCourierInput = {
    where: DeliveryAttemptWhereUniqueInput
    update: XOR<DeliveryAttemptUpdateWithoutCourierInput, DeliveryAttemptUncheckedUpdateWithoutCourierInput>
    create: XOR<DeliveryAttemptCreateWithoutCourierInput, DeliveryAttemptUncheckedCreateWithoutCourierInput>
  }

  export type DeliveryAttemptUpdateWithWhereUniqueWithoutCourierInput = {
    where: DeliveryAttemptWhereUniqueInput
    data: XOR<DeliveryAttemptUpdateWithoutCourierInput, DeliveryAttemptUncheckedUpdateWithoutCourierInput>
  }

  export type DeliveryAttemptUpdateManyWithWhereWithoutCourierInput = {
    where: DeliveryAttemptScalarWhereInput
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyWithoutCourierInput>
  }

  export type DeliveryAttemptScalarWhereInput = {
    AND?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
    OR?: DeliveryAttemptScalarWhereInput[]
    NOT?: DeliveryAttemptScalarWhereInput | DeliveryAttemptScalarWhereInput[]
    id?: UuidFilter<"DeliveryAttempt"> | string
    shipmentId?: UuidFilter<"DeliveryAttempt"> | string
    courierId?: UuidFilter<"DeliveryAttempt"> | string
    attemptNumber?: IntFilter<"DeliveryAttempt"> | number
    status?: EnumDeliveryAttemptStatusFilter<"DeliveryAttempt"> | $Enums.DeliveryAttemptStatus
    failureReason?: StringNullableFilter<"DeliveryAttempt"> | string | null
    notes?: StringNullableFilter<"DeliveryAttempt"> | string | null
    attemptedAt?: DateTimeFilter<"DeliveryAttempt"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    referenceId?: UuidNullableFilter<"Notification"> | string | null
    referenceType?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    actorId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutShipmentsAsCustomerInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutShipmentsAsCustomerInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutShipmentsAsCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsAsCustomerInput, UserUncheckedCreateWithoutShipmentsAsCustomerInput>
  }

  export type UserCreateWithoutShipmentsAsCourierInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutShipmentsAsCourierInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutShipmentsAsCourierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsAsCourierInput, UserUncheckedCreateWithoutShipmentsAsCourierInput>
  }

  export type DeliveryZoneCreateWithoutOriginShipmentsInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    destinationShipments?: ShipmentCreateNestedManyWithoutDestinationZoneInput
    pricingRules?: PricingRuleCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneUncheckedCreateWithoutOriginShipmentsInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    destinationShipments?: ShipmentUncheckedCreateNestedManyWithoutDestinationZoneInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneCreateOrConnectWithoutOriginShipmentsInput = {
    where: DeliveryZoneWhereUniqueInput
    create: XOR<DeliveryZoneCreateWithoutOriginShipmentsInput, DeliveryZoneUncheckedCreateWithoutOriginShipmentsInput>
  }

  export type DeliveryZoneCreateWithoutDestinationShipmentsInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentCreateNestedManyWithoutOriginZoneInput
    pricingRules?: PricingRuleCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneUncheckedCreateWithoutDestinationShipmentsInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentUncheckedCreateNestedManyWithoutOriginZoneInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutZoneInput
  }

  export type DeliveryZoneCreateOrConnectWithoutDestinationShipmentsInput = {
    where: DeliveryZoneWhereUniqueInput
    create: XOR<DeliveryZoneCreateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedCreateWithoutDestinationShipmentsInput>
  }

  export type ParcelCreateWithoutShipmentInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    description?: string | null
    isFragile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUncheckedCreateWithoutShipmentInput = {
    id?: string
    weight: Decimal | DecimalJsLike | number | string
    length: Decimal | DecimalJsLike | number | string
    width: Decimal | DecimalJsLike | number | string
    height: Decimal | DecimalJsLike | number | string
    description?: string | null
    isFragile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelCreateOrConnectWithoutShipmentInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
  }

  export type TrackingEventCreateWithoutShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutTrackingEventsActedInput
  }

  export type TrackingEventUncheckedCreateWithoutShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type TrackingEventCreateOrConnectWithoutShipmentInput = {
    where: TrackingEventWhereUniqueInput
    create: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput>
  }

  export type TrackingEventCreateManyShipmentInputEnvelope = {
    data: TrackingEventCreateManyShipmentInput | TrackingEventCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryAttemptCreateWithoutShipmentInput = {
    id?: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
    courier: UserCreateNestedOneWithoutDeliveryAttemptsInput
  }

  export type DeliveryAttemptUncheckedCreateWithoutShipmentInput = {
    id?: string
    courierId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type DeliveryAttemptCreateOrConnectWithoutShipmentInput = {
    where: DeliveryAttemptWhereUniqueInput
    create: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput>
  }

  export type DeliveryAttemptCreateManyShipmentInputEnvelope = {
    data: DeliveryAttemptCreateManyShipmentInput | DeliveryAttemptCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutShipmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    bkashPaymentId?: string | null
    bkashTrxId?: string | null
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutShipmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    bkashPaymentId?: string | null
    bkashTrxId?: string | null
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutShipmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
  }

  export type UserUpsertWithoutShipmentsAsCustomerInput = {
    update: XOR<UserUpdateWithoutShipmentsAsCustomerInput, UserUncheckedUpdateWithoutShipmentsAsCustomerInput>
    create: XOR<UserCreateWithoutShipmentsAsCustomerInput, UserUncheckedCreateWithoutShipmentsAsCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsAsCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsAsCustomerInput, UserUncheckedUpdateWithoutShipmentsAsCustomerInput>
  }

  export type UserUpdateWithoutShipmentsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutShipmentsAsCourierInput = {
    update: XOR<UserUpdateWithoutShipmentsAsCourierInput, UserUncheckedUpdateWithoutShipmentsAsCourierInput>
    create: XOR<UserCreateWithoutShipmentsAsCourierInput, UserUncheckedCreateWithoutShipmentsAsCourierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsAsCourierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsAsCourierInput, UserUncheckedUpdateWithoutShipmentsAsCourierInput>
  }

  export type UserUpdateWithoutShipmentsAsCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsAsCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type DeliveryZoneUpsertWithoutOriginShipmentsInput = {
    update: XOR<DeliveryZoneUpdateWithoutOriginShipmentsInput, DeliveryZoneUncheckedUpdateWithoutOriginShipmentsInput>
    create: XOR<DeliveryZoneCreateWithoutOriginShipmentsInput, DeliveryZoneUncheckedCreateWithoutOriginShipmentsInput>
    where?: DeliveryZoneWhereInput
  }

  export type DeliveryZoneUpdateToOneWithWhereWithoutOriginShipmentsInput = {
    where?: DeliveryZoneWhereInput
    data: XOR<DeliveryZoneUpdateWithoutOriginShipmentsInput, DeliveryZoneUncheckedUpdateWithoutOriginShipmentsInput>
  }

  export type DeliveryZoneUpdateWithoutOriginShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    destinationShipments?: ShipmentUpdateManyWithoutDestinationZoneNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutZoneNestedInput
  }

  export type DeliveryZoneUncheckedUpdateWithoutOriginShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    destinationShipments?: ShipmentUncheckedUpdateManyWithoutDestinationZoneNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type DeliveryZoneUpsertWithoutDestinationShipmentsInput = {
    update: XOR<DeliveryZoneUpdateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedUpdateWithoutDestinationShipmentsInput>
    create: XOR<DeliveryZoneCreateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedCreateWithoutDestinationShipmentsInput>
    where?: DeliveryZoneWhereInput
  }

  export type DeliveryZoneUpdateToOneWithWhereWithoutDestinationShipmentsInput = {
    where?: DeliveryZoneWhereInput
    data: XOR<DeliveryZoneUpdateWithoutDestinationShipmentsInput, DeliveryZoneUncheckedUpdateWithoutDestinationShipmentsInput>
  }

  export type DeliveryZoneUpdateWithoutDestinationShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUpdateManyWithoutOriginZoneNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutZoneNestedInput
  }

  export type DeliveryZoneUncheckedUpdateWithoutDestinationShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUncheckedUpdateManyWithoutOriginZoneNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ParcelUpsertWithoutShipmentInput = {
    update: XOR<ParcelUpdateWithoutShipmentInput, ParcelUncheckedUpdateWithoutShipmentInput>
    create: XOR<ParcelCreateWithoutShipmentInput, ParcelUncheckedCreateWithoutShipmentInput>
    where?: ParcelWhereInput
  }

  export type ParcelUpdateToOneWithWhereWithoutShipmentInput = {
    where?: ParcelWhereInput
    data: XOR<ParcelUpdateWithoutShipmentInput, ParcelUncheckedUpdateWithoutShipmentInput>
  }

  export type ParcelUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    length?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isFragile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventUpsertWithWhereUniqueWithoutShipmentInput = {
    where: TrackingEventWhereUniqueInput
    update: XOR<TrackingEventUpdateWithoutShipmentInput, TrackingEventUncheckedUpdateWithoutShipmentInput>
    create: XOR<TrackingEventCreateWithoutShipmentInput, TrackingEventUncheckedCreateWithoutShipmentInput>
  }

  export type TrackingEventUpdateWithWhereUniqueWithoutShipmentInput = {
    where: TrackingEventWhereUniqueInput
    data: XOR<TrackingEventUpdateWithoutShipmentInput, TrackingEventUncheckedUpdateWithoutShipmentInput>
  }

  export type TrackingEventUpdateManyWithWhereWithoutShipmentInput = {
    where: TrackingEventScalarWhereInput
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyWithoutShipmentInput>
  }

  export type DeliveryAttemptUpsertWithWhereUniqueWithoutShipmentInput = {
    where: DeliveryAttemptWhereUniqueInput
    update: XOR<DeliveryAttemptUpdateWithoutShipmentInput, DeliveryAttemptUncheckedUpdateWithoutShipmentInput>
    create: XOR<DeliveryAttemptCreateWithoutShipmentInput, DeliveryAttemptUncheckedCreateWithoutShipmentInput>
  }

  export type DeliveryAttemptUpdateWithWhereUniqueWithoutShipmentInput = {
    where: DeliveryAttemptWhereUniqueInput
    data: XOR<DeliveryAttemptUpdateWithoutShipmentInput, DeliveryAttemptUncheckedUpdateWithoutShipmentInput>
  }

  export type DeliveryAttemptUpdateManyWithWhereWithoutShipmentInput = {
    where: DeliveryAttemptScalarWhereInput
    data: XOR<DeliveryAttemptUpdateManyMutationInput, DeliveryAttemptUncheckedUpdateManyWithoutShipmentInput>
  }

  export type PaymentUpsertWithoutShipmentInput = {
    update: XOR<PaymentUpdateWithoutShipmentInput, PaymentUncheckedUpdateWithoutShipmentInput>
    create: XOR<PaymentCreateWithoutShipmentInput, PaymentUncheckedCreateWithoutShipmentInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutShipmentInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutShipmentInput, PaymentUncheckedUpdateWithoutShipmentInput>
  }

  export type PaymentUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    bkashTrxId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateWithoutParcelInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutParcelInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutParcelInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutParcelInput, ShipmentUncheckedCreateWithoutParcelInput>
  }

  export type ShipmentUpsertWithoutParcelInput = {
    update: XOR<ShipmentUpdateWithoutParcelInput, ShipmentUncheckedUpdateWithoutParcelInput>
    create: XOR<ShipmentCreateWithoutParcelInput, ShipmentUncheckedCreateWithoutParcelInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutParcelInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutParcelInput, ShipmentUncheckedUpdateWithoutParcelInput>
  }

  export type ShipmentUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentCreateWithoutTrackingEventsInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutTrackingEventsInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutTrackingEventsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutTrackingEventsInput, ShipmentUncheckedCreateWithoutTrackingEventsInput>
  }

  export type UserCreateWithoutTrackingEventsActedInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTrackingEventsActedInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTrackingEventsActedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrackingEventsActedInput, UserUncheckedCreateWithoutTrackingEventsActedInput>
  }

  export type ShipmentUpsertWithoutTrackingEventsInput = {
    update: XOR<ShipmentUpdateWithoutTrackingEventsInput, ShipmentUncheckedUpdateWithoutTrackingEventsInput>
    create: XOR<ShipmentCreateWithoutTrackingEventsInput, ShipmentUncheckedCreateWithoutTrackingEventsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutTrackingEventsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutTrackingEventsInput, ShipmentUncheckedUpdateWithoutTrackingEventsInput>
  }

  export type ShipmentUpdateWithoutTrackingEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutTrackingEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type UserUpsertWithoutTrackingEventsActedInput = {
    update: XOR<UserUpdateWithoutTrackingEventsActedInput, UserUncheckedUpdateWithoutTrackingEventsActedInput>
    create: XOR<UserCreateWithoutTrackingEventsActedInput, UserUncheckedCreateWithoutTrackingEventsActedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrackingEventsActedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrackingEventsActedInput, UserUncheckedUpdateWithoutTrackingEventsActedInput>
  }

  export type UserUpdateWithoutTrackingEventsActedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTrackingEventsActedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShipmentCreateWithoutDeliveryAttemptsInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDeliveryAttemptsInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDeliveryAttemptsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDeliveryAttemptsInput, ShipmentUncheckedCreateWithoutDeliveryAttemptsInput>
  }

  export type UserCreateWithoutDeliveryAttemptsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutDeliveryAttemptsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutDeliveryAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryAttemptsInput, UserUncheckedCreateWithoutDeliveryAttemptsInput>
  }

  export type ShipmentUpsertWithoutDeliveryAttemptsInput = {
    update: XOR<ShipmentUpdateWithoutDeliveryAttemptsInput, ShipmentUncheckedUpdateWithoutDeliveryAttemptsInput>
    create: XOR<ShipmentCreateWithoutDeliveryAttemptsInput, ShipmentUncheckedCreateWithoutDeliveryAttemptsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutDeliveryAttemptsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutDeliveryAttemptsInput, ShipmentUncheckedUpdateWithoutDeliveryAttemptsInput>
  }

  export type ShipmentUpdateWithoutDeliveryAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDeliveryAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type UserUpsertWithoutDeliveryAttemptsInput = {
    update: XOR<UserUpdateWithoutDeliveryAttemptsInput, UserUncheckedUpdateWithoutDeliveryAttemptsInput>
    create: XOR<UserCreateWithoutDeliveryAttemptsInput, UserUncheckedCreateWithoutDeliveryAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryAttemptsInput, UserUncheckedUpdateWithoutDeliveryAttemptsInput>
  }

  export type UserUpdateWithoutDeliveryAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShipmentCreateWithoutPaymentInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutPaymentInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutPaymentInput, ShipmentUncheckedCreateWithoutPaymentInput>
  }

  export type ShipmentUpsertWithoutPaymentInput = {
    update: XOR<ShipmentUpdateWithoutPaymentInput, ShipmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<ShipmentCreateWithoutPaymentInput, ShipmentUncheckedCreateWithoutPaymentInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutPaymentInput, ShipmentUncheckedUpdateWithoutPaymentInput>
  }

  export type ShipmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateWithoutOriginZoneInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    destinationZone: DeliveryZoneCreateNestedOneWithoutDestinationShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutOriginZoneInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutOriginZoneInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput>
  }

  export type ShipmentCreateManyOriginZoneInputEnvelope = {
    data: ShipmentCreateManyOriginZoneInput | ShipmentCreateManyOriginZoneInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutDestinationZoneInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: UserCreateNestedOneWithoutShipmentsAsCustomerInput
    courier?: UserCreateNestedOneWithoutShipmentsAsCourierInput
    originZone: DeliveryZoneCreateNestedOneWithoutOriginShipmentsInput
    parcel?: ParcelCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutShipmentInput
    payment?: PaymentCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDestinationZoneInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    parcel?: ParcelUncheckedCreateNestedOneWithoutShipmentInput
    trackingEvents?: TrackingEventUncheckedCreateNestedManyWithoutShipmentInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutShipmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDestinationZoneInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput>
  }

  export type ShipmentCreateManyDestinationZoneInputEnvelope = {
    data: ShipmentCreateManyDestinationZoneInput | ShipmentCreateManyDestinationZoneInput[]
    skipDuplicates?: boolean
  }

  export type PricingRuleCreateWithoutZoneInput = {
    id?: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleUncheckedCreateWithoutZoneInput = {
    id?: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleCreateOrConnectWithoutZoneInput = {
    where: PricingRuleWhereUniqueInput
    create: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput>
  }

  export type PricingRuleCreateManyZoneInputEnvelope = {
    data: PricingRuleCreateManyZoneInput | PricingRuleCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentUpsertWithWhereUniqueWithoutOriginZoneInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutOriginZoneInput, ShipmentUncheckedUpdateWithoutOriginZoneInput>
    create: XOR<ShipmentCreateWithoutOriginZoneInput, ShipmentUncheckedCreateWithoutOriginZoneInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutOriginZoneInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutOriginZoneInput, ShipmentUncheckedUpdateWithoutOriginZoneInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutOriginZoneInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutOriginZoneInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutDestinationZoneInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutDestinationZoneInput, ShipmentUncheckedUpdateWithoutDestinationZoneInput>
    create: XOR<ShipmentCreateWithoutDestinationZoneInput, ShipmentUncheckedCreateWithoutDestinationZoneInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutDestinationZoneInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutDestinationZoneInput, ShipmentUncheckedUpdateWithoutDestinationZoneInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutDestinationZoneInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutDestinationZoneInput>
  }

  export type PricingRuleUpsertWithWhereUniqueWithoutZoneInput = {
    where: PricingRuleWhereUniqueInput
    update: XOR<PricingRuleUpdateWithoutZoneInput, PricingRuleUncheckedUpdateWithoutZoneInput>
    create: XOR<PricingRuleCreateWithoutZoneInput, PricingRuleUncheckedCreateWithoutZoneInput>
  }

  export type PricingRuleUpdateWithWhereUniqueWithoutZoneInput = {
    where: PricingRuleWhereUniqueInput
    data: XOR<PricingRuleUpdateWithoutZoneInput, PricingRuleUncheckedUpdateWithoutZoneInput>
  }

  export type PricingRuleUpdateManyWithWhereWithoutZoneInput = {
    where: PricingRuleScalarWhereInput
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyWithoutZoneInput>
  }

  export type PricingRuleScalarWhereInput = {
    AND?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    OR?: PricingRuleScalarWhereInput[]
    NOT?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    id?: UuidFilter<"PricingRule"> | string
    zoneId?: UuidNullableFilter<"PricingRule"> | string | null
    serviceType?: EnumServiceTypeFilter<"PricingRule"> | $Enums.ServiceType
    basePrice?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string
    maxWeight?: DecimalNullableFilter<"PricingRule"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    updatedAt?: DateTimeFilter<"PricingRule"> | Date | string
  }

  export type DeliveryZoneCreateWithoutPricingRulesInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentCreateNestedManyWithoutOriginZoneInput
    destinationShipments?: ShipmentCreateNestedManyWithoutDestinationZoneInput
  }

  export type DeliveryZoneUncheckedCreateWithoutPricingRulesInput = {
    id?: string
    name: string
    city: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    originShipments?: ShipmentUncheckedCreateNestedManyWithoutOriginZoneInput
    destinationShipments?: ShipmentUncheckedCreateNestedManyWithoutDestinationZoneInput
  }

  export type DeliveryZoneCreateOrConnectWithoutPricingRulesInput = {
    where: DeliveryZoneWhereUniqueInput
    create: XOR<DeliveryZoneCreateWithoutPricingRulesInput, DeliveryZoneUncheckedCreateWithoutPricingRulesInput>
  }

  export type DeliveryZoneUpsertWithoutPricingRulesInput = {
    update: XOR<DeliveryZoneUpdateWithoutPricingRulesInput, DeliveryZoneUncheckedUpdateWithoutPricingRulesInput>
    create: XOR<DeliveryZoneCreateWithoutPricingRulesInput, DeliveryZoneUncheckedCreateWithoutPricingRulesInput>
    where?: DeliveryZoneWhereInput
  }

  export type DeliveryZoneUpdateToOneWithWhereWithoutPricingRulesInput = {
    where?: DeliveryZoneWhereInput
    data: XOR<DeliveryZoneUpdateWithoutPricingRulesInput, DeliveryZoneUncheckedUpdateWithoutPricingRulesInput>
  }

  export type DeliveryZoneUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUpdateManyWithoutOriginZoneNestedInput
    destinationShipments?: ShipmentUpdateManyWithoutDestinationZoneNestedInput
  }

  export type DeliveryZoneUncheckedUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originShipments?: ShipmentUncheckedUpdateManyWithoutOriginZoneNestedInput
    destinationShipments?: ShipmentUncheckedUpdateManyWithoutDestinationZoneNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptCreateNestedManyWithoutCourierInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    phone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    googleId?: string | null
    isActive?: boolean
    isAvailable?: boolean
    serviceArea?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedCreateNestedManyWithoutCustomerInput
    shipmentsAsCourier?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    trackingEventsActed?: TrackingEventUncheckedCreateNestedManyWithoutActorInput
    deliveryAttempts?: DeliveryAttemptUncheckedCreateNestedManyWithoutCourierInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutCourierNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    serviceArea?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shipmentsAsCustomer?: ShipmentUncheckedUpdateManyWithoutCustomerNestedInput
    shipmentsAsCourier?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    trackingEventsActed?: TrackingEventUncheckedUpdateManyWithoutActorNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutCourierNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShipmentCreateManyCustomerInput = {
    id?: string
    trackingNumber: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShipmentCreateManyCourierInput = {
    id?: string
    trackingNumber: string
    customerId: string
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TrackingEventCreateManyActorInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    createdAt?: Date | string
  }

  export type DeliveryAttemptCreateManyCourierInput = {
    id?: string
    shipmentId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    referenceId?: string | null
    referenceType?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    entity: string
    entityId: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ShipmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingEventUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutTrackingEventsNestedInput
  }

  export type TrackingEventUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutDeliveryAttemptsNestedInput
  }

  export type DeliveryAttemptUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventCreateManyShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    description: string
    location?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type DeliveryAttemptCreateManyShipmentInput = {
    id?: string
    courierId: string
    attemptNumber: number
    status: $Enums.DeliveryAttemptStatus
    failureReason?: string | null
    notes?: string | null
    attemptedAt?: Date | string
  }

  export type TrackingEventUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutTrackingEventsActedNestedInput
  }

  export type TrackingEventUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingEventUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courier?: UserUpdateOneRequiredWithoutDeliveryAttemptsNestedInput
  }

  export type DeliveryAttemptUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryAttemptUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    attemptNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumDeliveryAttemptStatusFieldUpdateOperationsInput | $Enums.DeliveryAttemptStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attemptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyOriginZoneInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    destinationAddress: string
    destinationCity: string
    destinationZoneId: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShipmentCreateManyDestinationZoneInput = {
    id?: string
    trackingNumber: string
    customerId: string
    courierId?: string | null
    status?: $Enums.ShipmentStatus
    originAddress: string
    originCity: string
    originZoneId: string
    destinationAddress: string
    destinationCity: string
    recipientName: string
    recipientPhone: string
    serviceType?: $Enums.ServiceType
    estimatedPrice: Decimal | DecimalJsLike | number | string
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    pickedUpAt?: Date | string | null
    deliveredAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancellationReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PricingRuleCreateManyZoneInput = {
    id?: string
    serviceType: $Enums.ServiceType
    basePrice: Decimal | DecimalJsLike | number | string
    pricePerKg: Decimal | DecimalJsLike | number | string
    maxWeight?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateWithoutOriginZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    destinationZone?: DeliveryZoneUpdateOneRequiredWithoutDestinationShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutOriginZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutOriginZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    destinationZoneId?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentUpdateWithoutDestinationZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: UserUpdateOneRequiredWithoutShipmentsAsCustomerNestedInput
    courier?: UserUpdateOneWithoutShipmentsAsCourierNestedInput
    originZone?: DeliveryZoneUpdateOneRequiredWithoutOriginShipmentsNestedInput
    parcel?: ParcelUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDestinationZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parcel?: ParcelUncheckedUpdateOneWithoutShipmentNestedInput
    trackingEvents?: TrackingEventUncheckedUpdateManyWithoutShipmentNestedInput
    deliveryAttempts?: DeliveryAttemptUncheckedUpdateManyWithoutShipmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutDestinationZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    originAddress?: StringFieldUpdateOperationsInput | string
    originCity?: StringFieldUpdateOperationsInput | string
    originZoneId?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationCity?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    pickedUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PricingRuleUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricePerKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}