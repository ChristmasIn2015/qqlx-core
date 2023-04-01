import type { MongodbBase } from "qqlx-cdk";

import type { ENUM_LAYOUT_CABINET, ENUM_POUNDS_FORMULA } from "./cabinet.schema";
import type { ENUM_ORDER } from "./order.schema";

export type Sku = {
    type: ENUM_ORDER;
    name: string;
    norm: string;
    unit: string;
    remark: string;

    /** 订单中的重量
     * @重量的单位是克 如1.255吨在数据库里应该是 1255000克
     */
    pounds: number;
    /** 实际剩余重量
     * @重量的单位是克 如1.255吨在数据库里应该是 1255000克
     */
    poundsFinal: number;

    /** 订单上的数量 */
    count: number;
    /** 实际数量 */
    countFinal: number;

    price: number;
    isConfirmed: boolean;
    isPriceInPounds: boolean;

    /** 页面中展示 ”单独发货“ 的标签 */
    layout: ENUM_LAYOUT_CABINET;
    formula: ENUM_POUNDS_FORMULA;

    /** 用户自定义编号 */
    keyCode: string;
    /** 产地：宝钢、鞍钢 */
    keyOrigin: string;
    /** 材质 HABCD */
    keyFeat: string;

    /** @foreign */
    corpId: string;

    /** @foreign 当前所在仓库 */
    warehouseId: string;

    /** @foreign */
    orderId: string;
    orderContactId: string;
    orderIsDisabled: boolean;

    /** @foreign 选择入库、加工商品 (用于领料、发货) */
    deductionSkuId: string;
} & MongodbBase;
