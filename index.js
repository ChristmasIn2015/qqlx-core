var a=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var re=Object.prototype.hasOwnProperty;var pe=(n,s)=>{for(var e in s)a(n,e,{get:s[e],enumerable:!0})},ne=(n,s,e,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let p of oe(s))!re.call(n,p)&&p!==e&&a(n,p,{get:()=>s[p],enumerable:!(r=te(s,p))||r.enumerable});return n};var se=n=>ne(a({},"__esModule",{value:!0}),n);var ie={};pe(ie,{ENUM_BOOK_DIRECTION:()=>O,ENUM_BOOK_TYPE:()=>R,ENUM_CORP:()=>c,ENUM_LAYOUT_CABINET:()=>A,ENUM_ORDER:()=>g,ENUM_PAY_STATUS_WECHAT:()=>x,ENUM_POUNDS_FORMULA:()=>C,ENUM_PROJECT:()=>d,ENUM_ROLE_DEVOPS:()=>m,ENUM_ROLE_MARKET:()=>l,ENUM_ROLE_OA:()=>y,ENUM_ROLE_WMSS:()=>u,MAP_ENUM_LAYOUT_CABINET:()=>P,MAP_ENUM_ORDER:()=>I,MAP_ENUM_PAY_STATUS_WECHAT:()=>f,MAP_ENUM_POUNDS_FORMULA:()=>k,MAP_ENUM_ROLE_DEVOPS:()=>b,MAP_ENUM_ROLE_MARKET:()=>h,MAP_ENUM_ROLE_WMSS:()=>S,MongodbSort:()=>i,PATH_ANALYSIS:()=>J,PATH_ANNOUNCE:()=>L,PATH_BOOK:()=>j,PATH_CABINET:()=>W,PATH_CABINET_UNIT:()=>H,PATH_CONFIG_CORP:()=>_,PATH_CONTACT:()=>B,PATH_CORP:()=>E,PATH_DEVOPS_LOG:()=>D,PATH_INVOICE:()=>V,PATH_OA_ACCESS:()=>G,PATH_OA_BOX:()=>K,PATH_OA_CHECK:()=>Z,PATH_OA_LINE:()=>Y,PATH_OA_LINEACCESS:()=>Q,PATH_OA_LINEBOX:()=>X,PATH_OA_ROLE:()=>F,PATH_ORDER:()=>w,PATH_SCHEDULE_CARD:()=>U,PATH_SCHEDULE_CARD_ORDER:()=>N,PATH_SKU:()=>q,PATH_USER:()=>M,PATH_WAREHOUSE:()=>T,PATH_WMSS_ROLE:()=>v,ROLE_WMSS_ALL:()=>ae,ROLE_WMSS_FINANCE:()=>ee,ROLE_WMSS_WM:()=>$,trimObject:()=>z});module.exports=se(ie);var i=(e=>(e[e.ASC=1]="ASC",e[e.DES=-1]="DES",e))(i||{});var m=(e=>(e[e.NONE=1e3]="NONE",e[e.ROOT=1001]="ROOT",e))(m||{}),b=[{key:"",value:1e3,text:"\u666E\u901A\u7528\u6237"},{key:"",value:1001,text:"\u7BA1\u7406\u5458"}];var c=(r=>(r[r.NONE=0]="NONE",r[r.STUDIO=1]="STUDIO",r[r.COMPANY=2]="COMPANY",r))(c||{});var d=(e=>(e[e.QQLX_GCBGS=1e3]="QQLX_GCBGS",e[e.QQLX_DCHT=1001]="QQLX_DCHT",e))(d||{});var l=(e=>(e[e.NONE=1e3]="NONE",e[e.ROOT=1001]="ROOT",e))(l||{}),h=[{key:"",value:1e3,text:"\u666E\u901A\u7528\u6237"},{key:"",value:1001,text:"\u7BA1\u7406\u5458"}];var x=(t=>(t[t.NOTPAY=0]="NOTPAY",t[t.SUCCESS=1]="SUCCESS",t[t.CLOSED=2]="CLOSED",t[t.USERPAYING=3]="USERPAYING",t[t.PAYERROR=4]="PAYERROR",t[t.REVOKED=5]="REVOKED",t[t.REFUND=6]="REFUND",t))(x||{}),f=[{key:"NOTPAY",value:0,text:"\u672A\u652F\u4ED8"},{key:"SUCCESS",value:1,text:"\u652F\u4ED8\u6210\u529F"},{key:"CLOSED",value:2,text:"\u652F\u4ED8\u5DF2\u5173\u95ED"},{key:"USERPAYING",value:3,text:"\u5C1A\u672A\u652F\u4ED8"},{key:"PAYERROR",value:4,text:"\u652F\u4ED8\u5F02\u5E38"},{key:"REVOKED",value:5,text:"\u5DF2\u64A4\u9500"},{key:"REFUND",value:6,text:"\u9000\u6B3E\u4E2D"}];var y=(r=>(r[r.ROOT=1]="ROOT",r[r.BASE=2]="BASE",r[r.VISITOR=3]="VISITOR",r))(y||{});var u=(o=>(o[o.BASE=1e3]="BASE",o[o.ROOT=1001]="ROOT",o[o.PURCHASE=2e3]="PURCHASE",o[o.SALES=3e3]="SALES",o[o.WM=4e3]="WM",o[o.WM_GETIN=4001]="WM_GETIN",o[o.WM_PROCESS=4002]="WM_PROCESS",o[o.WM_GETOUT=4003]="WM_GETOUT",o[o.WM_MATERIAL=4003]="WM_MATERIAL",o[o.FINANCE=5e3]="FINANCE",o[o.FINANCE_CHUNA=5001]="FINANCE_CHUNA",o[o.FINANCE_FAPIAO=5002]="FINANCE_FAPIAO",o))(u||{}),S=[{key:"",value:1e3,text:"\u57FA\u7840\u804C\u4F4D"},{key:"",value:1001,text:"\u7BA1\u7406\u5458"},{key:"",value:2e3,text:"\u91C7\u8D2D\uFF08\u5168\u6743\u9650\uFF09"},{key:"",value:3e3,text:"\u9500\u552E\uFF08\u5168\u6743\u9650\uFF09"},{key:"",value:4e3,text:"\u4ED3\u50A8\uFF08\u5168\u6743\u9650\uFF09"},{key:"",value:4001,text:"\u4ED3\u50A8\u5165\u5E93"},{key:"",value:4002,text:"\u751F\u4EA7\u5458"},{key:"",value:4003,text:"\u4ED3\u50A8\u53D1\u8D27"},{key:"",value:4003,text:"\u9886\u6599\u5458"},{key:"",value:5e3,text:"\u8D22\u52A1\uFF08\u5168\u6743\u9650\uFF09"},{key:"",value:5001,text:"\u51FA\u7EB3"},{key:"",value:5002,text:"\u53D1\u7968\u4E13\u5458"}];var g=(t=>(t[t.NONE=0]="NONE",t[t.PURCHASE=2e3]="PURCHASE",t[t.SALES=3e3]="SALES",t[t.GETIN=4001]="GETIN",t[t.PROCESS=4002]="PROCESS",t[t.GETOUT=4003]="GETOUT",t[t.MATERIAL=4004]="MATERIAL",t))(g||{}),I=[{text:"\u5F02\u5E38",value:0},{text:"\u91C7\u8D2D\u5355",value:2e3},{text:"\u9500\u552E\u5355",value:3e3},{text:"\u5165\u5E93\u5355",value:4001},{text:"\u52A0\u5DE5\u5355",value:4002},{text:"\u53D1\u8D27\u5355",value:4003},{text:"\u9886\u6599\u5355",value:4004}];var C=(e=>(e[e.NONE=1]="NONE",e[e.STEEL_PLATE=2]="STEEL_PLATE",e))(C||{}),k=[{key:"",value:1,text:"-",tip:""},{key:"",value:2,text:"\u677F\u6750\u81EA\u52A8\u7406\u7B97",tip:"\u5982\uFF1A1\u5F20 1.0mm*1250mm*2500mm \u7684\u94A2\u677F\u7406\u7B97\u91CD\u91CF\u4E3A 0.025 \u5428"}],A=(e=>(e[e.SUMMARY=1]="SUMMARY",e[e.INDIVIDUAL=2]="INDIVIDUAL",e))(A||{}),P=[{key:"",value:1,text:"-",tip:""},{key:"",value:2,text:"\u5927\u4EF6\u5546\u54C1",tip:"\u5927\u4EF6\u5546\u54C1\u5728\u53D1\u8D27\u3001\u9886\u6599\u65F6\uFF0C\u9700\u8981\u5355\u72EC\u9009\u62E9\u67D0\u9879\u5165\u5E93\u7684\u5E93\u5B58\u8FDB\u884C\u6263\u51CF\uFF0C\u5982\uFF1A\u51B7/\u70ED\u8F67\u5377\u7B49\u5927\u4EF6\u539F\u6750\u6599"}];var O=(e=>(e[e.JIE=1]="JIE",e[e.DAI=2]="DAI",e))(O||{}),R=(p=>(p[p.YSZK=112201]="YSZK",p[p.YSZK_VAT=112202]="YSZK_VAT",p[p.YFZK=220201]="YFZK",p[p.YFZK_VAT=220202]="YFZK_VAT",p))(R||{});var M="/qqlx/user/wechat";var D="/qqlx/devops/log";var E="/qqlx/corp";var B="/qqlx/corp/contact";var T="/qqlx/corp/warehouse";var _="/qqlx/corp/config";var L="/qqlx/corp/announce";var U="/qqlx/schedule/card";var N="/qqlx/schedule/card/order";var v="/qqlx/wmss/role";var W="/qqlx/wmss/cabinet";var H="/qqlx/wmss/cabinet/unit";var w="/qqlx/wmss/order";var q="/qqlx/wmss/sku";var j="/qqlx/wmss/book";var V="/qqlx/wmss/invoice";var J="/qqlx/wmss/analysis";var F="/qqlx/oa/role";var G="/qqlx/oa/access";var K="/qqlx/oa/box";var Y="/qqlx/oa/line";var Q="/qqlx/oa/line/access";var X="/qqlx/oa/line/box";var Z="/qqlx/oa/box/check";function z(n){if(n)for(let s in n)typeof n[s]=="string"&&(n[s]=n[s].replace(/\s/g,""))}var $=[1001,2e3,3e3,4e3,4001,4002,4003,4003],ee=[1001,5e3,5001,5002],ae=[1e3,1001,...$,...ee];0&&(module.exports={ENUM_BOOK_DIRECTION,ENUM_BOOK_TYPE,ENUM_CORP,ENUM_LAYOUT_CABINET,ENUM_ORDER,ENUM_PAY_STATUS_WECHAT,ENUM_POUNDS_FORMULA,ENUM_PROJECT,ENUM_ROLE_DEVOPS,ENUM_ROLE_MARKET,ENUM_ROLE_OA,ENUM_ROLE_WMSS,MAP_ENUM_LAYOUT_CABINET,MAP_ENUM_ORDER,MAP_ENUM_PAY_STATUS_WECHAT,MAP_ENUM_POUNDS_FORMULA,MAP_ENUM_ROLE_DEVOPS,MAP_ENUM_ROLE_MARKET,MAP_ENUM_ROLE_WMSS,MongodbSort,PATH_ANALYSIS,PATH_ANNOUNCE,PATH_BOOK,PATH_CABINET,PATH_CABINET_UNIT,PATH_CONFIG_CORP,PATH_CONTACT,PATH_CORP,PATH_DEVOPS_LOG,PATH_INVOICE,PATH_OA_ACCESS,PATH_OA_BOX,PATH_OA_CHECK,PATH_OA_LINE,PATH_OA_LINEACCESS,PATH_OA_LINEBOX,PATH_OA_ROLE,PATH_ORDER,PATH_SCHEDULE_CARD,PATH_SCHEDULE_CARD_ORDER,PATH_SKU,PATH_USER,PATH_WAREHOUSE,PATH_WMSS_ROLE,ROLE_WMSS_ALL,ROLE_WMSS_FINANCE,ROLE_WMSS_WM,trimObject});
