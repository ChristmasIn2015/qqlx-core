import type { MongodbBase } from "qqlx-cdk";
export type Announce = {
    /** @foreign */
    corpId: string;
    content: string;
} & MongodbBase;
