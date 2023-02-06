import { ScheduleCard } from "../../schema/market/scheduleCard";

export const PATH_SCHEDULE_CARD = "/qqlx/schedule/card";
export type postScheduleCardDto = ScheduleCard;
export type postScheduleCardRes = null;

export type getScheduleCardDto = ScheduleCard;
export type getScheduleCardRes = ScheduleCard[];

export type patchScheduleCardDto = ScheduleCard;
export type patchScheduleCardRes = null;
