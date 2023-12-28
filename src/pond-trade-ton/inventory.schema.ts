import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import { SkuTplGroup, CommonSku } from "../pond-trade/sku.schema";

/** 单独计算某个Sku，和其他Sku共同发生的库存 */
export type TonSkuInventory = {
    /** 一般是入库的卷 */
    skuId: INTEGER_PG
} & PgBaseSchema;

export type TonSkuInventoryRelation = {
    /** TonSkuInventory */
    inventoryId: INTEGER_PG
    /** 一般用于卷库存的计算：入库-加工-出库 */
    skuId: INTEGER_PG
} & PgBaseSchema;
