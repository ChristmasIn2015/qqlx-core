import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";

/** 账簿记录的类型
 * @ToC_Pur 根据采购单-签立合同（借）在途物资 60w 应交税费（未开）8w（贷）应付账款 68w
 * @ToC_Pur 根据入库单-收到货物（借）库存商品 60w（贷）在途物资 60w
 * @ToC_Pur 根据多笔付款记录-合计收到货款（借）应付账款 68w（贷）货币资金 68w
 * @ToC_Pur 根据多笔发票记录-合计开出发票，仅仅（借）应交税费（已开）8w
 * 
 * @ToC_Pur 根据采购单-签立合同（借）在途物资 2k（贷）应付账款 2k
 * @ToC_Pur 根据入库单-收到货物（借）库存商品 2k（贷）在途物资 2k
 * @ToC_Pur 根据多笔付款记录-合计收到货款（借）应付账款 2k（贷）货币资金 2k
 * 
 * @ToB_Sale 根据销售单-签立合同（借）应收账款 100w（贷）主营业务收入 87w 应交税费（未开） 13w
 * @ToB_Sale 根据发货单-发出货物（借）主营业务成本 60w（贷）库存商品 60w
 * @ToB_Sale 根据多笔收款记录-合计收到货款（借）货币资金 100w（贷）应收账款 100w
 * @ToB_Sale 根据多笔发票记录-合计开出发票，仅仅（贷）应交税费（已开）13w
 * 
 * @ToC_Sale 根据销售单-签立合同（借）应收账款 6k（贷）发出商品 6k
 * @ToC_Sale 根据发货单-发出货物（借）发出商品 6k（贷）库存商品 6k
 * @ToC_Sale 根据多笔收款记录-合计收到货款（借）货币资金 6k（贷）应收账款 6k
 */
export enum ENUM_BOOK_TYPE {

    /** 基本存款账户
     * 是税务机关核查企业经营收入的主要来源）
     */
    HBZJ_JBCKZH = 100201,

    /** 一般存款账户
     * 是存款人因借款或其他结算需要而开设的资金账户）
     */
    HBZJ_YBCKZH = 100202,

    /** 应收账款 */
    YSZK = 112201,
    /** 应收账款 */
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