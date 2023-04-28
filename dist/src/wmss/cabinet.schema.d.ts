import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
/** 货架上，商品的摆放方式 */
export declare enum ENUM_LAYOUT_CABINET {
    SUMMARY = 1,
    INDIVIDUAL = 2
}
declare const MAP_ENUM_LAYOUT_CABINET: Map<ENUM_LAYOUT_CABINET, EnumMapOption>;
export { MAP_ENUM_LAYOUT_CABINET };
/** 开单时的自动称重方法 */
export declare enum ENUM_POUNDS_FORMULA {
    NONE = 1,
    /** 碳素钢板 厚度mm*宽度mmm */
    TS_PLATE = 2,
    /** 圆管 外径mm*厚度mm */
    TS_WFGG = 3001,
    /** 方管 长度mm*宽度mm*厚度mm */
    TS_FG = 3002,
    /** 矩形方管 长度mm*宽度mm*厚度mm */
    TS_JXFG = 3003,
    /** 等边角钢 长mm*厚度mm */
    TS_DBJG = 5000,
    /** 不等边角钢 长mm*宽mm*厚度mm */
    TS_BDBJG = 5001,
    /** H型钢（工字钢的一种） 腹板长mm*翼板长mm*腹板厚度mm*翼板厚度mm */
    TS_HXG = 6001
}
declare const RECOMAND_POUNDS_FORMULA: {
    name: string;
    unit: string;
    formula: ENUM_POUNDS_FORMULA;
    layout: ENUM_LAYOUT_CABINET;
}[];
declare const MAP_ENUM_POUNDS_FORMULA: Map<ENUM_POUNDS_FORMULA, EnumMapOption>;
export { MAP_ENUM_POUNDS_FORMULA, RECOMAND_POUNDS_FORMULA };
/** Sku的分类
 * @按成形方法分类 锻钢 铸钢 热轧钢 冷拉钢
 * @按外形分类 型材、板材、管材、金属制品 (钢丝、钢丝绳、钢绞线等)
 * @😉
 * @重轻轨 （型材）每米重量大于、小于30千克的钢轨
 * @大中小型型钢 （型材）普通钢、圆钢、方钢、扁钢、六角钢、工字钢、槽钢、等边和不等边角钢及螺纹钢等
 * @线材 （型材）直径5-10毫米的圆钢和盘条
 * @冷弯型钢 （型材）将钢材或钢带冷弯成型制成的型钢
 * @优质型材 （型材）优质钢圆钢、方钢、扁钢、六角钢等
 * @😉
 * @薄钢板 （板材）厚度等于和小于4毫米的钢板
 * @中厚钢板 （板材）厚度大于4毫米的钢板。中板：厚度大于4mm小于20mm）；厚板：厚度大于20mm小于60mm；特厚板：厚度大于60mm
 * @钢带 也叫带钢，实际上是长而窄并成卷供应的薄钢板
 * @电工硅钢薄板 也叫硅钢片或矽钢片
 * @😉
 * @无缝钢管 （管材）用热压、冷轧（冷拔或挤压）等方法生产的管壁无接缝的钢管
 * @焊接钢管 （管材）将钢板或钢带卷曲成型，然后焊接制成的钢管
 */
export type Cabinet = {
    /** @foreign */
    corpId: string;
    name: string;
    unit: string;
    /** 页面中展示 ”单独发货“ 的标签 */
    layout: ENUM_LAYOUT_CABINET;
    formula: ENUM_POUNDS_FORMULA;
} & MongodbBase;
/** 商品重量、数量汇总，名称规格全量不重复 */
export type CabinetUnit = {
    /** @foreign */
    corpId: string;
    /** @foreign */
    cabinetId: string;
    name: string;
    norm: string;
    price: number;
    /** @foreign 货位 */
    areaId: string;
    countFinal: number;
    /** 实际剩余重量
     * @重量的单位是克 如1.255吨在数据库里应该是 1255000克
     */
    poundsFinal: number;
} & MongodbBase;
