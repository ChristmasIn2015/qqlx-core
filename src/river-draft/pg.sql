CREATE TABLE IF NOT EXISTS "river_draft_node" (
    "title" VARCHAR(50) NOT NULL DEFAULT '',
    "richtext" VARCHAR NOT NULL DEFAULT '',
    
    "id" SERIAL PRIMARY KEY NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "timeCreate" BIGINT NOT NULL DEFAULT 0,
    "timeUpdate" BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "river_draft_node_relation" (
    "pid" INTEGER NOT NULL DEFAULT -1,
    "cid" INTEGER NOT NULL DEFAULT -1,
    
    "id" SERIAL PRIMARY KEY NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "timeCreate" BIGINT NOT NULL DEFAULT 0,
    "timeUpdate" BIGINT NOT NULL DEFAULT 0
);