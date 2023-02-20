import { MongodbBase, MongodbPage, MongodbPageRes } from "../../utils/database";

import type { Log } from "../../schema/devops/log";

export const PATH_DEVOPS_LOG = "/qqlx/devops/log";

export type getDevopsLogDto = {
	page: MongodbPage;
	search: Log;
};
export type getDevopsLogRes = MongodbPageRes<Log>;
