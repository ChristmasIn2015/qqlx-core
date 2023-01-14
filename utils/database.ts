import { ObjectId } from "mongodb";

export type MongodbBase = {
	_id: ObjectId;
	timeCreate: number;
	timeCreateString: string;
	timeUpdate: number;
	timeUpdateString: string;
};

export enum MongodbSort {
	/** 升序，从小到大 */
	ASC = 1,
	/** 降序，从大到小 */
	DES,
}

export interface MongodbQuery<T> {
	page: number;
	pageSize: number;
	startTime: number;
	endTime: number;

	total: number;
	list: T[];
}
