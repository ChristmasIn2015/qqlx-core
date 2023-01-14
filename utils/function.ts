/** 遍历一个对象的 key，如果是字符串，则x去除所有空格性质的字符 */
export function trimObject(object: Object): object {
	if (object !== null && typeof object === "object") {
		for (let key in object) {
			if (typeof object[key] === "string") {
				object[key] = object[key].replace(/\s/g, "");
			}
		}
	}

	return object;
}
