import type { Page, PageRes } from "qqlx-cdk";
import type { Log, LogAnalysis, ENUM_LOG } from "./log.schema";
export declare const PATH_LOG = "/qqlx/log";
export type getLogDto = {
    search: Log;
    page: Page;
    keyword?: string;
};
export type getLogRes = PageRes<Log>;
export declare const PATH_LOG_ANALYSIS = "/qqlx/log/analysis";
export type postLogAnalysisDto = LogAnalysis;
export type postLogAnalysisRes = null;
export type LogAnalysisJoined = LogAnalysis & {
    classes: Record<ENUM_LOG, number>[];
};
export type getLogAnalysisDto = {
    page: Page;
};
export type getLogAnalysisRes = {
    list: LogAnalysisJoined[];
};
export type deleteLogAnalysisDto = {
    entityId: string;
};
export type deleteLogAnalysisRes = null;
