export enum DbSortKey {
    /** 升序，从小到大 */
    ASC = 1,
    /** 降序，从大到小 */
    DES = -1,
}

export type Page = {
    page: number;
    pageSize: number;
    sortKey?: DbSortKey

    /** 如果从数据库查出来的时候，记得转成 Bigint */
    startTime: number;

    /** 如果从数据库查出来的时候，记得转成 Bigint */
    endTime: number;
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