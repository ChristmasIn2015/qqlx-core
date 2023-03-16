import type { MongodbBase } from "../../utils/database";

export type Spu = {
	/** @foreign */
	corpId: string;

	name: string;
	desc: string;
	images: string;
	price: number;
} & MongodbBase;
