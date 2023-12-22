CREATE TABLE
    IF NOT EXISTS "river_draft_node" (
        "title" VARCHAR(50) NOT NULL DEFAULT '',
        "richtext" VARCHAR NOT NULL DEFAULT '',
        "isRoot" BOOLEAN NOT NULL DEFAULT false,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "river_draft_node_relation" (
        "uid" VARCHAR(50) NOT NULL DEFAULT '',
        "pid" INTEGER NOT NULL REFERENCES river_draft_node(id),
        "cid" INTEGER NOT NULL REFERENCES river_draft_node(id),
        "relation" SMALLINT NOT NULL DEFAULT 1000,
        "order" SMALLINT NOT NULL DEFAULT -1,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );