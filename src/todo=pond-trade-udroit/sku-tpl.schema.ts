import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory } from "../../_/trade";

/** 法人商品模板的分组，分组之间的商品模板不允许重复 */
export type UserDroitSkuTplGroup = PgBaseSchema & _Owner & {
    title: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    remark: VARCHAR255_PG;
};

/** 法人对于其保存的信息资产，还有多久使用时长 */
export type UserDroitSkuTpl = PgBaseSchema & _Owner & _Sku & {
    gid: INTEGER_PG;
    duration: INTEGER_PG;
};