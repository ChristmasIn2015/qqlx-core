"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECOMAND_POUNDS_FORMULA = exports.MAP_ENUM_POUNDS_FORMULA = exports.ENUM_POUNDS_FORMULA = exports.MAP_ENUM_LAYOUT_CABINET = exports.ENUM_LAYOUT_CABINET = void 0;
/** 货架上，商品的摆放方式 */
var ENUM_LAYOUT_CABINET;
(function (ENUM_LAYOUT_CABINET) {
    ENUM_LAYOUT_CABINET[ENUM_LAYOUT_CABINET["SUMMARY"] = 1] = "SUMMARY";
    ENUM_LAYOUT_CABINET[ENUM_LAYOUT_CABINET["INDIVIDUAL"] = 2] = "INDIVIDUAL";
})(ENUM_LAYOUT_CABINET = exports.ENUM_LAYOUT_CABINET || (exports.ENUM_LAYOUT_CABINET = {}));
const MAP_ENUM_LAYOUT_CABINET = new Map();
exports.MAP_ENUM_LAYOUT_CABINET = MAP_ENUM_LAYOUT_CABINET;
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
/** 开单时的自动称重方法 */
var ENUM_POUNDS_FORMULA;
(function (ENUM_POUNDS_FORMULA) {
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["NONE"] = 1] = "NONE";
    /** 碳素钢板 厚度mm*宽度mmm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_PLATE"] = 2] = "TS_PLATE";
    /** 圆管 外径mm*厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_WFGG"] = 3001] = "TS_WFGG";
    /** 方管 长度mm*宽度mm*厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_FG"] = 3002] = "TS_FG";
    /** 矩形方管 长度mm*宽度mm*厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_JXFG"] = 3003] = "TS_JXFG";
    /** 等边角钢 长mm*厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_DBJG"] = 5000] = "TS_DBJG";
    /** 不等边角钢 长mm*宽mm*厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_BDBJG"] = 5001] = "TS_BDBJG";
    /** H型钢（工字钢的一种） 腹板长mm*翼板长mm*腹板厚度mm*翼板厚度mm */
    ENUM_POUNDS_FORMULA[ENUM_POUNDS_FORMULA["TS_HXG"] = 6001] = "TS_HXG";
})(ENUM_POUNDS_FORMULA = exports.ENUM_POUNDS_FORMULA || (exports.ENUM_POUNDS_FORMULA = {}));
const RECOMAND_POUNDS_FORMULA = [];
exports.RECOMAND_POUNDS_FORMULA = RECOMAND_POUNDS_FORMULA;
const MAP_ENUM_POUNDS_FORMULA = new Map();
exports.MAP_ENUM_POUNDS_FORMULA = MAP_ENUM_POUNDS_FORMULA;
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
