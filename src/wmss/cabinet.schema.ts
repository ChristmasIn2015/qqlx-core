import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

/** 货架上，商品的摆放方式 */
export enum ENUM_LAYOUT_CABINET {
    SUMMARY = 1,
    INDIVIDUAL = 2,
}

const MAP_ENUM_LAYOUT_CABINET = new Map<ENUM_LAYOUT_CABINET, EnumMapOption>();
MAP_ENUM_LAYOUT_CABINET.set(ENUM_LAYOUT_CABINET.SUMMARY, {
    value: ENUM_LAYOUT_CABINET.SUMMARY,
    text: "普通",
    tip: "仓库入库发货后，您可以看见商品一共剩余多少库存",
});
MAP_ENUM_LAYOUT_CABINET.set(ENUM_LAYOUT_CABINET.INDIVIDUAL, {
    value: ENUM_LAYOUT_CABINET.INDIVIDUAL,
    text: "大件商品",
    tip: "您可以具体看见，每一个入库后的“大件商品”的剩余库存（如冷轧卷等）",
});
export { MAP_ENUM_LAYOUT_CABINET };

/** 开单时的自动称重方法 */
export enum ENUM_POUNDS_FORMULA {
    NONE = 1,
    /** 碳素钢板 厚度mm*宽度mmm */
    TS_PLATE = 2,
    /** 圆管 外径mm*厚度mm */
    TS_WFGG = 3001,
    /** 方管 长度mm*宽度mm*厚度mm */
    TS_FG,
    /** 矩形方管 长度mm*宽度mm*厚度mm */
    TS_JXFG,
    /** 等边角钢 长mm*厚度mm */
    TS_DBJG = 5000,
    /** 不等边角钢 长mm*宽mm*厚度mm */
    TS_BDBJG,
    /** H型钢（工字钢的一种） 腹板长mm*翼板长mm*腹板厚度mm*翼板厚度mm */
    TS_HXG = 6001,
}

const RECOMAND_POUNDS_FORMULA: { name: string; unit: string; formula: ENUM_POUNDS_FORMULA; layout: ENUM_LAYOUT_CABINET }[] = [];
const MAP_ENUM_POUNDS_FORMULA = new Map<ENUM_POUNDS_FORMULA, EnumMapOption>();

MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.NONE, { value: ENUM_POUNDS_FORMULA.NONE, text: "无", tip: "" });
RECOMAND_POUNDS_FORMULA.push({ name: "费用", unit: "-", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "冷轧卷", unit: "个", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.INDIVIDUAL });
RECOMAND_POUNDS_FORMULA.push({ name: "冷轧板", unit: "张", formula: ENUM_POUNDS_FORMULA.TS_PLATE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_PLATE, {
    value: ENUM_POUNDS_FORMULA.TS_PLATE,
    text: "板材专用",
    tip: "如：1张 1.0*1250*2500 / 厚度mm*宽度mm*长度mm 的碳素钢板理算重量将会计算为 0.025 吨",
});

RECOMAND_POUNDS_FORMULA.push({ name: "焊管", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "圆管", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_WFGG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_WFGG, {
    value: ENUM_POUNDS_FORMULA.TS_WFGG,
    text: "圆管专用",
    tip: "如：273*20 / 外径mm*厚度mm 的圆管理，每米重量将会计算为 0.124 吨",
});
RECOMAND_POUNDS_FORMULA.push({ name: "方管", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_FG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_FG, {
    value: ENUM_POUNDS_FORMULA.TS_FG,
    text: "方管专用",
    tip: "如：200*10 的方管，每米重量将会计算为 0.063 吨",
});
RECOMAND_POUNDS_FORMULA.push({ name: "矩形方管", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_JXFG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_JXFG, {
    value: ENUM_POUNDS_FORMULA.TS_JXFG,
    text: "矩形方管专用",
    tip: "如：200*100*10 的方管，每米重量将会计算为 0.447 吨",
});

RECOMAND_POUNDS_FORMULA.push({ name: "等边角钢", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_DBJG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_DBJG, {
    value: ENUM_POUNDS_FORMULA.TS_WFGG,
    text: "等边角钢专用",
    tip: "如：50*5 的等边角钢，每米重量将会计算为 3.729kg",
});

RECOMAND_POUNDS_FORMULA.push({ name: "不等边角钢", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_BDBJG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_BDBJG, {
    value: ENUM_POUNDS_FORMULA.TS_BDBJG,
    text: "不等边角钢专用",
    tip: "如：60*40*5 的不等边角钢，每米重量将会计算为 7.66kg",
});

RECOMAND_POUNDS_FORMULA.push({ name: "工字钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "H型钢", unit: "米", formula: ENUM_POUNDS_FORMULA.TS_HXG, layout: ENUM_LAYOUT_CABINET.SUMMARY });
MAP_ENUM_POUNDS_FORMULA.set(ENUM_POUNDS_FORMULA.TS_HXG, {
    value: ENUM_POUNDS_FORMULA.TS_HXG,
    text: "H型钢专用",
    tip: "如：1支 400*150*8*13 / 外径mm*厚度mm 的不等边角钢，每米重量将会计算为 649.22 kg",
});

RECOMAND_POUNDS_FORMULA.push({ name: "方钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "槽钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "扁钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "圆钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });
RECOMAND_POUNDS_FORMULA.push({ name: "螺纹钢", unit: "米", formula: ENUM_POUNDS_FORMULA.NONE, layout: ENUM_LAYOUT_CABINET.SUMMARY });

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
