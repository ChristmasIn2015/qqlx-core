import type { MongodbBase } from "qqlx-cdk";

export type Config = {
    /** @foreign */
    corpId: string;

    titles: string;
} & MongodbBase;
