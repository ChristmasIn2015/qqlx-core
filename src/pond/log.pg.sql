CREATE TABLE IF NOT EXISTS "pond_log" (

    "type" SMALLINT,
    "title" VARCHAR(255) NOT NULL DEFAULT '',
    "text" VARCHAR(255) NOT NULL DEFAULT '',
    "duration" INTEGER NOT NULL DEFAULT -1,

    "id" SERIAL PRIMARY KEY NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "_id" VARCHAR(50),
    "timeCreate" INTEGER NOT NULL DEFAULT -1,
    "timeUpdate" INTEGER NOT NULL DEFAULT -1
);

