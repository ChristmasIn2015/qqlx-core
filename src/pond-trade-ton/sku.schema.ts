import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import { SkuTplGroup, CommonSku } from "../pond-trade/sku.schema";

/** 分组中有哪些可售商品模板 */
export type TonSkuTplRelation = {
    uid: VARCHAR50_PG;
    gid: INTEGER_PG;
    cid: INTEGER_PG;

    joinGroup?: SkuTplGroup;
    joinTonSkuTpl?: TonSkuTpl;
} & PgBaseSchema;

export type TonSkuTpl = {

    /** 唯一识别库存
     * @tip 库存可能属于全国各地的仓库，可能是不同材质的
     * @tip 所以需要某种识别方案，来唯一识别可能物质上完全一样，但是其他信息又不相同的库存
     * @tip 由此需要这个 ivid ，通过 名称+规格+单位+法人资产+附加信息 的 md5 产生
     */
    ivid: VARCHAR50_PG;
    /** 库存数量（入库+加工-出库） */
    ivCount: INTEGER_PG;
    /** 库存重量（入库+加工-出库） */
    ivTon: INTEGER_PG;
} & CommonSku & PgBaseSchema;

export type TonSku = {

    /** 计算订单价格的时候，单价是否以吨位为主 */
    isTonable: Boolean
} & TonSkuTpl & PgBaseSchema;
