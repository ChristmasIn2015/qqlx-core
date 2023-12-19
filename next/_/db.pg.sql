CREATE TABLE
    IF NOT EXISTS "your_table" (
        "enum" SMALLINT,
        "smallint" SMALLINT NOT NULL DEFAULT 0,
        "integer" INTEGER NOT NULL DEFAULT 0,
        "bigint" BIGINT NOT NULL DEFAULT 0,
        "varchar" VARCHAR NOT NULL DEFAULT '',
        "varchar50" VARCHAR(50) NOT NULL DEFAULT '',
        "varchar255" VARCHAR(255) NOT NULL DEFAULT '',
        "orderId" INTEGER NOT NULL REFERENCES "order"(id) ON DELETE RESTRICT,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );