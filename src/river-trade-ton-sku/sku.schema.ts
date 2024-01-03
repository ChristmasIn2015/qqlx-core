import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory } from "../../_/trade";
import type { Asset } from "../pond-asset/schema"
import { ENUM_TON_ORDER, TonOrder } from "../river-trade-ton/order.schema";
import { Contact } from "../pond-contact/schema";
import { TonSkuInventory } from "./inventory.schema";

/** 订单商品
 * @isTonAble 价格是否根据重量计算
*/
export type TonSku = PgBaseSchema & _Owner & _Sku & {
    isTonAble: Boolean;

    orderId: INTEGER_PG;
    orderType: ENUM_TON_ORDER;
    isOrderDisabled: Boolean;

    joinTonOrder?: TonOrder;
    joinTonOrderContact?: Contact;
    joinTonSkuInventory?: TonSkuInventory;
    joinAssetList?: Asset[];
};

/** 订单商品和哪些资产（厂房、产地、材质...）有关系*/
export type TonSkuAssetRelation = PgBaseSchema & _Owner & {
    tonSkuId: INTEGER_PG;
    assetId: INTEGER_PG;
};