import { MongodbBase } from "../../utils/database";

export type Warehouse = {
	/** @foreign */
	corpId: string;

	name: string;
	address: string;
	isDisabled: boolean;
} & MongodbBase;
