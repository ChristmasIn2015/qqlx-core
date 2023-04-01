import type { MongodbBase } from "qqlx-cdk";

export type Contact = {
    /** @foreign */
    corpId: string;

    name: string;
    address: string;
    remark: string;
    isDisabled: boolean;
} & MongodbBase;
