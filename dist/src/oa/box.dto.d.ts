import type { Box } from "./box.schema";
export declare const PATH_OA_BOX = "/qqlx/oa/box";
export type postBoxDto = Box;
export type postBoxRes = null;
export type BoxJoined = Box & {
    total: number;
};
export type getBoxDto = {
    search: Box;
};
export type getBoxRes = Box[];
export type patchBoxDto = Box;
export type patchBoxRes = null;
export type deleteBoxDto = {
    entityId: string;
};
export type deleteBoxRes = null;
