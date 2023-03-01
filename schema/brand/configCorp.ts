import type { MongodbBase } from "../../utils/database";

export type ConfigCorp = {
	/** @foreign */
	corpId: string;

	titles: string;
} & MongodbBase;
