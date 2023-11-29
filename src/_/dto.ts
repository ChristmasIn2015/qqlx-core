


/** 通用列表合计 */
export type Calculation<T> = {
    list: T[];
    pounds: number;
    count: number;
    amount: number;
};

export type Page = {
    page: number;
    pageSize: number;
    startTime: number;
    endTime: number;
};

export type PageRes<T> = {
    total: number;
    list: T[];
    record?: Record<string, number>;
};
