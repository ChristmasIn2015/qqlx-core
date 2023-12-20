import { BIGINT_PG, INTEGER_PG, SMALLINT_PG } from "./db.pg";
import { KeyString, KeyBool, KeyAccumulatable, KeyBigInt, KeySortable } from "./search"

export enum ConditionType {
    MatchStr = 1001,
    MatchBool,
    MatchEnum,
    RegExpStr,

    MatchStrOrs = 2001,
    MatchEnumOrs,
    RegExpStrOrs,

    Time = 3001,
    Sort = 4001,
}

// ==================================================================================== 1

export type ConditionMatchStr<T> = {
    type: ConditionType.MatchStr;
    key: KeyString<T>;
    value: string;
};
export type ConditionMatchStrOrs<T> = {
    type: ConditionType.MatchStrOrs;
    key: KeyString<T>;
    value: string[];
};

// ==================================================================================== 2

export type ConditionMatchBool<T> = {
    type: ConditionType.MatchBool;
    key: KeyBool<T>;
    value: boolean;
};

// ==================================================================================== 3

export type ConditionMatchEnum<T> = {
    type: ConditionType.MatchEnum;
    key: KeyAccumulatable<T>;
    value: INTEGER_PG | SMALLINT_PG;
};
export type ConditionMatchEnumOrs<T> = {
    type: ConditionType.MatchEnumOrs;
    key: KeyAccumulatable<T>;
    value: (INTEGER_PG | SMALLINT_PG)[];
};

// ==================================================================================== 4

export type ConditionRegExpStr<T> = {
    type: ConditionType.RegExpStr;
    key: KeyString<T>;
    value: string;
};
export type ConditionRegExpStrOrs<T> = {
    type: ConditionType.RegExpStrOrs;
    key: KeyString<T>;
    value: string[];
};

// ====================================================================================


export enum Sortable {
    /** 从小到大升序 */
    ASC = 1,
    /** 从大到小降序 */
    DESC = -1,
}
export type ConditionSort<T> = {
    type: ConditionType.Sort;
    key: KeySortable<T>;
    value: Sortable;
};

// ====================================================================================

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

export type ConditionList<T> = (
    ConditionMatchStr<T>
    | ConditionMatchStrOrs<T>
    | ConditionMatchBool<T>
    | ConditionMatchEnum<T>
    | ConditionMatchEnumOrs<T>
    | ConditionRegExpStr<T>
    | ConditionRegExpStrOrs<T>
    | ConditionSort<T>
    | ConditionTime<T>
)[];
