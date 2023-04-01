import type { MongodbBase } from "qqlx-cdk";
export type Warehouse = {
    /** @foreign */
    corpId: string;
    name: string;
    address: string;
    isDisabled: boolean;
} & MongodbBase;
