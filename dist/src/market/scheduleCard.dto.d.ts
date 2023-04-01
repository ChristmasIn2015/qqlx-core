import type { ScheduleCard } from "./scheduleCard.schema";
import type { ENUM_PROJECT } from "./project.schema";
export declare const PATH_MARKET_CARD = "/qqlx/market/card";
export type postScheduleCardDto = {
    schema: ScheduleCard;
    corpId?: string;
};
export type postScheduleCardRes = null;
export type getScheduleCardDto = {
    scope: ENUM_PROJECT;
};
export type getScheduleCardRes = ScheduleCard[];
export type patchScheduleCardDto = {
    schema: ScheduleCard;
};
export type patchScheduleCardRes = null;
export type deleteScheduleCardDto = {
    cardId: string;
};
export type deleteScheduleCardRes = null;
