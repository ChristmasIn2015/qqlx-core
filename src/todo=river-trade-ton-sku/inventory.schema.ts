import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../todo=stream-user/schema";
import type { _Sku, _SkuInventory } from "../../_/trade";
import type { Asset } from "../todo=pond-asset/schema"
import { Contact } from "../todo=pond-contact/schema";
import { TonSku } from "./sku.schema";

/** 某件订单商品的库存情况，一般用于统计冷轧卷的入库、加工、发货合计 */
export type TonSkuInventory = PgBaseSchema & _Owner & _SkuInventory & {
    tonSkuId: INTEGER_PG;

    joinTonSku?: TonSku;
};