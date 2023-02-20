import type { MongodbBase } from "../../utils/database";

/** @primary */
export type User = {
	phone: string;
	jwt: string;
} & MongodbBase;
