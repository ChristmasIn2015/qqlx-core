import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 经济主体
 * @name 全称
 * @address 办公地址
 * @contact 办公联系
*/
export type Corp = {
    uid: string;
    name: VARCHAR50_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

/** 房产
 * @name 仓库名称
 * @address 仓库地址
 * @contact 仓库联系
*/
export type Estate = {
    uid: string;
    name: VARCHAR50_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

/** 资金账户
 * @name 开户行全称
 * @address 开户行地址
 * @contact 开户行账号
*/
export type FundAccount = {
    uid: string;
    name: VARCHAR50_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;
