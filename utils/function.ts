/** 遍历一个对象的 key，如果是字符串，则去除所有空格性质的字符 */
export function trimObject<T extends Object>(incoming: T) {
	if (!incoming) return;

	for (let key in incoming) {
		// @ts-ignore
		if (typeof incoming[key] === "string") {
			// @ts-ignore
			(incoming[key] as string) = (incoming[key] as string).replace(/\s/g, "");
		}
	}
}
