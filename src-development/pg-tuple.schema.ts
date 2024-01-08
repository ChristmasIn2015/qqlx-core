import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, BIGINT_PG, VARCHAR255_PG, SMALLINT_PG } from "../_/db.pg";

export enum ENUM_PG_TEST_TUPLE {
    DEFAULT = 1000,
    PRIMARY
}

export type PgTestTuple = PgBaseSchema & {
    enum_small_int: ENUM_PG_TEST_TUPLE;
    str_50: VARCHAR50_PG;
    str_255: VARCHAR255_PG;
    str: VARCHAR_PG;
    num_4: INTEGER_PG;
    num_8: BIGINT_PG;
    boolean_default: Boolean;
}

export const RELATIONS_PG_TEST_TUPLE = "pg_test_tuple";