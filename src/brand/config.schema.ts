import type { MongodbBase } from "qqlx-cdk";

export type Config = {
    /** @foreign */
    corpId: string;

    titles: string;

    /** 仓库商品是否自动确认 */
    confirmAuto: boolean;
} & MongodbBase;
