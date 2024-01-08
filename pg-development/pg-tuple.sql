CREATE TABLE
    IF NOT EXISTS "pg_test_tuple" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "enum_small_int" SMALLINT NOT NULL DEFAULT 1000,
        "str_50" VARCHAR(50) NOT NULL DEFAULT '',
        "str_255" VARCHAR(255) NOT NULL DEFAULT '',
        "str" VARCHAR NOT NULL DEFAULT '',
        "num_4" INTEGER NOT NULL DEFAULT 0,
        "num_8" BIGINT NOT NULL DEFAULT 0,
        "boolean_default" BOOLEAN NOT NULL DEFAULT false,
    );