CREATE TABLE
    IF NOT EXISTS "stream_user" (
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_wechat" (
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "unionId" VARCHAR(50) NOT NULL DEFAULT '',
        "nickname" VARCHAR(50) NOT NULL DEFAULT '',
        "avator" VARCHAR(255) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_telecom" (
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "phone" VARCHAR(50) NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );