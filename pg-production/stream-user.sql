CREATE TABLE
    IF NOT EXISTS "stream_user" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" UUID PRIMARY KEY DEFAULT uuid_generate_v4()
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_wechat" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL REFERENCES "stream_user"("uuid32"),
        "unionId" VARCHAR(50) NOT NULL DEFAULT '',
        "nickname" VARCHAR(50) NOT NULL DEFAULT '',
        "avator" VARCHAR(255) NOT NULL DEFAULT ''
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_telecom" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL REFERENCES stream_user("uuid32"),
        "phone" VARCHAR(50) NOT NULL DEFAULT ''
    );

CREATE TABLE
    IF NOT EXISTS "stream_user_email" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL REFERENCES stream_user("uuid32"),
        "email" VARCHAR(50) NOT NULL DEFAULT ''
    );