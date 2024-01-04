CREATE TABLE
    IF NOT EXISTS "river_draft_node" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "title" VARCHAR(50) NOT NULL DEFAULT '',
        "richtext" VARCHAR NOT NULL DEFAULT '',
    );

CREATE TABLE
    IF NOT EXISTS "river_draft_node_relation" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0,
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "pid" INTEGER NOT NULL REFERENCES river_draft_node(id),
        "cid" INTEGER NOT NULL REFERENCES river_draft_node(id),
        "isRoot" BOOLEAN NOT NULL DEFAULT false,
        "relation" SMALLINT NOT NULL DEFAULT 1000,
        "order" SMALLINT NOT NULL DEFAULT -1,
    );