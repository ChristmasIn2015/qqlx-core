
/** Pg 中占有二个字节的整数，范围约为 ±32767，中文是三十二万多
 * @extra Js Number整数的存储/内容，占八个字节（64bit/53bit）范围是 ±9007199254740991，中文是九千万亿 
 */
export type SMALLINT_PG = number 

/** Pg 中占有四个字节的整数，范围约为 ±2147483647，中文是二十一亿多
 * @extra Js Number整数的存储/内容，占八个字节（64bit/53bit）范围是 ±9007199254740991，中文是九千万亿 
 */
export type INTEGER_PG = number 

/** Pg占有八个字节的整数，范围约为 ±9223372036854775807，中文是九百二十二 亿亿！
 * @extra Js Number整数的存储/内容，占八个字节（64bit/53bit）范围是 ±±9007199254740991，中文是九千万亿 
 */
export type BIGINT_PG = number 

/** Pg中没有长度限制的字符串 
 * @extra Js中字符串没有长度限制
*/
export type VARCHAR_PG = string 

/** Pg中最大长度是50的字符串
 * @mongodb ObjectId 是一个由 24个字符 组成的字符串
*/
export type VARCHAR50_PG = string 

/** Pg中最大长度是255的字符串 */
export type VARCHAR255_PG = string 

export type PgBaseSchema = {
  id: INTEGER_PG;
  isDisabled: boolean;
  _id: VARCHAR50_PG;
  timeCreate: BIGINT_PG;
  timeUpdate: BIGINT_PG;
}