import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "./db.pg";

/** 通用订单（仅用于继承）
 * @tradeId 交易事项
 * @payId 支付事项
 * @sideName 我方单位
 * @opSideName 对手单位
 * @amountTax 合计税额
*/
export type _Order = {
    sideName: VARCHAR50_PG;
    opSideName: VARCHAR50_PG;
    amount: INTEGER_PG;
    amountTax: INTEGER_PG;

    code: VARCHAR50_PG;
    remark: VARCHAR255_PG;
    timeContract: string;
};

/** 通用商品（仅用于继承）
 * @price 单价
 * @tax 税率，如13%
 */
export type _Sku = {
    name: VARCHAR50_PG;
    norm: VARCHAR255_PG;
    remark: VARCHAR255_PG;
    price: INTEGER_PG;
    unit: INTEGER_PG;
    tax: SMALLINT_PG
};

/** 通用库存（仅用于继承） */
export type _SkuInventory = {

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
};