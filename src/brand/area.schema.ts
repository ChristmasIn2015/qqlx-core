import type { MongodbBase } from "qqlx-cdk";

export type Area = {
    /** @foreign */
    corpId: string;
    houseId: string;

    name: string;
    desc: string;
    isDisabled: boolean;
} & MongodbBase;
