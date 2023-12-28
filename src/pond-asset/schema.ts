import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 资产 */
export type CommonAsset = {
    uid: VARCHAR50_PG;
    uuid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

/** 经济主体
 * @name 全称
 * @address 办公地址
 * @contact 办公联系
*/
export type Corp = {} & CommonAsset & PgBaseSchema;

/** 房产
 * @name 仓库名称
 * @address 仓库地址
 * @contact 仓库联系
*/
export type Estate = {} & CommonAsset & PgBaseSchema;

/** 资金账户
 * @name 开户行全称
 * @address 开户行地址
 * @contact 开户行账号
*/
export type FundAccount = {} & CommonAsset & PgBaseSchema;

/** 便签
*/
export type Mark = {} & CommonAsset & PgBaseSchema;

/** 公式
*/
export type Formula = {} & CommonAsset & PgBaseSchema;
