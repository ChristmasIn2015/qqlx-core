import { MongodbBase } from "../../utils/database";

import { ENUM_PROJECT } from "../../schema/pmo/project";
import { ENUM_ROLE_DEVOPS } from "../../schema/devops/role";

export type Log = {
	/** @foreign */
	corpId: string;
	scope: ENUM_PROJECT;

	chain: string;
	title: string;
	json: string;
} & MongodbBase;
