export type MongodbBase = {
	_id: string;
	timeCreate: number;
	timeCreateString: string;
	timeUpdate: number;
	timeUpdateString: string;
};

export enum MongodbSort {
	/** 升序，从小到大 */
	ASC = 1,
	/** 降序，从大到小 */
	DES = -1,
}

export interface MongodbQuery<T> {
	page: number;
	pageSize: number;
	startTime: number;
	endTime: number;

	total: number;
	list: T[];
}
