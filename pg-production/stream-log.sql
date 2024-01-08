CREATE TABLE
    IF NOT EXISTS "stream_log" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "type" SMALLINT NOT NULL DEFAULT 1004,
        "title" VARCHAR(255) NOT NULL DEFAULT '',
        "text" VARCHAR NOT NULL DEFAULT '',
        "cpu" SMALLINT NOT NULL DEFAULT -1,
        "memery" SMALLINT NOT NULL DEFAULT -1,
        "duration" SMALLINT NOT NULL DEFAULT -1,
    );