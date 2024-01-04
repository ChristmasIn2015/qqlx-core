CREATE TABLE
    IF NOT EXISTS "pond_asset" (
        "type" SMALLINT NOT NULL DEFAULT 1001,
        "name" VARCHAR(50) NOT NULL DEFAULT '',
        "desc" VARCHAR(255) NOT NULL DEFAULT '',
        "address" VARCHAR(255) NOT NULL DEFAULT '',
        "contact" VARCHAR(255) NOT NULL DEFAULT '',
        "remark" VARCHAR(255) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );