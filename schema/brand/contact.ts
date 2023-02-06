import { MongodbBase } from "../../utils/database";

export type Contact = {
	/** @foreign */
	corpId: string;

	name: string;
	address: string;
	remark: string;
	isDisabled: boolean;
} & MongodbBase;
