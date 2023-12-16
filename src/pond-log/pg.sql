CREATE TABLE
    IF NOT EXISTS "pond_log" (
        "type" SMALLINT NOT NULL DEFAULT 3,
        "title" VARCHAR(50) NOT NULL DEFAULT '',
        "text" VARCHAR(255) NOT NULL DEFAULT '',
        "duration" SMALLINT NOT NULL DEFAULT -1,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );