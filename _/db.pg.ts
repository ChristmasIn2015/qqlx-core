/**
 * @smallint Pg占有二个字节的整数，范围约为 ± 32767，中文是三十二万多
 * @JavaScriptNumber 占八个字节，但是只有 53bit 中文是九千万亿，实际整数范围是 ± 9007199254740991 字符长度是 16
 */
export type SMALLINT_PG = number;

/**
 * @integer Pg占有四个字节的整数，中文是二十一亿多，整数范围是 ± 2147483647 字符长度是 10
 * @JavaScriptNumber 占八个字节，但是只有 53bit 中文是九千万亿，实际整数范围是 ± 9007199254740991 字符长度是 16
 */
export type INTEGER_PG = number;
export type FOREIGN_ID = number | null;

/**
 * @bigint Pg完全占有八个字节的整数，中文是九百二十二 亿亿！整数范围是 ± 9223372036854775807 字符长度是 19，在 ts 环境中会被展示成字符串，需要通过 ts Bigint 容器装载计算
 * @JavaScriptNumber 占八个字节，但是只有 53bit 中文是九千万亿，实际整数范围是 ± 9007199254740991 字符长度是 16
 */
export type BIGINT_PG = string;

/** Pg中没有长度限制的字符串
 * @extra Js中字符串没有长度限制
 */
export type VARCHAR_PG = string;

/** Pg中最大长度是50的字符串
 * @mongodb ObjectId 是一个由 24个字符 组成的字符串
 */
export type VARCHAR50_PG = string;

/** Pg中最大长度是255的字符串 */
export type VARCHAR255_PG = string;

export type PgBaseSchema = {
    id: INTEGER_PG;
    isDisabled: boolean;
    timeCreate: BIGINT_PG;
    timeUpdate: BIGINT_PG;
};

export const SHANGHAI_POSTGRESQL_DROPLET = "SHANGHAI_POSTGRESQL_DROPLET";
