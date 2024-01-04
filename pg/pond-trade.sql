CREATE TABLE
    IF NOT EXISTS "pond_trade" (
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "amountRevenue" INTEGER NOT NULL DEFAULT 0,
        "amountCost" INTEGER NOT NULL DEFAULT 0,
        "amountRevenueRest" INTEGER NOT NULL DEFAULT 0,
        "amountCostRest" INTEGER NOT NULL DEFAULT 0,
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );

CREATE TABLE
    IF NOT EXISTS "pond_trade_clue" (
        "uuid32" VARCHAR(50) NOT NULL DEFAULT '',
        "tradeId" INTEGER NOT NULL REFERENCES pond_trade(id),
        "title" VARCHAR(255) NOT NULL DEFAULT '',
        "desc" VARCHAR NOT NULL DEFAULT '',
        "id" SERIAL PRIMARY KEY NOT NULL,
        "isDisabled" BOOLEAN NOT NULL DEFAULT false,
        "timeCreate" BIGINT NOT NULL DEFAULT 0,
        "timeUpdate" BIGINT NOT NULL DEFAULT 0
    );