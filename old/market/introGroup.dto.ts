import type { IntroGroup } from "./introGroup.schema";
import type { Intro } from "./intro.schema";

export const PATH_INTRO_GROUP = "/qqlx/market/intro/group";
export type postIntroGroupDto = { group: IntroGroup; intros: Intro[] };
export type postIntroGroupRes = null;

export type IntroGroupJoined = IntroGroup & { joinIntros?: Intro[] };
export type getIntroGroupDto = { search: IntroGroup };
export type getIntroGroupRes = IntroGroupJoined[];

export type putIntroGroupDto = { group: IntroGroup; intros: Intro[] };
export type putIntroGroupRes = null;

export type deleteIntroGroupDto = { groupId: string };
export type deleteIntroGroupRes = null;
