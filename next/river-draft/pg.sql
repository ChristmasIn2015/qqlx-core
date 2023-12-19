CREATE TABLE
    IF NOT EXISTS "river_draft_node" (
        "title" VARCHAR(50) NOT NULL DEFAULT '',
        "richtext" VARCHAR NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "river_draft_node_relation" (
        "pid" INTEGER FOREIGN KEY (id) REFERENCES river_draft_node(id),
        "cid" INTEGER FOREIGN KEY (id) REFERENCES river_draft_node(id),
        "relation" SMALLINT NOT NULL DEFAULT 0,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );