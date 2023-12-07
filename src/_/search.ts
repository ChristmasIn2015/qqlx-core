import { BIGINT_PG, INTEGER_PG, SMALLINT_PG } from "./db.pg";

export enum ConditionType {
    /** 字段完全匹配 */
    Match,
    /** 字段部分匹配 */
    RegExp,
    /** 排序 */
    Sort,
    /** 时间筛选 */
    Time,
}


/** 对应值必须可统计 */
export type KeyAccumulatable<T> = { [K in keyof T]: T[K] extends INTEGER_PG | SMALLINT_PG ? K : never }[keyof T]
/** 对应值必须可排序 */
export type KeySortable<T> = { [K in keyof T]: T[K] extends INTEGER_PG | SMALLINT_PG | BIGINT_PG ? K : never }[keyof T]
/** 对应值是大数字 */
export type KeyBigInt<T> = { [K in keyof T]: T[K] extends BIGINT_PG ? K : never }[keyof T]
/** 对应值是字符串 */
export type KeyString<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T]

// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================

/** 字符完全匹配条件 */
export type ConditionMatch<T> = {
    type: ConditionType.Match;
    key: KeyString<T>;
    value: string;
};
// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================

/** 字符部分匹配条件 */
export type ConditionRegExp<T> = {
    type: ConditionType.RegExp;
    key: KeyString<T>;
    value: string;
};

/** 按数值排序 */
export enum Sortable {
    /** 从小到大升序 */
    ASC = 1,
    /** 从大到小降序 */
    DESC = -1,
}

/** 需要是对象里的 key 并且值的类型要是数字 */
export type ConditionSort<T> = {
    type: ConditionType.Sort;
    key: KeySortable<T>;
    value: Sortable;
};
// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================

/** 时间筛选 */
export type TimeFilter = {
    startTime: BIGINT_PG;
    endTime: BIGINT_PG;
};

export type ConditionTime<T> = {
    type: ConditionType.Time;
    key: KeyBigInt<T>;
    value: TimeFilter;
};

// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================
/** 统计分类 */
export enum CalcuType {
    SUMMARY,
    COUNT,
}

/** 统计请求 */
export type Calcu<T> = {
    key: KeyAccumulatable<T>;
    type: CalcuType;
};

/** 统计结果 */
export type CalcuRes<T> = {
    key: KeyAccumulatable<T>;
    type: CalcuType;

    value: INTEGER_PG | SMALLINT_PG;
};

// ====================================================================================
// ====================================================================================
// ====================================================================================
// ====================================================================================


export type ConditionList<T> = (ConditionMatch<T> | ConditionRegExp<T> | ConditionSort<T> | ConditionTime<T>)[];

/** 分页 */
export type Page<T> = {
    page: number;
    pageSize: number;

    calcus: Calcu<T>[];
    conditions: ConditionList<T>
};

/** 分页结果 */
export type PageRes<T> = {
    total: number;
    list: T[];

    calcus: CalcuRes<T>[];
};
