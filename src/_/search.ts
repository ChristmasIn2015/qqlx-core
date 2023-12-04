import { BIGINT_PG } from "./db.pg";

export enum DbSortKey {
    /** 从小到大升序 */
    ASC = 1,
    /** 从大到小降序 */
    DES = -1,
}

export type TimeFilter = {
    startTime: BIGINT_PG;
    endTime: BIGINT_PG;
}

export type Page<T> = {
    page: number;
    pageSize: number;

    sortKey?: keyof T
    sortValue?: DbSortKey

    startTime: BIGINT_PG;
    endTime: BIGINT_PG;
};

export type PageRes<T> = {
    total: number;
    list: T[];
    record?: Record<string, number>;
};

/** 通用列表合计 */
export type Calculation<T> = {
    list: T[];
    pounds: number;
    count: number;
    amount: number;
};