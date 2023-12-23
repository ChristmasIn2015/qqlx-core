# 启动顺序

## 核心的无状态基础服务

-   droplet-host：所有对内服务都需要在此注册/发现

## 所有服务都能够使用的服务

-   stream-log：全链路日志，它不应该使用下面的任何服务
-   stream-user：全链路用户鉴权，同上
-   stream-access：自定义权限控制

## 任意搭配的中台服务

-   ~~pond-corp：法人-经济主体~~
-   ~~pond-contact：法人-通讯录~~
-   ~~pond-media：法人-素材库~~
-   ~~pond-product：法人-产品/商品库~~
-   ~~pond-order：法人-订单~~
-   ~~pond-finance：法人-账簿~~

## 对外的应用

-   river-draft：蓝图系统
-   ~~river-？：采购系统~~
-   ~~river-sale：销售系统~~
-   ~~river-wms：库存（加工）系统~~

## 规划中

-   ~~river-？：运营系统~~
-   ~~river-？：物流系统~~
-   ~~river-？：售后系统~~
-   ~~river-cms：建站系统~~
