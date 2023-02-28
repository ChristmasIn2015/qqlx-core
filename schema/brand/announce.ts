import type { MongodbBase } from "../../utils/database";

export type Announce = {
	/** @foreign */
	corpId: string;
	content: string;
} & MongodbBase;
