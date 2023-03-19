import type { MongodbBase } from "../../utils/database";

import { ENUM_PROJECT } from "../../schema/market/project";

export type Log = {
    scope: ENUM_PROJECT;

    chain: string;
    title: string;
    json: string;
} & MongodbBase;
