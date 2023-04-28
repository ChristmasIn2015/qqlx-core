import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
import { ENUM_ORDER } from "./order.schema";
/** 会计分录
 * @应收账款 1122 销售应收款
 * @应付账款 2202 采购应付款
 */
export declare enum ENUM_BOOK_TYPE {
    /** J 销售单 D 🌻实收货款额 */
    YSZK = 112201,
    /** J 🌻开出销项发票* D 确认的销售额 */
    YSZK_VAT = 112202,
    /** J 🌻实付货款额 D 采购单 */
    YFZK = 220201,
    /** J 确认的采购额 D 🌻收到进项发票 */
    YFZK_VAT = 220202
}
declare const MAP_ENUM_BOOK_TYPE: Map<ENUM_BOOK_TYPE, EnumMapOption>;
export { MAP_ENUM_BOOK_TYPE };
/** 会计分录 借贷方向 */
export declare enum ENUM_BOOK_DIRECTION {
    JIE = 1,
    DAI = 2
}
declare const MAP_ENUM_BOOK_DIRECTION: Map<ENUM_BOOK_DIRECTION, EnumMapOption>;
export { MAP_ENUM_BOOK_DIRECTION };
/** 记录订单收款、付款的资金信息 */
export type Book = {
    /** @foreign */
    corpId: string;
    type: ENUM_BOOK_TYPE;
    direction: ENUM_BOOK_DIRECTION;
    code: string;
    amount: number;
    remark: string;
    isDisabled: Boolean;
    /** 客户名称 */
    keyOrigin: string;
    /**
     * @资金 自定义编号
     * @发票 自定义票号
     */
    keyCode: string;
    /**
     * @资金 现在在哪个银行
     * @发票 发票抬头
     */
    keyHouse: string;
    /**
     * @资金 这笔资金结清了多少订单/金额合计
     * @发票 -
     */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
} & MongodbBase;
/** 有哪些订单被结清 */
export type BookOfOrder = {
    /** @foreign */
    bookId: string;
    bookType: ENUM_BOOK_TYPE;
    bookDirection: ENUM_BOOK_DIRECTION;
    /** @foreign */
    orderId: string;
    orderType: ENUM_ORDER;
    orderContactId: string;
    amount: number;
} & MongodbBase;
