import { BIGINT_PG, INTEGER_PG, SMALLINT_PG } from "./db.pg";
import { ConditionList } from "./search.match"
import { Arith } from "./search.arithmetic"

/** 对应值是字符串 */
export type KeyString<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
/** 对应值是布尔 */
export type KeyBool<T> = { [K in keyof T]: T[K] extends boolean ? K : never }[keyof T]
/** 对应值必须可统计 */
export type KeyAccumulatable<T> = { [K in keyof T]: T[K] extends INTEGER_PG | SMALLINT_PG ? K : never }[keyof T]

/** 对应值是大数字 */
export type KeyBigInt<T> = { [K in keyof T]: T[K] extends BIGINT_PG ? K : never }[keyof T]
/** 对应值必须可排序 */
export type KeySortable<T> = { [K in keyof T]: T[K] extends INTEGER_PG | SMALLINT_PG | BIGINT_PG ? K : never }[keyof T]

/** 分页 */
export type Page<T> = {
    page: number;
    pageSize: number;

    conditionList: ConditionList<T>
};

/** 分页结果 */
export type PageRes<T> = {
    total: number;
    list: T[];
};