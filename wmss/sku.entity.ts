import { ObjectId } from "mongodb";
import { MongodbBase } from "../utils/database";
import { OrderType, CountWay, PoundsWay } from "./enum";

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
export type SkuScope = {
	subjectId: ObjectId;

	name: string;
	unit: string;
	isDisabled: boolean;

	/** 称重公式 */
	poundsWay: PoundsWay;
	poundsTotal: number;

	/** 数量统计（不可编辑） */
	countWay: CountWay;
	countTotal: number;
};

/** Sku */
export type Sku = {
	subjectId: ObjectId;
	houseId: ObjectId;

	/** 分类 */
	scopeId: ObjectId;

	/** 订单 */
	fromOrderId: ObjectId;
	fromOrderType: OrderType;

	/** 根据其他sku生成 */
	fromSkuId: ObjectId;
	fromSkuOrderType: OrderType;
	/** 生成了多少sku */
	toSkuCount: number;

	/** 用户自定义编号 */
	keyCode: string;
	/** 产地：宝钢、鞍钢 */
	keyOrigin: string;
	/** 材质 HABCD */
	keyFeat: string;

	name: string;
	norm: string;
	pounds: number;
	isPriceInPounds: boolean;
	count: number;
	price: number;
	remark: string;

	/** 是否已经入库、发货 */
	isConfirmed: boolean;
} & MongodbBase;
