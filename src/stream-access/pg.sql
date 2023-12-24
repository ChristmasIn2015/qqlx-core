CREATE TABLE
    IF NOT EXISTS "pond_access_group" (
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "name" VARCHAR(50) NOT NULL DEFAULT '',
        "desc" VARCHAR(255) NOT NULL DEFAULT '',
        "scope" VARCHAR(255) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "pond_access" (
        "gid" INTEGER NOT NULL REFERENCES pond_access_group(id),
        "type" SMALLINT NOT NULL DEFAULT 1001,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "pond_access_group_user" (
        "gid" INTEGER NOT NULL REFERENCES pond_access_group(id),
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );