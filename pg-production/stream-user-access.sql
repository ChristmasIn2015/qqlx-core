CREATE TABLE
    IF NOT EXISTS "stream_user_access_group" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" UUID NOT NULL REFERENCES stream_user("uuid32"),
        "name" VARCHAR(50) NOT NULL DEFAULT '',
        "desc" VARCHAR(255) NOT NULL DEFAULT '',
        "scope" VARCHAR(255) NOT NULL DEFAULT '',
        "droit" SMALLINT NOT NULL DEFAULT 0,
        "sequence" SMALLINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_access" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" UUID NOT NULL REFERENCES stream_user("uuid32"),
        "gid" INTEGER NOT NULL REFERENCES stream_user_access_group(id)
    );