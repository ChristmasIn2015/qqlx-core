import { Page, PageRes } from "../../_/search";
import { StreamLog } from "./schema";

export const PATH_STREAM_LOG = "/stream/log";
export const DROPLET_STREAM_LOG = PATH_STREAM_LOG.replace(/\//, "").replace(/\//g, ":");
export type getStreamLogDto<T> = { page: Page<T> };
export type getStreamLogRes = PageRes<StreamLog>;
export type postStreamLogDto = { schema: StreamLog };
export type postStreamLogRes = null;
