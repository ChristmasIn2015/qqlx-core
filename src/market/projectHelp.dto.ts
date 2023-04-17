import type { UserInfo } from "../user/user.dto";
import { ENUM_PROJECT } from "./project.schema";
import type { ProjectHelp } from "./projectHelp.schema";

export const PATH_PROJECT_HELP = "/qqlx/market/help";
export type postProjectHelpDto = ProjectHelp;
export type postProjectHelpRes = null;

export type getProjectHelpDto = { scope: ENUM_PROJECT };
export type getProjectHelpRes = ProjectHelp[];

export type patchProjectHelpDto = { enetity: ProjectHelp };
export type patchProjectHelpRes = null;

export type deleteProjectHelpDto = { entityId: string };
export type deleteProjectHelpRes = null;
