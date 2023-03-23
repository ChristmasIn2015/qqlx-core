/** 非泄密的用户信息 */
export type UserInfo = {
    userId: string;
    phone: string;
    nickname: string;
    avator: string;
    /** 仅登陆成功后返回 */
    jwt?: string;
};

export const PATH_USER = "/qqlx/user/wechat";
export type postUserWeChatDto = { wechatResponseCode: string; isWxmp?: boolean };
export type postUserWeChatRes = UserInfo;

export type getUserWeChatDto = null;
export type getUserWeChatRes = UserInfo;

export type patchUserWeChatDto = UserInfo & { clientPhoneCode?: string };
export type patchUserWeChatRes = null;
