import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";

/** 一笔交易的凭证，包含多个会计记录 */
export type BookGroup = PgBaseSchema & _Owner & {
    code: VARCHAR50_PG;
}

/** 账簿记录的类型
 * @purchase 采购 - 签立合同 = 借主营业务支出、贷应付账款
 * @purchase 采购 - 收到资金 = 借货币资金、贷应收账款
 * @purchase 采购 - 开出发票 = 借货币资金、贷应缴税费
 * @sale 销售 / 签立合同 = 借应收账款、贷发出商品 
 * @sale 销售 / 发货 = 借发出商品、贷库存商品
 * @sale 销售 / 收到资金 = 借货币资金、贷应收账款
 * @sale 销售 / 开出发票 = 借预收账款、贷主营业务收入、应缴税费
 */
export enum ENUM_BOOK_TYPE {
    /** 基本存款账户 <<<<<<<< */
    HBZJ_JBCKZH = 100201,

    /** 一般存款账户 <<<<<<<< */
    HBZJ_YBCKZH = 100202,

    /** 预收账款，代表已经收到钱了，但是还没开票 <<<<<<<< */
    YUSHOUZK = 110101,

    /** >>>>>>>> 应收账款 */
    YSZK = 112201,
    /** >>>>>>>> 应收账款 */
    YSZK_VAT = 112202,

    /** 其他应收款（单位）<<<<<<<< */
    QTSYK_DW = 122101,

    /** 其他应收款（个人）<<<<<<<< */
    QTSYK_GR = 122102,

    /** J 🌻实付货款额 D 采购单 */
    YFZK = 220201,
    /** J 确认的采购额 D 🌻收到进项发票 */
    YFZK_VAT = 220202,

    ZYYWSR_ = 600101
}

/** 账簿记录的借贷方向 */
export enum ENUM_BOOK_DIRECTION {
    JIE = 1,
    DAI = 2,
}

export type Book = PgBaseSchema & _Owner & {
    gid: INTEGER_PG;

    type: ENUM_BOOK_TYPE;
    direction: ENUM_BOOK_DIRECTION;
    amount: INTEGER_PG
}