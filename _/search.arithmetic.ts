import { BIGINT_PG, INTEGER_PG, SMALLINT_PG } from "./db.pg";
import { KeyString, KeyBool, KeyAccumulatable, KeyBigInt, KeySortable, } from "./search"

/** 期望进行哪种数字计算 */
export enum ArithType {
    SUMMARY,
    COUNT,
}

/** 
 * @key 期望对某个 key 进行计算
 */
export type Arith<T> = {
    key: KeyAccumulatable<T>;
    type: ArithType;
};
/** 
 * @key 对某个 key 进行计算后的结果
 */
export type ArithResult<T> = Arith<T> & {
    value: INTEGER_PG;
};