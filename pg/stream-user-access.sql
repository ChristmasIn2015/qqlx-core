CREATE TABLE
    IF NOT EXISTS "stream_access_group" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "name" VARCHAR(50) NOT NULL DEFAULT '',
        "desc" VARCHAR(255) NOT NULL DEFAULT '',
        "scope" VARCHAR(255) NOT NULL DEFAULT '',
        "droit" SMALLINT NOT NULL DEFAULT 0,
    );

CREATE TABLE
    IF NOT EXISTS "stream_access_group_user" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "gid" INTEGER NOT NULL REFERENCES stream_access_group(id),
    );