
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Village
 * 
 */
export type Village = $Result.DefaultSelection<Prisma.$VillagePayload>
/**
 * Model Contribution
 * 
 */
export type Contribution = $Result.DefaultSelection<Prisma.$ContributionPayload>
/**
 * Model Jimpitan
 * 
 */
export type Jimpitan = $Result.DefaultSelection<Prisma.$JimpitanPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model MoneyJimpitan
 * 
 */
export type MoneyJimpitan = $Result.DefaultSelection<Prisma.$MoneyJimpitanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.village`: Exposes CRUD operations for the **Village** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villages
    * const villages = await prisma.village.findMany()
    * ```
    */
  get village(): Prisma.VillageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contribution.findMany()
    * ```
    */
  get contribution(): Prisma.ContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jimpitan`: Exposes CRUD operations for the **Jimpitan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jimpitans
    * const jimpitans = await prisma.jimpitan.findMany()
    * ```
    */
  get jimpitan(): Prisma.JimpitanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moneyJimpitan`: Exposes CRUD operations for the **MoneyJimpitan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoneyJimpitans
    * const moneyJimpitans = await prisma.moneyJimpitan.findMany()
    * ```
    */
  get moneyJimpitan(): Prisma.MoneyJimpitanDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Village: 'Village',
    Contribution: 'Contribution',
    Jimpitan: 'Jimpitan',
    Schedule: 'Schedule',
    MoneyJimpitan: 'MoneyJimpitan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "village" | "contribution" | "jimpitan" | "schedule" | "moneyJimpitan"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Village: {
        payload: Prisma.$VillagePayload<ExtArgs>
        fields: Prisma.VillageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findFirst: {
            args: Prisma.VillageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          findMany: {
            args: Prisma.VillageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>[]
          }
          create: {
            args: Prisma.VillageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          createMany: {
            args: Prisma.VillageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VillageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          update: {
            args: Prisma.VillageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          deleteMany: {
            args: Prisma.VillageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VillageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePayload>
          }
          aggregate: {
            args: Prisma.VillageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillage>
          }
          groupBy: {
            args: Prisma.VillageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VillageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VillageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VillageCountArgs<ExtArgs>
            result: $Utils.Optional<VillageCountAggregateOutputType> | number
          }
        }
      }
      Contribution: {
        payload: Prisma.$ContributionPayload<ExtArgs>
        fields: Prisma.ContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findFirst: {
            args: Prisma.ContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findMany: {
            args: Prisma.ContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          create: {
            args: Prisma.ContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          createMany: {
            args: Prisma.ContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          update: {
            args: Prisma.ContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          deleteMany: {
            args: Prisma.ContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          aggregate: {
            args: Prisma.ContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContribution>
          }
          groupBy: {
            args: Prisma.ContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContributionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContributionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContributionCountArgs<ExtArgs>
            result: $Utils.Optional<ContributionCountAggregateOutputType> | number
          }
        }
      }
      Jimpitan: {
        payload: Prisma.$JimpitanPayload<ExtArgs>
        fields: Prisma.JimpitanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JimpitanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JimpitanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          findFirst: {
            args: Prisma.JimpitanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JimpitanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          findMany: {
            args: Prisma.JimpitanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>[]
          }
          create: {
            args: Prisma.JimpitanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          createMany: {
            args: Prisma.JimpitanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JimpitanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          update: {
            args: Prisma.JimpitanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          deleteMany: {
            args: Prisma.JimpitanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JimpitanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JimpitanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JimpitanPayload>
          }
          aggregate: {
            args: Prisma.JimpitanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJimpitan>
          }
          groupBy: {
            args: Prisma.JimpitanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JimpitanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JimpitanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.JimpitanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.JimpitanCountArgs<ExtArgs>
            result: $Utils.Optional<JimpitanCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScheduleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScheduleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      MoneyJimpitan: {
        payload: Prisma.$MoneyJimpitanPayload<ExtArgs>
        fields: Prisma.MoneyJimpitanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoneyJimpitanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoneyJimpitanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          findFirst: {
            args: Prisma.MoneyJimpitanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoneyJimpitanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          findMany: {
            args: Prisma.MoneyJimpitanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>[]
          }
          create: {
            args: Prisma.MoneyJimpitanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          createMany: {
            args: Prisma.MoneyJimpitanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MoneyJimpitanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          update: {
            args: Prisma.MoneyJimpitanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          deleteMany: {
            args: Prisma.MoneyJimpitanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoneyJimpitanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MoneyJimpitanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoneyJimpitanPayload>
          }
          aggregate: {
            args: Prisma.MoneyJimpitanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoneyJimpitan>
          }
          groupBy: {
            args: Prisma.MoneyJimpitanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoneyJimpitanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MoneyJimpitanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MoneyJimpitanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MoneyJimpitanCountArgs<ExtArgs>
            result: $Utils.Optional<MoneyJimpitanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    village?: VillageOmit
    contribution?: ContributionOmit
    jimpitan?: JimpitanOmit
    schedule?: ScheduleOmit
    moneyJimpitan?: MoneyJimpitanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    money: number
    contributions: number
    jimpitan: number
    schedule: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    money?: boolean | UserCountOutputTypeCountMoneyArgs
    contributions?: boolean | UserCountOutputTypeCountContributionsArgs
    jimpitan?: boolean | UserCountOutputTypeCountJimpitanArgs
    schedule?: boolean | UserCountOutputTypeCountScheduleArgs
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
  export type UserCountOutputTypeCountMoneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoneyJimpitanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JimpitanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type VillageCountOutputType
   */

  export type VillageCountOutputType = {
    users: number
    contributions: number
    jimpitan: number
    schedule: number
    MoneyJimpitan: number
  }

  export type VillageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | VillageCountOutputTypeCountUsersArgs
    contributions?: boolean | VillageCountOutputTypeCountContributionsArgs
    jimpitan?: boolean | VillageCountOutputTypeCountJimpitanArgs
    schedule?: boolean | VillageCountOutputTypeCountScheduleArgs
    MoneyJimpitan?: boolean | VillageCountOutputTypeCountMoneyJimpitanArgs
  }

  // Custom InputTypes
  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageCountOutputType
     */
    select?: VillageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountJimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JimpitanWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountMoneyJimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoneyJimpitanWhereInput
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
    name: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    villageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
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
    name: string | null
    villageId: string | null
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    village?: boolean | User$villageArgs<ExtArgs>
    money?: boolean | User$moneyArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    jimpitan?: boolean | User$jimpitanArgs<ExtArgs>
    schedule?: boolean | User$scheduleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    village?: boolean | User$villageArgs<ExtArgs>
    money?: boolean | User$moneyArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    jimpitan?: boolean | User$jimpitanArgs<ExtArgs>
    schedule?: boolean | User$scheduleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      village: Prisma.$VillagePayload<ExtArgs> | null
      money: Prisma.$MoneyJimpitanPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      jimpitan: Prisma.$JimpitanPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      villageId: string | null
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    village<T extends User$villageArgs<ExtArgs> = {}>(args?: Subset<T, User$villageArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    money<T extends User$moneyArgs<ExtArgs> = {}>(args?: Subset<T, User$moneyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributions<T extends User$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jimpitan<T extends User$jimpitanArgs<ExtArgs> = {}>(args?: Subset<T, User$jimpitanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends User$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, User$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly villageId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.village
   */
  export type User$villageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    where?: VillageWhereInput
  }

  /**
   * User.money
   */
  export type User$moneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    where?: MoneyJimpitanWhereInput
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    cursor?: MoneyJimpitanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoneyJimpitanScalarFieldEnum | MoneyJimpitanScalarFieldEnum[]
  }

  /**
   * User.contributions
   */
  export type User$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * User.jimpitan
   */
  export type User$jimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    where?: JimpitanWhereInput
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    cursor?: JimpitanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JimpitanScalarFieldEnum | JimpitanScalarFieldEnum[]
  }

  /**
   * User.schedule
   */
  export type User$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
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
   * Model Village
   */

  export type AggregateVillage = {
    _count: VillageCountAggregateOutputType | null
    _avg: VillageAvgAggregateOutputType | null
    _sum: VillageSumAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  export type VillageAvgAggregateOutputType = {
    rt: number | null
    rw: number | null
  }

  export type VillageSumAggregateOutputType = {
    rt: number | null
    rw: number | null
  }

  export type VillageMinAggregateOutputType = {
    id: string | null
    address: string | null
    rt: number | null
    rw: number | null
    urbanVillage: string | null
    subdistrict: string | null
    regency: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageMaxAggregateOutputType = {
    id: string | null
    address: string | null
    rt: number | null
    rw: number | null
    urbanVillage: string | null
    subdistrict: string | null
    regency: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillageCountAggregateOutputType = {
    id: number
    address: number
    rt: number
    rw: number
    urbanVillage: number
    subdistrict: number
    regency: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VillageAvgAggregateInputType = {
    rt?: true
    rw?: true
  }

  export type VillageSumAggregateInputType = {
    rt?: true
    rw?: true
  }

  export type VillageMinAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    urbanVillage?: true
    subdistrict?: true
    regency?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageMaxAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    urbanVillage?: true
    subdistrict?: true
    regency?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillageCountAggregateInputType = {
    id?: true
    address?: true
    rt?: true
    rw?: true
    urbanVillage?: true
    subdistrict?: true
    regency?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VillageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Village to aggregate.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Villages
    **/
    _count?: true | VillageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageMaxAggregateInputType
  }

  export type GetVillageAggregateType<T extends VillageAggregateArgs> = {
        [P in keyof T & keyof AggregateVillage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillage[P]>
      : GetScalarType<T[P], AggregateVillage[P]>
  }




  export type VillageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageWhereInput
    orderBy?: VillageOrderByWithAggregationInput | VillageOrderByWithAggregationInput[]
    by: VillageScalarFieldEnum[] | VillageScalarFieldEnum
    having?: VillageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageCountAggregateInputType | true
    _avg?: VillageAvgAggregateInputType
    _sum?: VillageSumAggregateInputType
    _min?: VillageMinAggregateInputType
    _max?: VillageMaxAggregateInputType
  }

  export type VillageGroupByOutputType = {
    id: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: VillageCountAggregateOutputType | null
    _avg: VillageAvgAggregateOutputType | null
    _sum: VillageSumAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  type GetVillageGroupByPayload<T extends VillageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageGroupByOutputType[P]>
            : GetScalarType<T[P], VillageGroupByOutputType[P]>
        }
      >
    >


  export type VillageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    urbanVillage?: boolean
    subdistrict?: boolean
    regency?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Village$usersArgs<ExtArgs>
    contributions?: boolean | Village$contributionsArgs<ExtArgs>
    jimpitan?: boolean | Village$jimpitanArgs<ExtArgs>
    schedule?: boolean | Village$scheduleArgs<ExtArgs>
    MoneyJimpitan?: boolean | Village$MoneyJimpitanArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["village"]>



  export type VillageSelectScalar = {
    id?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    urbanVillage?: boolean
    subdistrict?: boolean
    regency?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VillageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "rt" | "rw" | "urbanVillage" | "subdistrict" | "regency" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["village"]>
  export type VillageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Village$usersArgs<ExtArgs>
    contributions?: boolean | Village$contributionsArgs<ExtArgs>
    jimpitan?: boolean | Village$jimpitanArgs<ExtArgs>
    schedule?: boolean | Village$scheduleArgs<ExtArgs>
    MoneyJimpitan?: boolean | Village$MoneyJimpitanArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VillagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Village"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      jimpitan: Prisma.$JimpitanPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs>[]
      MoneyJimpitan: Prisma.$MoneyJimpitanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      rt: number
      rw: number
      urbanVillage: string
      subdistrict: string
      regency: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["village"]>
    composites: {}
  }

  type VillageGetPayload<S extends boolean | null | undefined | VillageDefaultArgs> = $Result.GetResult<Prisma.$VillagePayload, S>

  type VillageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillageCountAggregateInputType | true
    }

  export interface VillageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Village'], meta: { name: 'Village' } }
    /**
     * Find zero or one Village that matches the filter.
     * @param {VillageFindUniqueArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillageFindUniqueArgs>(args: SelectSubset<T, VillageFindUniqueArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Village that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillageFindUniqueOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillageFindUniqueOrThrowArgs>(args: SelectSubset<T, VillageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillageFindFirstArgs>(args?: SelectSubset<T, VillageFindFirstArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindFirstOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillageFindFirstOrThrowArgs>(args?: SelectSubset<T, VillageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villages
     * const villages = await prisma.village.findMany()
     * 
     * // Get first 10 Villages
     * const villages = await prisma.village.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villageWithIdOnly = await prisma.village.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillageFindManyArgs>(args?: SelectSubset<T, VillageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Village.
     * @param {VillageCreateArgs} args - Arguments to create a Village.
     * @example
     * // Create one Village
     * const Village = await prisma.village.create({
     *   data: {
     *     // ... data to create a Village
     *   }
     * })
     * 
     */
    create<T extends VillageCreateArgs>(args: SelectSubset<T, VillageCreateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villages.
     * @param {VillageCreateManyArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const village = await prisma.village.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillageCreateManyArgs>(args?: SelectSubset<T, VillageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Village.
     * @param {VillageDeleteArgs} args - Arguments to delete one Village.
     * @example
     * // Delete one Village
     * const Village = await prisma.village.delete({
     *   where: {
     *     // ... filter to delete one Village
     *   }
     * })
     * 
     */
    delete<T extends VillageDeleteArgs>(args: SelectSubset<T, VillageDeleteArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Village.
     * @param {VillageUpdateArgs} args - Arguments to update one Village.
     * @example
     * // Update one Village
     * const village = await prisma.village.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillageUpdateArgs>(args: SelectSubset<T, VillageUpdateArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villages.
     * @param {VillageDeleteManyArgs} args - Arguments to filter Villages to delete.
     * @example
     * // Delete a few Villages
     * const { count } = await prisma.village.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillageDeleteManyArgs>(args?: SelectSubset<T, VillageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villages
     * const village = await prisma.village.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillageUpdateManyArgs>(args: SelectSubset<T, VillageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Village.
     * @param {VillageUpsertArgs} args - Arguments to update or create a Village.
     * @example
     * // Update or create a Village
     * const village = await prisma.village.upsert({
     *   create: {
     *     // ... data to create a Village
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Village we want to update
     *   }
     * })
     */
    upsert<T extends VillageUpsertArgs>(args: SelectSubset<T, VillageUpsertArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villages that matches the filter.
     * @param {VillageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const village = await prisma.village.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VillageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Village.
     * @param {VillageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const village = await prisma.village.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VillageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageCountArgs} args - Arguments to filter Villages to count.
     * @example
     * // Count the number of Villages
     * const count = await prisma.village.count({
     *   where: {
     *     // ... the filter for the Villages we want to count
     *   }
     * })
    **/
    count<T extends VillageCountArgs>(
      args?: Subset<T, VillageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillageAggregateArgs>(args: Subset<T, VillageAggregateArgs>): Prisma.PrismaPromise<GetVillageAggregateType<T>>

    /**
     * Group by Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageGroupByArgs} args - Group by arguments.
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
      T extends VillageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillageGroupByArgs['orderBy'] }
        : { orderBy?: VillageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VillageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Village model
   */
  readonly fields: VillageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Village.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Village$usersArgs<ExtArgs> = {}>(args?: Subset<T, Village$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributions<T extends Village$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, Village$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jimpitan<T extends Village$jimpitanArgs<ExtArgs> = {}>(args?: Subset<T, Village$jimpitanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends Village$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Village$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MoneyJimpitan<T extends Village$MoneyJimpitanArgs<ExtArgs> = {}>(args?: Subset<T, Village$MoneyJimpitanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Village model
   */
  interface VillageFieldRefs {
    readonly id: FieldRef<"Village", 'String'>
    readonly address: FieldRef<"Village", 'String'>
    readonly rt: FieldRef<"Village", 'Int'>
    readonly rw: FieldRef<"Village", 'Int'>
    readonly urbanVillage: FieldRef<"Village", 'String'>
    readonly subdistrict: FieldRef<"Village", 'String'>
    readonly regency: FieldRef<"Village", 'String'>
    readonly link: FieldRef<"Village", 'String'>
    readonly createdAt: FieldRef<"Village", 'DateTime'>
    readonly updatedAt: FieldRef<"Village", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Village findUnique
   */
  export type VillageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findUniqueOrThrow
   */
  export type VillageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village findFirst
   */
  export type VillageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findFirstOrThrow
   */
  export type VillageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Village to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village findMany
   */
  export type VillageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter, which Villages to fetch.
     */
    where?: VillageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Villages to fetch.
     */
    orderBy?: VillageOrderByWithRelationInput | VillageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Villages.
     */
    cursor?: VillageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Villages.
     */
    skip?: number
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * Village create
   */
  export type VillageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to create a Village.
     */
    data: XOR<VillageCreateInput, VillageUncheckedCreateInput>
  }

  /**
   * Village createMany
   */
  export type VillageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Villages.
     */
    data: VillageCreateManyInput | VillageCreateManyInput[]
  }

  /**
   * Village update
   */
  export type VillageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The data needed to update a Village.
     */
    data: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
    /**
     * Choose, which Village to update.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village updateMany
   */
  export type VillageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Villages.
     */
    data: XOR<VillageUpdateManyMutationInput, VillageUncheckedUpdateManyInput>
    /**
     * Filter which Villages to update
     */
    where?: VillageWhereInput
    /**
     * Limit how many Villages to update.
     */
    limit?: number
  }

  /**
   * Village upsert
   */
  export type VillageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * The filter to search for the Village to update in case it exists.
     */
    where: VillageWhereUniqueInput
    /**
     * In case the Village found by the `where` argument doesn't exist, create a new Village with this data.
     */
    create: XOR<VillageCreateInput, VillageUncheckedCreateInput>
    /**
     * In case the Village was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillageUpdateInput, VillageUncheckedUpdateInput>
  }

  /**
   * Village delete
   */
  export type VillageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
    /**
     * Filter which Village to delete.
     */
    where: VillageWhereUniqueInput
  }

  /**
   * Village deleteMany
   */
  export type VillageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Villages to delete
     */
    where?: VillageWhereInput
    /**
     * Limit how many Villages to delete.
     */
    limit?: number
  }

  /**
   * Village findRaw
   */
  export type VillageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Village aggregateRaw
   */
  export type VillageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Village.users
   */
  export type Village$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Village.contributions
   */
  export type Village$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Village.jimpitan
   */
  export type Village$jimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    where?: JimpitanWhereInput
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    cursor?: JimpitanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JimpitanScalarFieldEnum | JimpitanScalarFieldEnum[]
  }

  /**
   * Village.schedule
   */
  export type Village$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Village.MoneyJimpitan
   */
  export type Village$MoneyJimpitanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    where?: MoneyJimpitanWhereInput
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    cursor?: MoneyJimpitanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoneyJimpitanScalarFieldEnum | MoneyJimpitanScalarFieldEnum[]
  }

  /**
   * Village without action
   */
  export type VillageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Village
     */
    select?: VillageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Village
     */
    omit?: VillageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillageInclude<ExtArgs> | null
  }


  /**
   * Model Contribution
   */

  export type AggregateContribution = {
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  export type ContributionMinAggregateOutputType = {
    id: string | null
    admission: string | null
    money: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    villageId: string | null
  }

  export type ContributionMaxAggregateOutputType = {
    id: string | null
    admission: string | null
    money: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    villageId: string | null
  }

  export type ContributionCountAggregateOutputType = {
    id: number
    admission: number
    money: number
    createdAt: number
    updatedAt: number
    userId: number
    villageId: number
    _all: number
  }


  export type ContributionMinAggregateInputType = {
    id?: true
    admission?: true
    money?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    villageId?: true
  }

  export type ContributionMaxAggregateInputType = {
    id?: true
    admission?: true
    money?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    villageId?: true
  }

  export type ContributionCountAggregateInputType = {
    id?: true
    admission?: true
    money?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    villageId?: true
    _all?: true
  }

  export type ContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contribution to aggregate.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributions
    **/
    _count?: true | ContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionMaxAggregateInputType
  }

  export type GetContributionAggregateType<T extends ContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContribution[P]>
      : GetScalarType<T[P], AggregateContribution[P]>
  }




  export type ContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithAggregationInput | ContributionOrderByWithAggregationInput[]
    by: ContributionScalarFieldEnum[] | ContributionScalarFieldEnum
    having?: ContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionCountAggregateInputType | true
    _min?: ContributionMinAggregateInputType
    _max?: ContributionMaxAggregateInputType
  }

  export type ContributionGroupByOutputType = {
    id: string
    admission: string
    money: string
    createdAt: Date
    updatedAt: Date
    userId: string
    villageId: string
    _count: ContributionCountAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  type GetContributionGroupByPayload<T extends ContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionGroupByOutputType[P]>
        }
      >
    >


  export type ContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admission?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    villageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>



  export type ContributionSelectScalar = {
    id?: boolean
    admission?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    villageId?: boolean
  }

  export type ContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admission" | "money" | "createdAt" | "updatedAt" | "userId" | "villageId", ExtArgs["result"]["contribution"]>
  export type ContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }

  export type $ContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contribution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      village: Prisma.$VillagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admission: string
      money: string
      createdAt: Date
      updatedAt: Date
      userId: string
      villageId: string
    }, ExtArgs["result"]["contribution"]>
    composites: {}
  }

  type ContributionGetPayload<S extends boolean | null | undefined | ContributionDefaultArgs> = $Result.GetResult<Prisma.$ContributionPayload, S>

  type ContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributionCountAggregateInputType | true
    }

  export interface ContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contribution'], meta: { name: 'Contribution' } }
    /**
     * Find zero or one Contribution that matches the filter.
     * @param {ContributionFindUniqueArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributionFindUniqueArgs>(args: SelectSubset<T, ContributionFindUniqueArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributionFindUniqueOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributionFindFirstArgs>(args?: SelectSubset<T, ContributionFindFirstArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contribution.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionWithIdOnly = await prisma.contribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributionFindManyArgs>(args?: SelectSubset<T, ContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contribution.
     * @param {ContributionCreateArgs} args - Arguments to create a Contribution.
     * @example
     * // Create one Contribution
     * const Contribution = await prisma.contribution.create({
     *   data: {
     *     // ... data to create a Contribution
     *   }
     * })
     * 
     */
    create<T extends ContributionCreateArgs>(args: SelectSubset<T, ContributionCreateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributions.
     * @param {ContributionCreateManyArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributionCreateManyArgs>(args?: SelectSubset<T, ContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contribution.
     * @param {ContributionDeleteArgs} args - Arguments to delete one Contribution.
     * @example
     * // Delete one Contribution
     * const Contribution = await prisma.contribution.delete({
     *   where: {
     *     // ... filter to delete one Contribution
     *   }
     * })
     * 
     */
    delete<T extends ContributionDeleteArgs>(args: SelectSubset<T, ContributionDeleteArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contribution.
     * @param {ContributionUpdateArgs} args - Arguments to update one Contribution.
     * @example
     * // Update one Contribution
     * const contribution = await prisma.contribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributionUpdateArgs>(args: SelectSubset<T, ContributionUpdateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributions.
     * @param {ContributionDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributionDeleteManyArgs>(args?: SelectSubset<T, ContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributionUpdateManyArgs>(args: SelectSubset<T, ContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contribution.
     * @param {ContributionUpsertArgs} args - Arguments to update or create a Contribution.
     * @example
     * // Update or create a Contribution
     * const contribution = await prisma.contribution.upsert({
     *   create: {
     *     // ... data to create a Contribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contribution we want to update
     *   }
     * })
     */
    upsert<T extends ContributionUpsertArgs>(args: SelectSubset<T, ContributionUpsertArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * @param {ContributionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contribution = await prisma.contribution.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContributionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contribution.
     * @param {ContributionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contribution = await prisma.contribution.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContributionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contribution.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends ContributionCountArgs>(
      args?: Subset<T, ContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContributionAggregateArgs>(args: Subset<T, ContributionAggregateArgs>): Prisma.PrismaPromise<GetContributionAggregateType<T>>

    /**
     * Group by Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionGroupByArgs} args - Group by arguments.
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
      T extends ContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributionGroupByArgs['orderBy'] }
        : { orderBy?: ContributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contribution model
   */
  readonly fields: ContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contribution model
   */
  interface ContributionFieldRefs {
    readonly id: FieldRef<"Contribution", 'String'>
    readonly admission: FieldRef<"Contribution", 'String'>
    readonly money: FieldRef<"Contribution", 'String'>
    readonly createdAt: FieldRef<"Contribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Contribution", 'DateTime'>
    readonly userId: FieldRef<"Contribution", 'String'>
    readonly villageId: FieldRef<"Contribution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contribution findUnique
   */
  export type ContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findUniqueOrThrow
   */
  export type ContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findFirst
   */
  export type ContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findFirstOrThrow
   */
  export type ContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findMany
   */
  export type ContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contributions to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution create
   */
  export type ContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contribution.
     */
    data: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
  }

  /**
   * Contribution createMany
   */
  export type ContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
  }

  /**
   * Contribution update
   */
  export type ContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contribution.
     */
    data: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
    /**
     * Choose, which Contribution to update.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution updateMany
   */
  export type ContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
  }

  /**
   * Contribution upsert
   */
  export type ContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contribution to update in case it exists.
     */
    where: ContributionWhereUniqueInput
    /**
     * In case the Contribution found by the `where` argument doesn't exist, create a new Contribution with this data.
     */
    create: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
    /**
     * In case the Contribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
  }

  /**
   * Contribution delete
   */
  export type ContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter which Contribution to delete.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution deleteMany
   */
  export type ContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributions to delete
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to delete.
     */
    limit?: number
  }

  /**
   * Contribution findRaw
   */
  export type ContributionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contribution aggregateRaw
   */
  export type ContributionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contribution without action
   */
  export type ContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
  }


  /**
   * Model Jimpitan
   */

  export type AggregateJimpitan = {
    _count: JimpitanCountAggregateOutputType | null
    _min: JimpitanMinAggregateOutputType | null
    _max: JimpitanMaxAggregateOutputType | null
  }

  export type JimpitanMinAggregateOutputType = {
    id: string | null
    block: string | null
    villageId: string | null
    assignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JimpitanMaxAggregateOutputType = {
    id: string | null
    block: string | null
    villageId: string | null
    assignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JimpitanCountAggregateOutputType = {
    id: number
    block: number
    villageId: number
    assignId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JimpitanMinAggregateInputType = {
    id?: true
    block?: true
    villageId?: true
    assignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JimpitanMaxAggregateInputType = {
    id?: true
    block?: true
    villageId?: true
    assignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JimpitanCountAggregateInputType = {
    id?: true
    block?: true
    villageId?: true
    assignId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JimpitanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jimpitan to aggregate.
     */
    where?: JimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jimpitans to fetch.
     */
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jimpitans
    **/
    _count?: true | JimpitanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JimpitanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JimpitanMaxAggregateInputType
  }

  export type GetJimpitanAggregateType<T extends JimpitanAggregateArgs> = {
        [P in keyof T & keyof AggregateJimpitan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJimpitan[P]>
      : GetScalarType<T[P], AggregateJimpitan[P]>
  }




  export type JimpitanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JimpitanWhereInput
    orderBy?: JimpitanOrderByWithAggregationInput | JimpitanOrderByWithAggregationInput[]
    by: JimpitanScalarFieldEnum[] | JimpitanScalarFieldEnum
    having?: JimpitanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JimpitanCountAggregateInputType | true
    _min?: JimpitanMinAggregateInputType
    _max?: JimpitanMaxAggregateInputType
  }

  export type JimpitanGroupByOutputType = {
    id: string
    block: string
    villageId: string
    assignId: string
    createdAt: Date
    updatedAt: Date
    _count: JimpitanCountAggregateOutputType | null
    _min: JimpitanMinAggregateOutputType | null
    _max: JimpitanMaxAggregateOutputType | null
  }

  type GetJimpitanGroupByPayload<T extends JimpitanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JimpitanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JimpitanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JimpitanGroupByOutputType[P]>
            : GetScalarType<T[P], JimpitanGroupByOutputType[P]>
        }
      >
    >


  export type JimpitanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    block?: boolean
    villageId?: boolean
    assignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    village?: boolean | VillageDefaultArgs<ExtArgs>
    assign?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jimpitan"]>



  export type JimpitanSelectScalar = {
    id?: boolean
    block?: boolean
    villageId?: boolean
    assignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JimpitanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "block" | "villageId" | "assignId" | "createdAt" | "updatedAt", ExtArgs["result"]["jimpitan"]>
  export type JimpitanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    village?: boolean | VillageDefaultArgs<ExtArgs>
    assign?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JimpitanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jimpitan"
    objects: {
      village: Prisma.$VillagePayload<ExtArgs>
      assign: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      block: string
      villageId: string
      assignId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jimpitan"]>
    composites: {}
  }

  type JimpitanGetPayload<S extends boolean | null | undefined | JimpitanDefaultArgs> = $Result.GetResult<Prisma.$JimpitanPayload, S>

  type JimpitanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JimpitanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JimpitanCountAggregateInputType | true
    }

  export interface JimpitanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jimpitan'], meta: { name: 'Jimpitan' } }
    /**
     * Find zero or one Jimpitan that matches the filter.
     * @param {JimpitanFindUniqueArgs} args - Arguments to find a Jimpitan
     * @example
     * // Get one Jimpitan
     * const jimpitan = await prisma.jimpitan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JimpitanFindUniqueArgs>(args: SelectSubset<T, JimpitanFindUniqueArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jimpitan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JimpitanFindUniqueOrThrowArgs} args - Arguments to find a Jimpitan
     * @example
     * // Get one Jimpitan
     * const jimpitan = await prisma.jimpitan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JimpitanFindUniqueOrThrowArgs>(args: SelectSubset<T, JimpitanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jimpitan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanFindFirstArgs} args - Arguments to find a Jimpitan
     * @example
     * // Get one Jimpitan
     * const jimpitan = await prisma.jimpitan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JimpitanFindFirstArgs>(args?: SelectSubset<T, JimpitanFindFirstArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jimpitan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanFindFirstOrThrowArgs} args - Arguments to find a Jimpitan
     * @example
     * // Get one Jimpitan
     * const jimpitan = await prisma.jimpitan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JimpitanFindFirstOrThrowArgs>(args?: SelectSubset<T, JimpitanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jimpitans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jimpitans
     * const jimpitans = await prisma.jimpitan.findMany()
     * 
     * // Get first 10 Jimpitans
     * const jimpitans = await prisma.jimpitan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jimpitanWithIdOnly = await prisma.jimpitan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JimpitanFindManyArgs>(args?: SelectSubset<T, JimpitanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jimpitan.
     * @param {JimpitanCreateArgs} args - Arguments to create a Jimpitan.
     * @example
     * // Create one Jimpitan
     * const Jimpitan = await prisma.jimpitan.create({
     *   data: {
     *     // ... data to create a Jimpitan
     *   }
     * })
     * 
     */
    create<T extends JimpitanCreateArgs>(args: SelectSubset<T, JimpitanCreateArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jimpitans.
     * @param {JimpitanCreateManyArgs} args - Arguments to create many Jimpitans.
     * @example
     * // Create many Jimpitans
     * const jimpitan = await prisma.jimpitan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JimpitanCreateManyArgs>(args?: SelectSubset<T, JimpitanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jimpitan.
     * @param {JimpitanDeleteArgs} args - Arguments to delete one Jimpitan.
     * @example
     * // Delete one Jimpitan
     * const Jimpitan = await prisma.jimpitan.delete({
     *   where: {
     *     // ... filter to delete one Jimpitan
     *   }
     * })
     * 
     */
    delete<T extends JimpitanDeleteArgs>(args: SelectSubset<T, JimpitanDeleteArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jimpitan.
     * @param {JimpitanUpdateArgs} args - Arguments to update one Jimpitan.
     * @example
     * // Update one Jimpitan
     * const jimpitan = await prisma.jimpitan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JimpitanUpdateArgs>(args: SelectSubset<T, JimpitanUpdateArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jimpitans.
     * @param {JimpitanDeleteManyArgs} args - Arguments to filter Jimpitans to delete.
     * @example
     * // Delete a few Jimpitans
     * const { count } = await prisma.jimpitan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JimpitanDeleteManyArgs>(args?: SelectSubset<T, JimpitanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jimpitans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jimpitans
     * const jimpitan = await prisma.jimpitan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JimpitanUpdateManyArgs>(args: SelectSubset<T, JimpitanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jimpitan.
     * @param {JimpitanUpsertArgs} args - Arguments to update or create a Jimpitan.
     * @example
     * // Update or create a Jimpitan
     * const jimpitan = await prisma.jimpitan.upsert({
     *   create: {
     *     // ... data to create a Jimpitan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jimpitan we want to update
     *   }
     * })
     */
    upsert<T extends JimpitanUpsertArgs>(args: SelectSubset<T, JimpitanUpsertArgs<ExtArgs>>): Prisma__JimpitanClient<$Result.GetResult<Prisma.$JimpitanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jimpitans that matches the filter.
     * @param {JimpitanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jimpitan = await prisma.jimpitan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: JimpitanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Jimpitan.
     * @param {JimpitanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jimpitan = await prisma.jimpitan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JimpitanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Jimpitans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanCountArgs} args - Arguments to filter Jimpitans to count.
     * @example
     * // Count the number of Jimpitans
     * const count = await prisma.jimpitan.count({
     *   where: {
     *     // ... the filter for the Jimpitans we want to count
     *   }
     * })
    **/
    count<T extends JimpitanCountArgs>(
      args?: Subset<T, JimpitanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JimpitanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jimpitan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JimpitanAggregateArgs>(args: Subset<T, JimpitanAggregateArgs>): Prisma.PrismaPromise<GetJimpitanAggregateType<T>>

    /**
     * Group by Jimpitan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JimpitanGroupByArgs} args - Group by arguments.
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
      T extends JimpitanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JimpitanGroupByArgs['orderBy'] }
        : { orderBy?: JimpitanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JimpitanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJimpitanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jimpitan model
   */
  readonly fields: JimpitanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jimpitan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JimpitanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assign<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jimpitan model
   */
  interface JimpitanFieldRefs {
    readonly id: FieldRef<"Jimpitan", 'String'>
    readonly block: FieldRef<"Jimpitan", 'String'>
    readonly villageId: FieldRef<"Jimpitan", 'String'>
    readonly assignId: FieldRef<"Jimpitan", 'String'>
    readonly createdAt: FieldRef<"Jimpitan", 'DateTime'>
    readonly updatedAt: FieldRef<"Jimpitan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jimpitan findUnique
   */
  export type JimpitanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter, which Jimpitan to fetch.
     */
    where: JimpitanWhereUniqueInput
  }

  /**
   * Jimpitan findUniqueOrThrow
   */
  export type JimpitanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter, which Jimpitan to fetch.
     */
    where: JimpitanWhereUniqueInput
  }

  /**
   * Jimpitan findFirst
   */
  export type JimpitanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter, which Jimpitan to fetch.
     */
    where?: JimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jimpitans to fetch.
     */
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jimpitans.
     */
    cursor?: JimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jimpitans.
     */
    distinct?: JimpitanScalarFieldEnum | JimpitanScalarFieldEnum[]
  }

  /**
   * Jimpitan findFirstOrThrow
   */
  export type JimpitanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter, which Jimpitan to fetch.
     */
    where?: JimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jimpitans to fetch.
     */
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jimpitans.
     */
    cursor?: JimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jimpitans.
     */
    distinct?: JimpitanScalarFieldEnum | JimpitanScalarFieldEnum[]
  }

  /**
   * Jimpitan findMany
   */
  export type JimpitanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter, which Jimpitans to fetch.
     */
    where?: JimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jimpitans to fetch.
     */
    orderBy?: JimpitanOrderByWithRelationInput | JimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jimpitans.
     */
    cursor?: JimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jimpitans.
     */
    skip?: number
    distinct?: JimpitanScalarFieldEnum | JimpitanScalarFieldEnum[]
  }

  /**
   * Jimpitan create
   */
  export type JimpitanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * The data needed to create a Jimpitan.
     */
    data: XOR<JimpitanCreateInput, JimpitanUncheckedCreateInput>
  }

  /**
   * Jimpitan createMany
   */
  export type JimpitanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jimpitans.
     */
    data: JimpitanCreateManyInput | JimpitanCreateManyInput[]
  }

  /**
   * Jimpitan update
   */
  export type JimpitanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * The data needed to update a Jimpitan.
     */
    data: XOR<JimpitanUpdateInput, JimpitanUncheckedUpdateInput>
    /**
     * Choose, which Jimpitan to update.
     */
    where: JimpitanWhereUniqueInput
  }

  /**
   * Jimpitan updateMany
   */
  export type JimpitanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jimpitans.
     */
    data: XOR<JimpitanUpdateManyMutationInput, JimpitanUncheckedUpdateManyInput>
    /**
     * Filter which Jimpitans to update
     */
    where?: JimpitanWhereInput
    /**
     * Limit how many Jimpitans to update.
     */
    limit?: number
  }

  /**
   * Jimpitan upsert
   */
  export type JimpitanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * The filter to search for the Jimpitan to update in case it exists.
     */
    where: JimpitanWhereUniqueInput
    /**
     * In case the Jimpitan found by the `where` argument doesn't exist, create a new Jimpitan with this data.
     */
    create: XOR<JimpitanCreateInput, JimpitanUncheckedCreateInput>
    /**
     * In case the Jimpitan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JimpitanUpdateInput, JimpitanUncheckedUpdateInput>
  }

  /**
   * Jimpitan delete
   */
  export type JimpitanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
    /**
     * Filter which Jimpitan to delete.
     */
    where: JimpitanWhereUniqueInput
  }

  /**
   * Jimpitan deleteMany
   */
  export type JimpitanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jimpitans to delete
     */
    where?: JimpitanWhereInput
    /**
     * Limit how many Jimpitans to delete.
     */
    limit?: number
  }

  /**
   * Jimpitan findRaw
   */
  export type JimpitanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Jimpitan aggregateRaw
   */
  export type JimpitanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Jimpitan without action
   */
  export type JimpitanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jimpitan
     */
    select?: JimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jimpitan
     */
    omit?: JimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JimpitanInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    day: string | null
    userId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    day: string | null
    userId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    day: number
    userId: number
    villageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    day?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    day?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    day?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    day: string
    userId: string
    villageId: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    userId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    id?: boolean
    day?: boolean
    userId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "userId" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      village: Prisma.$VillagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: string
      userId: string
      villageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * @param {ScheduleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const schedule = await prisma.schedule.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScheduleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Schedule.
     * @param {ScheduleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const schedule = await prisma.schedule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScheduleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly day: FieldRef<"Schedule", 'String'>
    readonly userId: FieldRef<"Schedule", 'String'>
    readonly villageId: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule findRaw
   */
  export type ScheduleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Schedule aggregateRaw
   */
  export type ScheduleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model MoneyJimpitan
   */

  export type AggregateMoneyJimpitan = {
    _count: MoneyJimpitanCountAggregateOutputType | null
    _min: MoneyJimpitanMinAggregateOutputType | null
    _max: MoneyJimpitanMaxAggregateOutputType | null
  }

  export type MoneyJimpitanMinAggregateOutputType = {
    id: string | null
    money: string | null
    block: string | null
    userId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoneyJimpitanMaxAggregateOutputType = {
    id: string | null
    money: string | null
    block: string | null
    userId: string | null
    villageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoneyJimpitanCountAggregateOutputType = {
    id: number
    money: number
    block: number
    userId: number
    villageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MoneyJimpitanMinAggregateInputType = {
    id?: true
    money?: true
    block?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoneyJimpitanMaxAggregateInputType = {
    id?: true
    money?: true
    block?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoneyJimpitanCountAggregateInputType = {
    id?: true
    money?: true
    block?: true
    userId?: true
    villageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MoneyJimpitanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoneyJimpitan to aggregate.
     */
    where?: MoneyJimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoneyJimpitans to fetch.
     */
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoneyJimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoneyJimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoneyJimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoneyJimpitans
    **/
    _count?: true | MoneyJimpitanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoneyJimpitanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoneyJimpitanMaxAggregateInputType
  }

  export type GetMoneyJimpitanAggregateType<T extends MoneyJimpitanAggregateArgs> = {
        [P in keyof T & keyof AggregateMoneyJimpitan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoneyJimpitan[P]>
      : GetScalarType<T[P], AggregateMoneyJimpitan[P]>
  }




  export type MoneyJimpitanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoneyJimpitanWhereInput
    orderBy?: MoneyJimpitanOrderByWithAggregationInput | MoneyJimpitanOrderByWithAggregationInput[]
    by: MoneyJimpitanScalarFieldEnum[] | MoneyJimpitanScalarFieldEnum
    having?: MoneyJimpitanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoneyJimpitanCountAggregateInputType | true
    _min?: MoneyJimpitanMinAggregateInputType
    _max?: MoneyJimpitanMaxAggregateInputType
  }

  export type MoneyJimpitanGroupByOutputType = {
    id: string
    money: string
    block: string
    userId: string
    villageId: string
    createdAt: Date
    updatedAt: Date
    _count: MoneyJimpitanCountAggregateOutputType | null
    _min: MoneyJimpitanMinAggregateOutputType | null
    _max: MoneyJimpitanMaxAggregateOutputType | null
  }

  type GetMoneyJimpitanGroupByPayload<T extends MoneyJimpitanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoneyJimpitanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoneyJimpitanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoneyJimpitanGroupByOutputType[P]>
            : GetScalarType<T[P], MoneyJimpitanGroupByOutputType[P]>
        }
      >
    >


  export type MoneyJimpitanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    money?: boolean
    block?: boolean
    userId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moneyJimpitan"]>



  export type MoneyJimpitanSelectScalar = {
    id?: boolean
    money?: boolean
    block?: boolean
    userId?: boolean
    villageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MoneyJimpitanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "money" | "block" | "userId" | "villageId" | "createdAt" | "updatedAt", ExtArgs["result"]["moneyJimpitan"]>
  export type MoneyJimpitanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    village?: boolean | VillageDefaultArgs<ExtArgs>
  }

  export type $MoneyJimpitanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoneyJimpitan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      village: Prisma.$VillagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      money: string
      block: string
      userId: string
      villageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moneyJimpitan"]>
    composites: {}
  }

  type MoneyJimpitanGetPayload<S extends boolean | null | undefined | MoneyJimpitanDefaultArgs> = $Result.GetResult<Prisma.$MoneyJimpitanPayload, S>

  type MoneyJimpitanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoneyJimpitanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoneyJimpitanCountAggregateInputType | true
    }

  export interface MoneyJimpitanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoneyJimpitan'], meta: { name: 'MoneyJimpitan' } }
    /**
     * Find zero or one MoneyJimpitan that matches the filter.
     * @param {MoneyJimpitanFindUniqueArgs} args - Arguments to find a MoneyJimpitan
     * @example
     * // Get one MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoneyJimpitanFindUniqueArgs>(args: SelectSubset<T, MoneyJimpitanFindUniqueArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoneyJimpitan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoneyJimpitanFindUniqueOrThrowArgs} args - Arguments to find a MoneyJimpitan
     * @example
     * // Get one MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoneyJimpitanFindUniqueOrThrowArgs>(args: SelectSubset<T, MoneyJimpitanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoneyJimpitan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanFindFirstArgs} args - Arguments to find a MoneyJimpitan
     * @example
     * // Get one MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoneyJimpitanFindFirstArgs>(args?: SelectSubset<T, MoneyJimpitanFindFirstArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoneyJimpitan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanFindFirstOrThrowArgs} args - Arguments to find a MoneyJimpitan
     * @example
     * // Get one MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoneyJimpitanFindFirstOrThrowArgs>(args?: SelectSubset<T, MoneyJimpitanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoneyJimpitans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoneyJimpitans
     * const moneyJimpitans = await prisma.moneyJimpitan.findMany()
     * 
     * // Get first 10 MoneyJimpitans
     * const moneyJimpitans = await prisma.moneyJimpitan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moneyJimpitanWithIdOnly = await prisma.moneyJimpitan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoneyJimpitanFindManyArgs>(args?: SelectSubset<T, MoneyJimpitanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoneyJimpitan.
     * @param {MoneyJimpitanCreateArgs} args - Arguments to create a MoneyJimpitan.
     * @example
     * // Create one MoneyJimpitan
     * const MoneyJimpitan = await prisma.moneyJimpitan.create({
     *   data: {
     *     // ... data to create a MoneyJimpitan
     *   }
     * })
     * 
     */
    create<T extends MoneyJimpitanCreateArgs>(args: SelectSubset<T, MoneyJimpitanCreateArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoneyJimpitans.
     * @param {MoneyJimpitanCreateManyArgs} args - Arguments to create many MoneyJimpitans.
     * @example
     * // Create many MoneyJimpitans
     * const moneyJimpitan = await prisma.moneyJimpitan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoneyJimpitanCreateManyArgs>(args?: SelectSubset<T, MoneyJimpitanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MoneyJimpitan.
     * @param {MoneyJimpitanDeleteArgs} args - Arguments to delete one MoneyJimpitan.
     * @example
     * // Delete one MoneyJimpitan
     * const MoneyJimpitan = await prisma.moneyJimpitan.delete({
     *   where: {
     *     // ... filter to delete one MoneyJimpitan
     *   }
     * })
     * 
     */
    delete<T extends MoneyJimpitanDeleteArgs>(args: SelectSubset<T, MoneyJimpitanDeleteArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoneyJimpitan.
     * @param {MoneyJimpitanUpdateArgs} args - Arguments to update one MoneyJimpitan.
     * @example
     * // Update one MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoneyJimpitanUpdateArgs>(args: SelectSubset<T, MoneyJimpitanUpdateArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoneyJimpitans.
     * @param {MoneyJimpitanDeleteManyArgs} args - Arguments to filter MoneyJimpitans to delete.
     * @example
     * // Delete a few MoneyJimpitans
     * const { count } = await prisma.moneyJimpitan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoneyJimpitanDeleteManyArgs>(args?: SelectSubset<T, MoneyJimpitanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoneyJimpitans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoneyJimpitans
     * const moneyJimpitan = await prisma.moneyJimpitan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoneyJimpitanUpdateManyArgs>(args: SelectSubset<T, MoneyJimpitanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MoneyJimpitan.
     * @param {MoneyJimpitanUpsertArgs} args - Arguments to update or create a MoneyJimpitan.
     * @example
     * // Update or create a MoneyJimpitan
     * const moneyJimpitan = await prisma.moneyJimpitan.upsert({
     *   create: {
     *     // ... data to create a MoneyJimpitan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoneyJimpitan we want to update
     *   }
     * })
     */
    upsert<T extends MoneyJimpitanUpsertArgs>(args: SelectSubset<T, MoneyJimpitanUpsertArgs<ExtArgs>>): Prisma__MoneyJimpitanClient<$Result.GetResult<Prisma.$MoneyJimpitanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoneyJimpitans that matches the filter.
     * @param {MoneyJimpitanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const moneyJimpitan = await prisma.moneyJimpitan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MoneyJimpitanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MoneyJimpitan.
     * @param {MoneyJimpitanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const moneyJimpitan = await prisma.moneyJimpitan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MoneyJimpitanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MoneyJimpitans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanCountArgs} args - Arguments to filter MoneyJimpitans to count.
     * @example
     * // Count the number of MoneyJimpitans
     * const count = await prisma.moneyJimpitan.count({
     *   where: {
     *     // ... the filter for the MoneyJimpitans we want to count
     *   }
     * })
    **/
    count<T extends MoneyJimpitanCountArgs>(
      args?: Subset<T, MoneyJimpitanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoneyJimpitanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoneyJimpitan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoneyJimpitanAggregateArgs>(args: Subset<T, MoneyJimpitanAggregateArgs>): Prisma.PrismaPromise<GetMoneyJimpitanAggregateType<T>>

    /**
     * Group by MoneyJimpitan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoneyJimpitanGroupByArgs} args - Group by arguments.
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
      T extends MoneyJimpitanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoneyJimpitanGroupByArgs['orderBy'] }
        : { orderBy?: MoneyJimpitanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoneyJimpitanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoneyJimpitanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoneyJimpitan model
   */
  readonly fields: MoneyJimpitanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoneyJimpitan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoneyJimpitanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    village<T extends VillageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VillageDefaultArgs<ExtArgs>>): Prisma__VillageClient<$Result.GetResult<Prisma.$VillagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MoneyJimpitan model
   */
  interface MoneyJimpitanFieldRefs {
    readonly id: FieldRef<"MoneyJimpitan", 'String'>
    readonly money: FieldRef<"MoneyJimpitan", 'String'>
    readonly block: FieldRef<"MoneyJimpitan", 'String'>
    readonly userId: FieldRef<"MoneyJimpitan", 'String'>
    readonly villageId: FieldRef<"MoneyJimpitan", 'String'>
    readonly createdAt: FieldRef<"MoneyJimpitan", 'DateTime'>
    readonly updatedAt: FieldRef<"MoneyJimpitan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoneyJimpitan findUnique
   */
  export type MoneyJimpitanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter, which MoneyJimpitan to fetch.
     */
    where: MoneyJimpitanWhereUniqueInput
  }

  /**
   * MoneyJimpitan findUniqueOrThrow
   */
  export type MoneyJimpitanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter, which MoneyJimpitan to fetch.
     */
    where: MoneyJimpitanWhereUniqueInput
  }

  /**
   * MoneyJimpitan findFirst
   */
  export type MoneyJimpitanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter, which MoneyJimpitan to fetch.
     */
    where?: MoneyJimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoneyJimpitans to fetch.
     */
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoneyJimpitans.
     */
    cursor?: MoneyJimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoneyJimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoneyJimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoneyJimpitans.
     */
    distinct?: MoneyJimpitanScalarFieldEnum | MoneyJimpitanScalarFieldEnum[]
  }

  /**
   * MoneyJimpitan findFirstOrThrow
   */
  export type MoneyJimpitanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter, which MoneyJimpitan to fetch.
     */
    where?: MoneyJimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoneyJimpitans to fetch.
     */
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoneyJimpitans.
     */
    cursor?: MoneyJimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoneyJimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoneyJimpitans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoneyJimpitans.
     */
    distinct?: MoneyJimpitanScalarFieldEnum | MoneyJimpitanScalarFieldEnum[]
  }

  /**
   * MoneyJimpitan findMany
   */
  export type MoneyJimpitanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter, which MoneyJimpitans to fetch.
     */
    where?: MoneyJimpitanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoneyJimpitans to fetch.
     */
    orderBy?: MoneyJimpitanOrderByWithRelationInput | MoneyJimpitanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoneyJimpitans.
     */
    cursor?: MoneyJimpitanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoneyJimpitans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoneyJimpitans.
     */
    skip?: number
    distinct?: MoneyJimpitanScalarFieldEnum | MoneyJimpitanScalarFieldEnum[]
  }

  /**
   * MoneyJimpitan create
   */
  export type MoneyJimpitanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * The data needed to create a MoneyJimpitan.
     */
    data: XOR<MoneyJimpitanCreateInput, MoneyJimpitanUncheckedCreateInput>
  }

  /**
   * MoneyJimpitan createMany
   */
  export type MoneyJimpitanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoneyJimpitans.
     */
    data: MoneyJimpitanCreateManyInput | MoneyJimpitanCreateManyInput[]
  }

  /**
   * MoneyJimpitan update
   */
  export type MoneyJimpitanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * The data needed to update a MoneyJimpitan.
     */
    data: XOR<MoneyJimpitanUpdateInput, MoneyJimpitanUncheckedUpdateInput>
    /**
     * Choose, which MoneyJimpitan to update.
     */
    where: MoneyJimpitanWhereUniqueInput
  }

  /**
   * MoneyJimpitan updateMany
   */
  export type MoneyJimpitanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoneyJimpitans.
     */
    data: XOR<MoneyJimpitanUpdateManyMutationInput, MoneyJimpitanUncheckedUpdateManyInput>
    /**
     * Filter which MoneyJimpitans to update
     */
    where?: MoneyJimpitanWhereInput
    /**
     * Limit how many MoneyJimpitans to update.
     */
    limit?: number
  }

  /**
   * MoneyJimpitan upsert
   */
  export type MoneyJimpitanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * The filter to search for the MoneyJimpitan to update in case it exists.
     */
    where: MoneyJimpitanWhereUniqueInput
    /**
     * In case the MoneyJimpitan found by the `where` argument doesn't exist, create a new MoneyJimpitan with this data.
     */
    create: XOR<MoneyJimpitanCreateInput, MoneyJimpitanUncheckedCreateInput>
    /**
     * In case the MoneyJimpitan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoneyJimpitanUpdateInput, MoneyJimpitanUncheckedUpdateInput>
  }

  /**
   * MoneyJimpitan delete
   */
  export type MoneyJimpitanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
    /**
     * Filter which MoneyJimpitan to delete.
     */
    where: MoneyJimpitanWhereUniqueInput
  }

  /**
   * MoneyJimpitan deleteMany
   */
  export type MoneyJimpitanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoneyJimpitans to delete
     */
    where?: MoneyJimpitanWhereInput
    /**
     * Limit how many MoneyJimpitans to delete.
     */
    limit?: number
  }

  /**
   * MoneyJimpitan findRaw
   */
  export type MoneyJimpitanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MoneyJimpitan aggregateRaw
   */
  export type MoneyJimpitanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MoneyJimpitan without action
   */
  export type MoneyJimpitanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoneyJimpitan
     */
    select?: MoneyJimpitanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoneyJimpitan
     */
    omit?: MoneyJimpitanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoneyJimpitanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    villageId: 'villageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VillageScalarFieldEnum: {
    id: 'id',
    address: 'address',
    rt: 'rt',
    rw: 'rw',
    urbanVillage: 'urbanVillage',
    subdistrict: 'subdistrict',
    regency: 'regency',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VillageScalarFieldEnum = (typeof VillageScalarFieldEnum)[keyof typeof VillageScalarFieldEnum]


  export const ContributionScalarFieldEnum: {
    id: 'id',
    admission: 'admission',
    money: 'money',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    villageId: 'villageId'
  };

  export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum]


  export const JimpitanScalarFieldEnum: {
    id: 'id',
    block: 'block',
    villageId: 'villageId',
    assignId: 'assignId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JimpitanScalarFieldEnum = (typeof JimpitanScalarFieldEnum)[keyof typeof JimpitanScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    day: 'day',
    userId: 'userId',
    villageId: 'villageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const MoneyJimpitanScalarFieldEnum: {
    id: 'id',
    money: 'money',
    block: 'block',
    userId: 'userId',
    villageId: 'villageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MoneyJimpitanScalarFieldEnum = (typeof MoneyJimpitanScalarFieldEnum)[keyof typeof MoneyJimpitanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    village?: XOR<VillageNullableScalarRelationFilter, VillageWhereInput> | null
    money?: MoneyJimpitanListRelationFilter
    contributions?: ContributionListRelationFilter
    jimpitan?: JimpitanListRelationFilter
    schedule?: ScheduleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    village?: VillageOrderByWithRelationInput
    money?: MoneyJimpitanOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
    jimpitan?: JimpitanOrderByRelationAggregateInput
    schedule?: ScheduleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    village?: XOR<VillageNullableScalarRelationFilter, VillageWhereInput> | null
    money?: MoneyJimpitanListRelationFilter
    contributions?: ContributionListRelationFilter
    jimpitan?: JimpitanListRelationFilter
    schedule?: ScheduleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    villageId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VillageWhereInput = {
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    id?: StringFilter<"Village"> | string
    address?: StringFilter<"Village"> | string
    rt?: IntFilter<"Village"> | number
    rw?: IntFilter<"Village"> | number
    urbanVillage?: StringFilter<"Village"> | string
    subdistrict?: StringFilter<"Village"> | string
    regency?: StringFilter<"Village"> | string
    link?: StringFilter<"Village"> | string
    createdAt?: DateTimeFilter<"Village"> | Date | string
    updatedAt?: DateTimeFilter<"Village"> | Date | string
    users?: UserListRelationFilter
    contributions?: ContributionListRelationFilter
    jimpitan?: JimpitanListRelationFilter
    schedule?: ScheduleListRelationFilter
    MoneyJimpitan?: MoneyJimpitanListRelationFilter
  }

  export type VillageOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    urbanVillage?: SortOrder
    subdistrict?: SortOrder
    regency?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
    jimpitan?: JimpitanOrderByRelationAggregateInput
    schedule?: ScheduleOrderByRelationAggregateInput
    MoneyJimpitan?: MoneyJimpitanOrderByRelationAggregateInput
  }

  export type VillageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillageWhereInput | VillageWhereInput[]
    OR?: VillageWhereInput[]
    NOT?: VillageWhereInput | VillageWhereInput[]
    address?: StringFilter<"Village"> | string
    rt?: IntFilter<"Village"> | number
    rw?: IntFilter<"Village"> | number
    urbanVillage?: StringFilter<"Village"> | string
    subdistrict?: StringFilter<"Village"> | string
    regency?: StringFilter<"Village"> | string
    link?: StringFilter<"Village"> | string
    createdAt?: DateTimeFilter<"Village"> | Date | string
    updatedAt?: DateTimeFilter<"Village"> | Date | string
    users?: UserListRelationFilter
    contributions?: ContributionListRelationFilter
    jimpitan?: JimpitanListRelationFilter
    schedule?: ScheduleListRelationFilter
    MoneyJimpitan?: MoneyJimpitanListRelationFilter
  }, "id">

  export type VillageOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    urbanVillage?: SortOrder
    subdistrict?: SortOrder
    regency?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VillageCountOrderByAggregateInput
    _avg?: VillageAvgOrderByAggregateInput
    _max?: VillageMaxOrderByAggregateInput
    _min?: VillageMinOrderByAggregateInput
    _sum?: VillageSumOrderByAggregateInput
  }

  export type VillageScalarWhereWithAggregatesInput = {
    AND?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    OR?: VillageScalarWhereWithAggregatesInput[]
    NOT?: VillageScalarWhereWithAggregatesInput | VillageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Village"> | string
    address?: StringWithAggregatesFilter<"Village"> | string
    rt?: IntWithAggregatesFilter<"Village"> | number
    rw?: IntWithAggregatesFilter<"Village"> | number
    urbanVillage?: StringWithAggregatesFilter<"Village"> | string
    subdistrict?: StringWithAggregatesFilter<"Village"> | string
    regency?: StringWithAggregatesFilter<"Village"> | string
    link?: StringWithAggregatesFilter<"Village"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Village"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Village"> | Date | string
  }

  export type ContributionWhereInput = {
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    id?: StringFilter<"Contribution"> | string
    admission?: StringFilter<"Contribution"> | string
    money?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    villageId?: StringFilter<"Contribution"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }

  export type ContributionOrderByWithRelationInput = {
    id?: SortOrder
    admission?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    user?: UserOrderByWithRelationInput
    village?: VillageOrderByWithRelationInput
  }

  export type ContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    admission?: StringFilter<"Contribution"> | string
    money?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    villageId?: StringFilter<"Contribution"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }, "id">

  export type ContributionOrderByWithAggregationInput = {
    id?: SortOrder
    admission?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    _count?: ContributionCountOrderByAggregateInput
    _max?: ContributionMaxOrderByAggregateInput
    _min?: ContributionMinOrderByAggregateInput
  }

  export type ContributionScalarWhereWithAggregatesInput = {
    AND?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    OR?: ContributionScalarWhereWithAggregatesInput[]
    NOT?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contribution"> | string
    admission?: StringWithAggregatesFilter<"Contribution"> | string
    money?: StringWithAggregatesFilter<"Contribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    userId?: StringWithAggregatesFilter<"Contribution"> | string
    villageId?: StringWithAggregatesFilter<"Contribution"> | string
  }

  export type JimpitanWhereInput = {
    AND?: JimpitanWhereInput | JimpitanWhereInput[]
    OR?: JimpitanWhereInput[]
    NOT?: JimpitanWhereInput | JimpitanWhereInput[]
    id?: StringFilter<"Jimpitan"> | string
    block?: StringFilter<"Jimpitan"> | string
    villageId?: StringFilter<"Jimpitan"> | string
    assignId?: StringFilter<"Jimpitan"> | string
    createdAt?: DateTimeFilter<"Jimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"Jimpitan"> | Date | string
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
    assign?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JimpitanOrderByWithRelationInput = {
    id?: SortOrder
    block?: SortOrder
    villageId?: SortOrder
    assignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    village?: VillageOrderByWithRelationInput
    assign?: UserOrderByWithRelationInput
  }

  export type JimpitanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JimpitanWhereInput | JimpitanWhereInput[]
    OR?: JimpitanWhereInput[]
    NOT?: JimpitanWhereInput | JimpitanWhereInput[]
    block?: StringFilter<"Jimpitan"> | string
    villageId?: StringFilter<"Jimpitan"> | string
    assignId?: StringFilter<"Jimpitan"> | string
    createdAt?: DateTimeFilter<"Jimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"Jimpitan"> | Date | string
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
    assign?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JimpitanOrderByWithAggregationInput = {
    id?: SortOrder
    block?: SortOrder
    villageId?: SortOrder
    assignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JimpitanCountOrderByAggregateInput
    _max?: JimpitanMaxOrderByAggregateInput
    _min?: JimpitanMinOrderByAggregateInput
  }

  export type JimpitanScalarWhereWithAggregatesInput = {
    AND?: JimpitanScalarWhereWithAggregatesInput | JimpitanScalarWhereWithAggregatesInput[]
    OR?: JimpitanScalarWhereWithAggregatesInput[]
    NOT?: JimpitanScalarWhereWithAggregatesInput | JimpitanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jimpitan"> | string
    block?: StringWithAggregatesFilter<"Jimpitan"> | string
    villageId?: StringWithAggregatesFilter<"Jimpitan"> | string
    assignId?: StringWithAggregatesFilter<"Jimpitan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Jimpitan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jimpitan"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    day?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
    villageId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    village?: VillageOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    day?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
    villageId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    day?: StringWithAggregatesFilter<"Schedule"> | string
    userId?: StringWithAggregatesFilter<"Schedule"> | string
    villageId?: StringWithAggregatesFilter<"Schedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type MoneyJimpitanWhereInput = {
    AND?: MoneyJimpitanWhereInput | MoneyJimpitanWhereInput[]
    OR?: MoneyJimpitanWhereInput[]
    NOT?: MoneyJimpitanWhereInput | MoneyJimpitanWhereInput[]
    id?: StringFilter<"MoneyJimpitan"> | string
    money?: StringFilter<"MoneyJimpitan"> | string
    block?: StringFilter<"MoneyJimpitan"> | string
    userId?: StringFilter<"MoneyJimpitan"> | string
    villageId?: StringFilter<"MoneyJimpitan"> | string
    createdAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }

  export type MoneyJimpitanOrderByWithRelationInput = {
    id?: SortOrder
    money?: SortOrder
    block?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    village?: VillageOrderByWithRelationInput
  }

  export type MoneyJimpitanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoneyJimpitanWhereInput | MoneyJimpitanWhereInput[]
    OR?: MoneyJimpitanWhereInput[]
    NOT?: MoneyJimpitanWhereInput | MoneyJimpitanWhereInput[]
    money?: StringFilter<"MoneyJimpitan"> | string
    block?: StringFilter<"MoneyJimpitan"> | string
    userId?: StringFilter<"MoneyJimpitan"> | string
    villageId?: StringFilter<"MoneyJimpitan"> | string
    createdAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    village?: XOR<VillageScalarRelationFilter, VillageWhereInput>
  }, "id">

  export type MoneyJimpitanOrderByWithAggregationInput = {
    id?: SortOrder
    money?: SortOrder
    block?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MoneyJimpitanCountOrderByAggregateInput
    _max?: MoneyJimpitanMaxOrderByAggregateInput
    _min?: MoneyJimpitanMinOrderByAggregateInput
  }

  export type MoneyJimpitanScalarWhereWithAggregatesInput = {
    AND?: MoneyJimpitanScalarWhereWithAggregatesInput | MoneyJimpitanScalarWhereWithAggregatesInput[]
    OR?: MoneyJimpitanScalarWhereWithAggregatesInput[]
    NOT?: MoneyJimpitanScalarWhereWithAggregatesInput | MoneyJimpitanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoneyJimpitan"> | string
    money?: StringWithAggregatesFilter<"MoneyJimpitan"> | string
    block?: StringWithAggregatesFilter<"MoneyJimpitan"> | string
    userId?: StringWithAggregatesFilter<"MoneyJimpitan"> | string
    villageId?: StringWithAggregatesFilter<"MoneyJimpitan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MoneyJimpitan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MoneyJimpitan"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutUsersInput
    money?: MoneyJimpitanCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanCreateNestedManyWithoutAssignInput
    schedule?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutAssignInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutUsersNestedInput
    money?: MoneyJimpitanUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageCreateInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutVillageInput
    contributions?: ContributionCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanCreateNestedManyWithoutVillageInput
    schedule?: ScheduleCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVillageInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutVillageInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type VillageCreateManyInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillageUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
    village: VillageCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    villageId: string
  }

  export type ContributionUpdateInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
    village?: VillageUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionCreateManyInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    villageId: string
  }

  export type ContributionUpdateManyMutationInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
  }

  export type JimpitanCreateInput = {
    id?: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutJimpitanInput
    assign: UserCreateNestedOneWithoutJimpitanInput
  }

  export type JimpitanUncheckedCreateInput = {
    id?: string
    block: string
    villageId: string
    assignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JimpitanUpdateInput = {
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutJimpitanNestedInput
    assign?: UserUpdateOneRequiredWithoutJimpitanNestedInput
  }

  export type JimpitanUncheckedUpdateInput = {
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    assignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JimpitanCreateManyInput = {
    id?: string
    block: string
    villageId: string
    assignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JimpitanUpdateManyMutationInput = {
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JimpitanUncheckedUpdateManyInput = {
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    assignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    day: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScheduleInput
    village: VillageCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    day: string
    userId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScheduleNestedInput
    village?: VillageUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    day: string
    userId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    day?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanCreateInput = {
    id?: string
    money: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMoneyInput
    village: VillageCreateNestedOneWithoutMoneyJimpitanInput
  }

  export type MoneyJimpitanUncheckedCreateInput = {
    id?: string
    money: string
    block: string
    userId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanUpdateInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoneyNestedInput
    village?: VillageUpdateOneRequiredWithoutMoneyJimpitanNestedInput
  }

  export type MoneyJimpitanUncheckedUpdateInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanCreateManyInput = {
    id?: string
    money: string
    block: string
    userId: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanUpdateManyMutationInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanUncheckedUpdateManyInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type VillageNullableScalarRelationFilter = {
    is?: VillageWhereInput | null
    isNot?: VillageWhereInput | null
  }

  export type MoneyJimpitanListRelationFilter = {
    every?: MoneyJimpitanWhereInput
    some?: MoneyJimpitanWhereInput
    none?: MoneyJimpitanWhereInput
  }

  export type ContributionListRelationFilter = {
    every?: ContributionWhereInput
    some?: ContributionWhereInput
    none?: ContributionWhereInput
  }

  export type JimpitanListRelationFilter = {
    every?: JimpitanWhereInput
    some?: JimpitanWhereInput
    none?: JimpitanWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type MoneyJimpitanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JimpitanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillageCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    urbanVillage?: SortOrder
    subdistrict?: SortOrder
    regency?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageAvgOrderByAggregateInput = {
    rt?: SortOrder
    rw?: SortOrder
  }

  export type VillageMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    urbanVillage?: SortOrder
    subdistrict?: SortOrder
    regency?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    urbanVillage?: SortOrder
    subdistrict?: SortOrder
    regency?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageSumOrderByAggregateInput = {
    rt?: SortOrder
    rw?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VillageScalarRelationFilter = {
    is?: VillageWhereInput
    isNot?: VillageWhereInput
  }

  export type ContributionCountOrderByAggregateInput = {
    id?: SortOrder
    admission?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
  }

  export type ContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    admission?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
  }

  export type ContributionMinOrderByAggregateInput = {
    id?: SortOrder
    admission?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
  }

  export type JimpitanCountOrderByAggregateInput = {
    id?: SortOrder
    block?: SortOrder
    villageId?: SortOrder
    assignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JimpitanMaxOrderByAggregateInput = {
    id?: SortOrder
    block?: SortOrder
    villageId?: SortOrder
    assignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JimpitanMinOrderByAggregateInput = {
    id?: SortOrder
    block?: SortOrder
    villageId?: SortOrder
    assignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoneyJimpitanCountOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    block?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoneyJimpitanMaxOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    block?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoneyJimpitanMinOrderByAggregateInput = {
    id?: SortOrder
    money?: SortOrder
    block?: SortOrder
    userId?: SortOrder
    villageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageCreateNestedOneWithoutUsersInput = {
    create?: XOR<VillageCreateWithoutUsersInput, VillageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutUsersInput
    connect?: VillageWhereUniqueInput
  }

  export type MoneyJimpitanCreateNestedManyWithoutUserInput = {
    create?: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput> | MoneyJimpitanCreateWithoutUserInput[] | MoneyJimpitanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutUserInput | MoneyJimpitanCreateOrConnectWithoutUserInput[]
    createMany?: MoneyJimpitanCreateManyUserInputEnvelope
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type JimpitanCreateNestedManyWithoutAssignInput = {
    create?: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput> | JimpitanCreateWithoutAssignInput[] | JimpitanUncheckedCreateWithoutAssignInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutAssignInput | JimpitanCreateOrConnectWithoutAssignInput[]
    createMany?: JimpitanCreateManyAssignInputEnvelope
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput> | MoneyJimpitanCreateWithoutUserInput[] | MoneyJimpitanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutUserInput | MoneyJimpitanCreateOrConnectWithoutUserInput[]
    createMany?: MoneyJimpitanCreateManyUserInputEnvelope
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type JimpitanUncheckedCreateNestedManyWithoutAssignInput = {
    create?: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput> | JimpitanCreateWithoutAssignInput[] | JimpitanUncheckedCreateWithoutAssignInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutAssignInput | JimpitanCreateOrConnectWithoutAssignInput[]
    createMany?: JimpitanCreateManyAssignInputEnvelope
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VillageUpdateOneWithoutUsersNestedInput = {
    create?: XOR<VillageCreateWithoutUsersInput, VillageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: VillageCreateOrConnectWithoutUsersInput
    upsert?: VillageUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: VillageWhereInput | boolean
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutUsersInput, VillageUpdateWithoutUsersInput>, VillageUncheckedUpdateWithoutUsersInput>
  }

  export type MoneyJimpitanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput> | MoneyJimpitanCreateWithoutUserInput[] | MoneyJimpitanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutUserInput | MoneyJimpitanCreateOrConnectWithoutUserInput[]
    upsert?: MoneyJimpitanUpsertWithWhereUniqueWithoutUserInput | MoneyJimpitanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoneyJimpitanCreateManyUserInputEnvelope
    set?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    disconnect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    delete?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    update?: MoneyJimpitanUpdateWithWhereUniqueWithoutUserInput | MoneyJimpitanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoneyJimpitanUpdateManyWithWhereWithoutUserInput | MoneyJimpitanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type JimpitanUpdateManyWithoutAssignNestedInput = {
    create?: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput> | JimpitanCreateWithoutAssignInput[] | JimpitanUncheckedCreateWithoutAssignInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutAssignInput | JimpitanCreateOrConnectWithoutAssignInput[]
    upsert?: JimpitanUpsertWithWhereUniqueWithoutAssignInput | JimpitanUpsertWithWhereUniqueWithoutAssignInput[]
    createMany?: JimpitanCreateManyAssignInputEnvelope
    set?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    disconnect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    delete?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    update?: JimpitanUpdateWithWhereUniqueWithoutAssignInput | JimpitanUpdateWithWhereUniqueWithoutAssignInput[]
    updateMany?: JimpitanUpdateManyWithWhereWithoutAssignInput | JimpitanUpdateManyWithWhereWithoutAssignInput[]
    deleteMany?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput> | MoneyJimpitanCreateWithoutUserInput[] | MoneyJimpitanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutUserInput | MoneyJimpitanCreateOrConnectWithoutUserInput[]
    upsert?: MoneyJimpitanUpsertWithWhereUniqueWithoutUserInput | MoneyJimpitanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoneyJimpitanCreateManyUserInputEnvelope
    set?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    disconnect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    delete?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    update?: MoneyJimpitanUpdateWithWhereUniqueWithoutUserInput | MoneyJimpitanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoneyJimpitanUpdateManyWithWhereWithoutUserInput | MoneyJimpitanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type JimpitanUncheckedUpdateManyWithoutAssignNestedInput = {
    create?: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput> | JimpitanCreateWithoutAssignInput[] | JimpitanUncheckedCreateWithoutAssignInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutAssignInput | JimpitanCreateOrConnectWithoutAssignInput[]
    upsert?: JimpitanUpsertWithWhereUniqueWithoutAssignInput | JimpitanUpsertWithWhereUniqueWithoutAssignInput[]
    createMany?: JimpitanCreateManyAssignInputEnvelope
    set?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    disconnect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    delete?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    update?: JimpitanUpdateWithWhereUniqueWithoutAssignInput | JimpitanUpdateWithWhereUniqueWithoutAssignInput[]
    updateMany?: JimpitanUpdateManyWithWhereWithoutAssignInput | JimpitanUpdateManyWithWhereWithoutAssignInput[]
    deleteMany?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutVillageInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutVillageInput = {
    create?: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput> | ContributionCreateWithoutVillageInput[] | ContributionUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutVillageInput | ContributionCreateOrConnectWithoutVillageInput[]
    createMany?: ContributionCreateManyVillageInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type JimpitanCreateNestedManyWithoutVillageInput = {
    create?: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput> | JimpitanCreateWithoutVillageInput[] | JimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutVillageInput | JimpitanCreateOrConnectWithoutVillageInput[]
    createMany?: JimpitanCreateManyVillageInputEnvelope
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutVillageInput = {
    create?: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput> | ScheduleCreateWithoutVillageInput[] | ScheduleUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVillageInput | ScheduleCreateOrConnectWithoutVillageInput[]
    createMany?: ScheduleCreateManyVillageInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type MoneyJimpitanCreateNestedManyWithoutVillageInput = {
    create?: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput> | MoneyJimpitanCreateWithoutVillageInput[] | MoneyJimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutVillageInput | MoneyJimpitanCreateOrConnectWithoutVillageInput[]
    createMany?: MoneyJimpitanCreateManyVillageInputEnvelope
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput> | ContributionCreateWithoutVillageInput[] | ContributionUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutVillageInput | ContributionCreateOrConnectWithoutVillageInput[]
    createMany?: ContributionCreateManyVillageInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type JimpitanUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput> | JimpitanCreateWithoutVillageInput[] | JimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutVillageInput | JimpitanCreateOrConnectWithoutVillageInput[]
    createMany?: JimpitanCreateManyVillageInputEnvelope
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput> | ScheduleCreateWithoutVillageInput[] | ScheduleUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVillageInput | ScheduleCreateOrConnectWithoutVillageInput[]
    createMany?: ScheduleCreateManyVillageInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput> | MoneyJimpitanCreateWithoutVillageInput[] | MoneyJimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutVillageInput | MoneyJimpitanCreateOrConnectWithoutVillageInput[]
    createMany?: MoneyJimpitanCreateManyVillageInputEnvelope
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutVillageNestedInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVillageInput | UserUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVillageInput | UserUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVillageInput | UserUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutVillageNestedInput = {
    create?: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput> | ContributionCreateWithoutVillageInput[] | ContributionUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutVillageInput | ContributionCreateOrConnectWithoutVillageInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutVillageInput | ContributionUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: ContributionCreateManyVillageInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutVillageInput | ContributionUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutVillageInput | ContributionUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type JimpitanUpdateManyWithoutVillageNestedInput = {
    create?: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput> | JimpitanCreateWithoutVillageInput[] | JimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutVillageInput | JimpitanCreateOrConnectWithoutVillageInput[]
    upsert?: JimpitanUpsertWithWhereUniqueWithoutVillageInput | JimpitanUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: JimpitanCreateManyVillageInputEnvelope
    set?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    disconnect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    delete?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    update?: JimpitanUpdateWithWhereUniqueWithoutVillageInput | JimpitanUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: JimpitanUpdateManyWithWhereWithoutVillageInput | JimpitanUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutVillageNestedInput = {
    create?: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput> | ScheduleCreateWithoutVillageInput[] | ScheduleUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVillageInput | ScheduleCreateOrConnectWithoutVillageInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutVillageInput | ScheduleUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: ScheduleCreateManyVillageInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutVillageInput | ScheduleUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutVillageInput | ScheduleUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type MoneyJimpitanUpdateManyWithoutVillageNestedInput = {
    create?: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput> | MoneyJimpitanCreateWithoutVillageInput[] | MoneyJimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutVillageInput | MoneyJimpitanCreateOrConnectWithoutVillageInput[]
    upsert?: MoneyJimpitanUpsertWithWhereUniqueWithoutVillageInput | MoneyJimpitanUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: MoneyJimpitanCreateManyVillageInputEnvelope
    set?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    disconnect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    delete?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    update?: MoneyJimpitanUpdateWithWhereUniqueWithoutVillageInput | MoneyJimpitanUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: MoneyJimpitanUpdateManyWithWhereWithoutVillageInput | MoneyJimpitanUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput> | UserCreateWithoutVillageInput[] | UserUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVillageInput | UserCreateOrConnectWithoutVillageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVillageInput | UserUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: UserCreateManyVillageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVillageInput | UserUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVillageInput | UserUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput> | ContributionCreateWithoutVillageInput[] | ContributionUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutVillageInput | ContributionCreateOrConnectWithoutVillageInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutVillageInput | ContributionUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: ContributionCreateManyVillageInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutVillageInput | ContributionUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutVillageInput | ContributionUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type JimpitanUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput> | JimpitanCreateWithoutVillageInput[] | JimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: JimpitanCreateOrConnectWithoutVillageInput | JimpitanCreateOrConnectWithoutVillageInput[]
    upsert?: JimpitanUpsertWithWhereUniqueWithoutVillageInput | JimpitanUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: JimpitanCreateManyVillageInputEnvelope
    set?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    disconnect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    delete?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    connect?: JimpitanWhereUniqueInput | JimpitanWhereUniqueInput[]
    update?: JimpitanUpdateWithWhereUniqueWithoutVillageInput | JimpitanUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: JimpitanUpdateManyWithWhereWithoutVillageInput | JimpitanUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput> | ScheduleCreateWithoutVillageInput[] | ScheduleUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVillageInput | ScheduleCreateOrConnectWithoutVillageInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutVillageInput | ScheduleUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: ScheduleCreateManyVillageInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutVillageInput | ScheduleUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutVillageInput | ScheduleUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput> | MoneyJimpitanCreateWithoutVillageInput[] | MoneyJimpitanUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: MoneyJimpitanCreateOrConnectWithoutVillageInput | MoneyJimpitanCreateOrConnectWithoutVillageInput[]
    upsert?: MoneyJimpitanUpsertWithWhereUniqueWithoutVillageInput | MoneyJimpitanUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: MoneyJimpitanCreateManyVillageInputEnvelope
    set?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    disconnect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    delete?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    connect?: MoneyJimpitanWhereUniqueInput | MoneyJimpitanWhereUniqueInput[]
    update?: MoneyJimpitanUpdateWithWhereUniqueWithoutVillageInput | MoneyJimpitanUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: MoneyJimpitanUpdateManyWithWhereWithoutVillageInput | MoneyJimpitanUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContributionsInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type VillageCreateNestedOneWithoutContributionsInput = {
    create?: XOR<VillageCreateWithoutContributionsInput, VillageUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: VillageCreateOrConnectWithoutContributionsInput
    connect?: VillageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    upsert?: UserUpsertWithoutContributionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContributionsInput, UserUpdateWithoutContributionsInput>, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type VillageUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<VillageCreateWithoutContributionsInput, VillageUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: VillageCreateOrConnectWithoutContributionsInput
    upsert?: VillageUpsertWithoutContributionsInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutContributionsInput, VillageUpdateWithoutContributionsInput>, VillageUncheckedUpdateWithoutContributionsInput>
  }

  export type VillageCreateNestedOneWithoutJimpitanInput = {
    create?: XOR<VillageCreateWithoutJimpitanInput, VillageUncheckedCreateWithoutJimpitanInput>
    connectOrCreate?: VillageCreateOrConnectWithoutJimpitanInput
    connect?: VillageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJimpitanInput = {
    create?: XOR<UserCreateWithoutJimpitanInput, UserUncheckedCreateWithoutJimpitanInput>
    connectOrCreate?: UserCreateOrConnectWithoutJimpitanInput
    connect?: UserWhereUniqueInput
  }

  export type VillageUpdateOneRequiredWithoutJimpitanNestedInput = {
    create?: XOR<VillageCreateWithoutJimpitanInput, VillageUncheckedCreateWithoutJimpitanInput>
    connectOrCreate?: VillageCreateOrConnectWithoutJimpitanInput
    upsert?: VillageUpsertWithoutJimpitanInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutJimpitanInput, VillageUpdateWithoutJimpitanInput>, VillageUncheckedUpdateWithoutJimpitanInput>
  }

  export type UserUpdateOneRequiredWithoutJimpitanNestedInput = {
    create?: XOR<UserCreateWithoutJimpitanInput, UserUncheckedCreateWithoutJimpitanInput>
    connectOrCreate?: UserCreateOrConnectWithoutJimpitanInput
    upsert?: UserUpsertWithoutJimpitanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJimpitanInput, UserUpdateWithoutJimpitanInput>, UserUncheckedUpdateWithoutJimpitanInput>
  }

  export type UserCreateNestedOneWithoutScheduleInput = {
    create?: XOR<UserCreateWithoutScheduleInput, UserUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleInput
    connect?: UserWhereUniqueInput
  }

  export type VillageCreateNestedOneWithoutScheduleInput = {
    create?: XOR<VillageCreateWithoutScheduleInput, VillageUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: VillageCreateOrConnectWithoutScheduleInput
    connect?: VillageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<UserCreateWithoutScheduleInput, UserUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleInput
    upsert?: UserUpsertWithoutScheduleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScheduleInput, UserUpdateWithoutScheduleInput>, UserUncheckedUpdateWithoutScheduleInput>
  }

  export type VillageUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<VillageCreateWithoutScheduleInput, VillageUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: VillageCreateOrConnectWithoutScheduleInput
    upsert?: VillageUpsertWithoutScheduleInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutScheduleInput, VillageUpdateWithoutScheduleInput>, VillageUncheckedUpdateWithoutScheduleInput>
  }

  export type UserCreateNestedOneWithoutMoneyInput = {
    create?: XOR<UserCreateWithoutMoneyInput, UserUncheckedCreateWithoutMoneyInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoneyInput
    connect?: UserWhereUniqueInput
  }

  export type VillageCreateNestedOneWithoutMoneyJimpitanInput = {
    create?: XOR<VillageCreateWithoutMoneyJimpitanInput, VillageUncheckedCreateWithoutMoneyJimpitanInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMoneyJimpitanInput
    connect?: VillageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMoneyNestedInput = {
    create?: XOR<UserCreateWithoutMoneyInput, UserUncheckedCreateWithoutMoneyInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoneyInput
    upsert?: UserUpsertWithoutMoneyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoneyInput, UserUpdateWithoutMoneyInput>, UserUncheckedUpdateWithoutMoneyInput>
  }

  export type VillageUpdateOneRequiredWithoutMoneyJimpitanNestedInput = {
    create?: XOR<VillageCreateWithoutMoneyJimpitanInput, VillageUncheckedCreateWithoutMoneyJimpitanInput>
    connectOrCreate?: VillageCreateOrConnectWithoutMoneyJimpitanInput
    upsert?: VillageUpsertWithoutMoneyJimpitanInput
    connect?: VillageWhereUniqueInput
    update?: XOR<XOR<VillageUpdateToOneWithWhereWithoutMoneyJimpitanInput, VillageUpdateWithoutMoneyJimpitanInput>, VillageUncheckedUpdateWithoutMoneyJimpitanInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type VillageCreateWithoutUsersInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanCreateNestedManyWithoutVillageInput
    schedule?: ScheduleCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutUsersInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutVillageInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutUsersInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutUsersInput, VillageUncheckedCreateWithoutUsersInput>
  }

  export type MoneyJimpitanCreateWithoutUserInput = {
    id?: string
    money: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutMoneyJimpitanInput
  }

  export type MoneyJimpitanUncheckedCreateWithoutUserInput = {
    id?: string
    money: string
    block: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanCreateOrConnectWithoutUserInput = {
    where: MoneyJimpitanWhereUniqueInput
    create: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput>
  }

  export type MoneyJimpitanCreateManyUserInputEnvelope = {
    data: MoneyJimpitanCreateManyUserInput | MoneyJimpitanCreateManyUserInput[]
  }

  export type ContributionCreateWithoutUserInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutUserInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    villageId: string
  }

  export type ContributionCreateOrConnectWithoutUserInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionCreateManyUserInputEnvelope = {
    data: ContributionCreateManyUserInput | ContributionCreateManyUserInput[]
  }

  export type JimpitanCreateWithoutAssignInput = {
    id?: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutJimpitanInput
  }

  export type JimpitanUncheckedCreateWithoutAssignInput = {
    id?: string
    block: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JimpitanCreateOrConnectWithoutAssignInput = {
    where: JimpitanWhereUniqueInput
    create: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput>
  }

  export type JimpitanCreateManyAssignInputEnvelope = {
    data: JimpitanCreateManyAssignInput | JimpitanCreateManyAssignInput[]
  }

  export type ScheduleCreateWithoutUserInput = {
    id?: string
    day: string
    createdAt?: Date | string
    updatedAt?: Date | string
    village: VillageCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutUserInput = {
    id?: string
    day: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleCreateManyUserInputEnvelope = {
    data: ScheduleCreateManyUserInput | ScheduleCreateManyUserInput[]
  }

  export type VillageUpsertWithoutUsersInput = {
    update: XOR<VillageUpdateWithoutUsersInput, VillageUncheckedUpdateWithoutUsersInput>
    create: XOR<VillageCreateWithoutUsersInput, VillageUncheckedCreateWithoutUsersInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutUsersInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutUsersInput, VillageUncheckedUpdateWithoutUsersInput>
  }

  export type VillageUpdateWithoutUsersInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutUsersInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type MoneyJimpitanUpsertWithWhereUniqueWithoutUserInput = {
    where: MoneyJimpitanWhereUniqueInput
    update: XOR<MoneyJimpitanUpdateWithoutUserInput, MoneyJimpitanUncheckedUpdateWithoutUserInput>
    create: XOR<MoneyJimpitanCreateWithoutUserInput, MoneyJimpitanUncheckedCreateWithoutUserInput>
  }

  export type MoneyJimpitanUpdateWithWhereUniqueWithoutUserInput = {
    where: MoneyJimpitanWhereUniqueInput
    data: XOR<MoneyJimpitanUpdateWithoutUserInput, MoneyJimpitanUncheckedUpdateWithoutUserInput>
  }

  export type MoneyJimpitanUpdateManyWithWhereWithoutUserInput = {
    where: MoneyJimpitanScalarWhereInput
    data: XOR<MoneyJimpitanUpdateManyMutationInput, MoneyJimpitanUncheckedUpdateManyWithoutUserInput>
  }

  export type MoneyJimpitanScalarWhereInput = {
    AND?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
    OR?: MoneyJimpitanScalarWhereInput[]
    NOT?: MoneyJimpitanScalarWhereInput | MoneyJimpitanScalarWhereInput[]
    id?: StringFilter<"MoneyJimpitan"> | string
    money?: StringFilter<"MoneyJimpitan"> | string
    block?: StringFilter<"MoneyJimpitan"> | string
    userId?: StringFilter<"MoneyJimpitan"> | string
    villageId?: StringFilter<"MoneyJimpitan"> | string
    createdAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"MoneyJimpitan"> | Date | string
  }

  export type ContributionUpsertWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
  }

  export type ContributionUpdateManyWithWhereWithoutUserInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutUserInput>
  }

  export type ContributionScalarWhereInput = {
    AND?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    OR?: ContributionScalarWhereInput[]
    NOT?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    id?: StringFilter<"Contribution"> | string
    admission?: StringFilter<"Contribution"> | string
    money?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    userId?: StringFilter<"Contribution"> | string
    villageId?: StringFilter<"Contribution"> | string
  }

  export type JimpitanUpsertWithWhereUniqueWithoutAssignInput = {
    where: JimpitanWhereUniqueInput
    update: XOR<JimpitanUpdateWithoutAssignInput, JimpitanUncheckedUpdateWithoutAssignInput>
    create: XOR<JimpitanCreateWithoutAssignInput, JimpitanUncheckedCreateWithoutAssignInput>
  }

  export type JimpitanUpdateWithWhereUniqueWithoutAssignInput = {
    where: JimpitanWhereUniqueInput
    data: XOR<JimpitanUpdateWithoutAssignInput, JimpitanUncheckedUpdateWithoutAssignInput>
  }

  export type JimpitanUpdateManyWithWhereWithoutAssignInput = {
    where: JimpitanScalarWhereInput
    data: XOR<JimpitanUpdateManyMutationInput, JimpitanUncheckedUpdateManyWithoutAssignInput>
  }

  export type JimpitanScalarWhereInput = {
    AND?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
    OR?: JimpitanScalarWhereInput[]
    NOT?: JimpitanScalarWhereInput | JimpitanScalarWhereInput[]
    id?: StringFilter<"Jimpitan"> | string
    block?: StringFilter<"Jimpitan"> | string
    villageId?: StringFilter<"Jimpitan"> | string
    assignId?: StringFilter<"Jimpitan"> | string
    createdAt?: DateTimeFilter<"Jimpitan"> | Date | string
    updatedAt?: DateTimeFilter<"Jimpitan"> | Date | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    day?: StringFilter<"Schedule"> | string
    userId?: StringFilter<"Schedule"> | string
    villageId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type UserCreateWithoutVillageInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanCreateNestedManyWithoutAssignInput
    schedule?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVillageInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutAssignInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVillageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput>
  }

  export type UserCreateManyVillageInputEnvelope = {
    data: UserCreateManyVillageInput | UserCreateManyVillageInput[]
  }

  export type ContributionCreateWithoutVillageInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateWithoutVillageInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContributionCreateOrConnectWithoutVillageInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput>
  }

  export type ContributionCreateManyVillageInputEnvelope = {
    data: ContributionCreateManyVillageInput | ContributionCreateManyVillageInput[]
  }

  export type JimpitanCreateWithoutVillageInput = {
    id?: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assign: UserCreateNestedOneWithoutJimpitanInput
  }

  export type JimpitanUncheckedCreateWithoutVillageInput = {
    id?: string
    block: string
    assignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JimpitanCreateOrConnectWithoutVillageInput = {
    where: JimpitanWhereUniqueInput
    create: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput>
  }

  export type JimpitanCreateManyVillageInputEnvelope = {
    data: JimpitanCreateManyVillageInput | JimpitanCreateManyVillageInput[]
  }

  export type ScheduleCreateWithoutVillageInput = {
    id?: string
    day: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutVillageInput = {
    id?: string
    day: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutVillageInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput>
  }

  export type ScheduleCreateManyVillageInputEnvelope = {
    data: ScheduleCreateManyVillageInput | ScheduleCreateManyVillageInput[]
  }

  export type MoneyJimpitanCreateWithoutVillageInput = {
    id?: string
    money: string
    block: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMoneyInput
  }

  export type MoneyJimpitanUncheckedCreateWithoutVillageInput = {
    id?: string
    money: string
    block: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanCreateOrConnectWithoutVillageInput = {
    where: MoneyJimpitanWhereUniqueInput
    create: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput>
  }

  export type MoneyJimpitanCreateManyVillageInputEnvelope = {
    data: MoneyJimpitanCreateManyVillageInput | MoneyJimpitanCreateManyVillageInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutVillageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutVillageInput, UserUncheckedUpdateWithoutVillageInput>
    create: XOR<UserCreateWithoutVillageInput, UserUncheckedCreateWithoutVillageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutVillageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutVillageInput, UserUncheckedUpdateWithoutVillageInput>
  }

  export type UserUpdateManyWithWhereWithoutVillageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutVillageInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    villageId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ContributionUpsertWithWhereUniqueWithoutVillageInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutVillageInput, ContributionUncheckedUpdateWithoutVillageInput>
    create: XOR<ContributionCreateWithoutVillageInput, ContributionUncheckedCreateWithoutVillageInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutVillageInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutVillageInput, ContributionUncheckedUpdateWithoutVillageInput>
  }

  export type ContributionUpdateManyWithWhereWithoutVillageInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutVillageInput>
  }

  export type JimpitanUpsertWithWhereUniqueWithoutVillageInput = {
    where: JimpitanWhereUniqueInput
    update: XOR<JimpitanUpdateWithoutVillageInput, JimpitanUncheckedUpdateWithoutVillageInput>
    create: XOR<JimpitanCreateWithoutVillageInput, JimpitanUncheckedCreateWithoutVillageInput>
  }

  export type JimpitanUpdateWithWhereUniqueWithoutVillageInput = {
    where: JimpitanWhereUniqueInput
    data: XOR<JimpitanUpdateWithoutVillageInput, JimpitanUncheckedUpdateWithoutVillageInput>
  }

  export type JimpitanUpdateManyWithWhereWithoutVillageInput = {
    where: JimpitanScalarWhereInput
    data: XOR<JimpitanUpdateManyMutationInput, JimpitanUncheckedUpdateManyWithoutVillageInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutVillageInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutVillageInput, ScheduleUncheckedUpdateWithoutVillageInput>
    create: XOR<ScheduleCreateWithoutVillageInput, ScheduleUncheckedCreateWithoutVillageInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutVillageInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutVillageInput, ScheduleUncheckedUpdateWithoutVillageInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutVillageInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutVillageInput>
  }

  export type MoneyJimpitanUpsertWithWhereUniqueWithoutVillageInput = {
    where: MoneyJimpitanWhereUniqueInput
    update: XOR<MoneyJimpitanUpdateWithoutVillageInput, MoneyJimpitanUncheckedUpdateWithoutVillageInput>
    create: XOR<MoneyJimpitanCreateWithoutVillageInput, MoneyJimpitanUncheckedCreateWithoutVillageInput>
  }

  export type MoneyJimpitanUpdateWithWhereUniqueWithoutVillageInput = {
    where: MoneyJimpitanWhereUniqueInput
    data: XOR<MoneyJimpitanUpdateWithoutVillageInput, MoneyJimpitanUncheckedUpdateWithoutVillageInput>
  }

  export type MoneyJimpitanUpdateManyWithWhereWithoutVillageInput = {
    where: MoneyJimpitanScalarWhereInput
    data: XOR<MoneyJimpitanUpdateManyMutationInput, MoneyJimpitanUncheckedUpdateManyWithoutVillageInput>
  }

  export type UserCreateWithoutContributionsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutUsersInput
    money?: MoneyJimpitanCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanCreateNestedManyWithoutAssignInput
    schedule?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributionsInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutAssignInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
  }

  export type VillageCreateWithoutContributionsInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanCreateNestedManyWithoutVillageInput
    schedule?: ScheduleCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutContributionsInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutVillageInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutContributionsInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutContributionsInput, VillageUncheckedCreateWithoutContributionsInput>
  }

  export type UserUpsertWithoutContributionsInput = {
    update: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateWithoutContributionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutUsersNestedInput
    money?: MoneyJimpitanUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VillageUpsertWithoutContributionsInput = {
    update: XOR<VillageUpdateWithoutContributionsInput, VillageUncheckedUpdateWithoutContributionsInput>
    create: XOR<VillageCreateWithoutContributionsInput, VillageUncheckedCreateWithoutContributionsInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutContributionsInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutContributionsInput, VillageUncheckedUpdateWithoutContributionsInput>
  }

  export type VillageUpdateWithoutContributionsInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutContributionsInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type VillageCreateWithoutJimpitanInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutVillageInput
    contributions?: ContributionCreateNestedManyWithoutVillageInput
    schedule?: ScheduleCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutJimpitanInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVillageInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutVillageInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutJimpitanInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutJimpitanInput, VillageUncheckedCreateWithoutJimpitanInput>
  }

  export type UserCreateWithoutJimpitanInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutUsersInput
    money?: MoneyJimpitanCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    schedule?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJimpitanInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJimpitanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJimpitanInput, UserUncheckedCreateWithoutJimpitanInput>
  }

  export type VillageUpsertWithoutJimpitanInput = {
    update: XOR<VillageUpdateWithoutJimpitanInput, VillageUncheckedUpdateWithoutJimpitanInput>
    create: XOR<VillageCreateWithoutJimpitanInput, VillageUncheckedCreateWithoutJimpitanInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutJimpitanInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutJimpitanInput, VillageUncheckedUpdateWithoutJimpitanInput>
  }

  export type VillageUpdateWithoutJimpitanInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutJimpitanInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type UserUpsertWithoutJimpitanInput = {
    update: XOR<UserUpdateWithoutJimpitanInput, UserUncheckedUpdateWithoutJimpitanInput>
    create: XOR<UserCreateWithoutJimpitanInput, UserUncheckedCreateWithoutJimpitanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJimpitanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJimpitanInput, UserUncheckedUpdateWithoutJimpitanInput>
  }

  export type UserUpdateWithoutJimpitanInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutUsersNestedInput
    money?: MoneyJimpitanUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    schedule?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJimpitanInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutScheduleInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutUsersInput
    money?: MoneyJimpitanCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanCreateNestedManyWithoutAssignInput
  }

  export type UserUncheckedCreateWithoutScheduleInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    money?: MoneyJimpitanUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutAssignInput
  }

  export type UserCreateOrConnectWithoutScheduleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScheduleInput, UserUncheckedCreateWithoutScheduleInput>
  }

  export type VillageCreateWithoutScheduleInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutVillageInput
    contributions?: ContributionCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutScheduleInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVillageInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutVillageInput
    MoneyJimpitan?: MoneyJimpitanUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutScheduleInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutScheduleInput, VillageUncheckedCreateWithoutScheduleInput>
  }

  export type UserUpsertWithoutScheduleInput = {
    update: XOR<UserUpdateWithoutScheduleInput, UserUncheckedUpdateWithoutScheduleInput>
    create: XOR<UserCreateWithoutScheduleInput, UserUncheckedCreateWithoutScheduleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScheduleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScheduleInput, UserUncheckedUpdateWithoutScheduleInput>
  }

  export type UserUpdateWithoutScheduleInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutUsersNestedInput
    money?: MoneyJimpitanUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUpdateManyWithoutAssignNestedInput
  }

  export type UserUncheckedUpdateWithoutScheduleInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutAssignNestedInput
  }

  export type VillageUpsertWithoutScheduleInput = {
    update: XOR<VillageUpdateWithoutScheduleInput, VillageUncheckedUpdateWithoutScheduleInput>
    create: XOR<VillageCreateWithoutScheduleInput, VillageUncheckedCreateWithoutScheduleInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutScheduleInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutScheduleInput, VillageUncheckedUpdateWithoutScheduleInput>
  }

  export type VillageUpdateWithoutScheduleInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutScheduleInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutVillageNestedInput
    MoneyJimpitan?: MoneyJimpitanUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type UserCreateWithoutMoneyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    village?: VillageCreateNestedOneWithoutUsersInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanCreateNestedManyWithoutAssignInput
    schedule?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoneyInput = {
    id?: string
    email: string
    name?: string | null
    villageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutAssignInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoneyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoneyInput, UserUncheckedCreateWithoutMoneyInput>
  }

  export type VillageCreateWithoutMoneyJimpitanInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutVillageInput
    contributions?: ContributionCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanCreateNestedManyWithoutVillageInput
    schedule?: ScheduleCreateNestedManyWithoutVillageInput
  }

  export type VillageUncheckedCreateWithoutMoneyJimpitanInput = {
    id?: string
    address: string
    rt: number
    rw: number
    urbanVillage: string
    subdistrict: string
    regency: string
    link?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutVillageInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutVillageInput
    jimpitan?: JimpitanUncheckedCreateNestedManyWithoutVillageInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutVillageInput
  }

  export type VillageCreateOrConnectWithoutMoneyJimpitanInput = {
    where: VillageWhereUniqueInput
    create: XOR<VillageCreateWithoutMoneyJimpitanInput, VillageUncheckedCreateWithoutMoneyJimpitanInput>
  }

  export type UserUpsertWithoutMoneyInput = {
    update: XOR<UserUpdateWithoutMoneyInput, UserUncheckedUpdateWithoutMoneyInput>
    create: XOR<UserCreateWithoutMoneyInput, UserUncheckedCreateWithoutMoneyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoneyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoneyInput, UserUncheckedUpdateWithoutMoneyInput>
  }

  export type UserUpdateWithoutMoneyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneWithoutUsersNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoneyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    villageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VillageUpsertWithoutMoneyJimpitanInput = {
    update: XOR<VillageUpdateWithoutMoneyJimpitanInput, VillageUncheckedUpdateWithoutMoneyJimpitanInput>
    create: XOR<VillageCreateWithoutMoneyJimpitanInput, VillageUncheckedCreateWithoutMoneyJimpitanInput>
    where?: VillageWhereInput
  }

  export type VillageUpdateToOneWithWhereWithoutMoneyJimpitanInput = {
    where?: VillageWhereInput
    data: XOR<VillageUpdateWithoutMoneyJimpitanInput, VillageUncheckedUpdateWithoutMoneyJimpitanInput>
  }

  export type VillageUpdateWithoutMoneyJimpitanInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUpdateManyWithoutVillageNestedInput
  }

  export type VillageUncheckedUpdateWithoutMoneyJimpitanInput = {
    address?: StringFieldUpdateOperationsInput | string
    rt?: IntFieldUpdateOperationsInput | number
    rw?: IntFieldUpdateOperationsInput | number
    urbanVillage?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    regency?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutVillageNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutVillageNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutVillageNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type MoneyJimpitanCreateManyUserInput = {
    id?: string
    money: string
    block: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyUserInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    villageId: string
  }

  export type JimpitanCreateManyAssignInput = {
    id?: string
    block: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyUserInput = {
    id?: string
    day: string
    villageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanUpdateWithoutUserInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutMoneyJimpitanNestedInput
  }

  export type MoneyJimpitanUncheckedUpdateWithoutUserInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanUncheckedUpdateManyWithoutUserInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutUserInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutUserInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villageId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionUncheckedUpdateManyWithoutUserInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    villageId?: StringFieldUpdateOperationsInput | string
  }

  export type JimpitanUpdateWithoutAssignInput = {
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutJimpitanNestedInput
  }

  export type JimpitanUncheckedUpdateWithoutAssignInput = {
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JimpitanUncheckedUpdateManyWithoutAssignInput = {
    block?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutUserInput = {
    day?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    village?: VillageUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutUserInput = {
    day?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutUserInput = {
    day?: StringFieldUpdateOperationsInput | string
    villageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyVillageInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyVillageInput = {
    id?: string
    admission: string
    money: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type JimpitanCreateManyVillageInput = {
    id?: string
    block: string
    assignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyVillageInput = {
    id?: string
    day: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoneyJimpitanCreateManyVillageInput = {
    id?: string
    money: string
    block: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutVillageInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVillageInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    money?: MoneyJimpitanUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    jimpitan?: JimpitanUncheckedUpdateManyWithoutAssignNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutVillageInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutVillageInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateWithoutVillageInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributionUncheckedUpdateManyWithoutVillageInput = {
    admission?: StringFieldUpdateOperationsInput | string
    money?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type JimpitanUpdateWithoutVillageInput = {
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assign?: UserUpdateOneRequiredWithoutJimpitanNestedInput
  }

  export type JimpitanUncheckedUpdateWithoutVillageInput = {
    block?: StringFieldUpdateOperationsInput | string
    assignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JimpitanUncheckedUpdateManyWithoutVillageInput = {
    block?: StringFieldUpdateOperationsInput | string
    assignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutVillageInput = {
    day?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutVillageInput = {
    day?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutVillageInput = {
    day?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanUpdateWithoutVillageInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoneyNestedInput
  }

  export type MoneyJimpitanUncheckedUpdateWithoutVillageInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoneyJimpitanUncheckedUpdateManyWithoutVillageInput = {
    money?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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