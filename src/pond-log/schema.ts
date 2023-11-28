import type { ENUM_POND_LOG } from "./enum"
import type { PgBaseSchema, BIGINT_PG, VARCHAR_PG, VARCHAR255_PG } from "../_/pg.schema"

export type PondLog = {
  type: ENUM_POND_LOG

  /** 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
   * @demo IP;追踪链路;REST路径
   */
  title: VARCHAR255_PG
  text: VARCHAR_PG
  duration: BIGINT_PG
} & PgBaseSchema