import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import { _Owner } from "../todo=stream-user/schema";

/** 联系人分组
*/
export type PondContactGroup = PgBaseSchema & _Owner & {
    name: VARCHAR50_PG;
    remark: VARCHAR255_PG;
};

/** 联系人
 * @name 公司名称
 * @desc 描述
 * @address 公司地址
 * @contact 公司联系人
*/
export type PondContact = PgBaseSchema & _Owner & {
    gid: INTEGER_PG;
    joinGroup?: PondContactGroup

    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
};

