/**
 * Created by YCYL on 2017/8/15.
 */

import 'whatwg-fetch';

export const SMS_ENCODE = 'SXLSSJY';

const baseUrl = "http://192.168.1.103:3000";

const headers = new Headers();
headers.append('Access-Control-Allow-Origin','*');
headers.append('Content-Type','application/x-www-form-urlencoded');
headers.append('Accept','application/json');
headers.append('token','123456');
headers.append('key','19');

export const postOptions = {
    method: 'POST',
    headers: headers,
    body:'',
    credentials: 'credentials',
    cache: 'default',
    mode: 'cors'
};

export const uploadOptions = {
};

/**
 * 用户模块
 * @type {string}
 */
//获取验证码
export const smsCodeURL = `${baseUrl}/client/v1/user/SMSCode`;

//手机注册
export const phoneSignupURL = `${baseUrl}/client/v1/user/phoneSignup`;

//用户重设密码
export const resetPasswordURL = `${baseUrl}/client/v1/user/resetPassword`;

//用户手机登录
export const phoneLoginURL = `${baseUrl}/client/v1/user/phoneLogin`;

//短信验证码登录
export const smsCodeLoginURL = `${baseUrl}/client/v1/user/smsCodeLogin`;

//更新用户信息
export const updateProfileURL = `${baseUrl}/client/v1/user/updateProfile`;

//用户上传头像
export const uploadHeadImgURL = `${baseUrl}/client/v1/user/uploadHeadImg`;

/*
 * 用户地址
 */

//增删改用户地址列表
export const setAddressURL = `${baseUrl}/client/v1/user/setAddress`;

//查找所有地址
export const findAllAddressURL = `${baseUrl}/client/v1/user/findAllAddress`;

/*
  用户购物车
 */
//添加购物车
export const setShopCartURL = `${baseUrl}/client/v1/user/setShopCart`;

//获取购物车列表
export const shopCartListURL = `${baseUrl}/client/v1/user/shopCartList`;

/*
 * 用户优惠券
 */
//获取商铺优惠券列表
export const findTenantCouponsURL = `${baseUrl}/client/v1/user/findTenantCoupons`;

// 用户领取优惠券
export const drawCouponURL = `${baseUrl}/client/v1/user/drawCoupon`;

//获取已经领取的商铺优惠券
export const findUserCouponsURL = `${baseUrl}/client/v1/user/findUserCoupons`;

/**
 * 商铺模块
 */

// 创建店铺
export const createTenantURL = `${baseUrl}/mgmt/v1/tenant/createTenant`;

// 查询店铺信息
export const findTenantURL = `${baseUrl}/mgmt/v1/tenant/findTenant`;

// 修改店铺信息
export const updateTenantURL = `${baseUrl}/mgmt/v1/tenant/updateTenant`;

// 更新商铺图片
export const uploadTenantImageURL = `${baseUrl}/mgmt/v1/tenant/uploadTenantImage`;

/*
 * 商品品牌相关
 */
// 创建商品品牌
export const createBrandURL = `${baseUrl}/mgmt/v1/tenant/createBrand`;

//更新品牌信息
export const updateBrandURL = `${baseUrl}/mgmt/v1/tenant/updateBrand`;

// 查询店铺所有品牌
export const findAllBrandURL = `${baseUrl}/mgmt/v1/tenant/findAllBrand`;

// 上传品牌图片
export const uploadBrandImgURL = `${baseUrl}/mgmt/v1/tenant/uploadBrandImg`;


/**
 * 商品相关
 */

/*
 属性相关
*/
// 添加商品属性
export const createAttributeURL = `${baseUrl}/mgmt/v1/product/createAttribute`;

// 更新属性
export const updateAttributeURL = `${baseUrl}/mgmt/v1/product/updateAttribute`;

// 删除属性
export const deleteAttributeURL = `${baseUrl}/mgmt/v1/product/deleteAttribute`;

// 添加属性选项
export const createAttriChoicesURL = `${baseUrl}/mgmt/v1/product/createAttriChoices`;

//删除属性选项
export const deleteAttriChoiceURL = `${baseUrl}/mgmt/v1/product/deleteAttriChoice`;

// 添加属性选项
export const createAttriRelationURL = `${baseUrl}/mgmt/v1/product/createAttriRelation`;

//删除属性选项关联
export const deleteAttriRelationURL = `${baseUrl}/mgmt/v1/product/deleteAttriRelation`;

/*
  商品相关
 */

// 添加商品分类
export const createMdseCategoryURL = `${baseUrl}/mgmt/v1/product/createMdseCategory`;

//  增加商品
export const createSPUURL = `${baseUrl}/mgmt/v1/product/createSPU`;

// 获取品牌下商品列表
export const tenantAllSPUURL = `${baseUrl}/mgmt/v1/product/tenantAllSPU`;

//获取某一分类下的商品
export const categoryAllSPUURL = `${baseUrl}/mgmt/v1/product/categoryAllSPU`;

//上传SPU详情图
export const uploadSPUDetailURL = `${baseUrl}/mgmt/v1/product/uploadSPUDetail`;

//获取SPU详情
export const SPUDetailURL = `${baseUrl}/mgmt/v1/product/SPUDetail`;

//创建 SKU
export const createSKUURL = `${baseUrl}/mgmt/v1/product/createSKU`;

//删除 SKU
export const deleteSKUURL = `${baseUrl}/mgmt/v1/product/deleteSKU`;

/**
 * 订单相关
 */

// 创建订单
export const createOrderURL = `${baseUrl}/client/v1/order/createOrder`;

// 用户修改订单商品数量
export const updateOrderCountURL = `${baseUrl}/client/v1/order/updateOrderCount`;

// 用户获取订单列表
export const findOrderListURL = `${baseUrl}/client/v1/order/findOrderList`;

// 用户支付订单
export const payOrderURL = `${baseUrl}/client/v1/order/payOrder`;

// 用户申请退款
export const applyRefundURL = `${baseUrl}/client/v1/order/applyRefund`;

/*
  商户订单管理
 */
// 管理员修改订单商品价格
export const updateOrderPriceURL = `${baseUrl}/mgmt/v1/order/updateOrderPrice`;

// 管理员修改订单物流费用
export const tenantUpdateOrderLogisticURL = `${baseUrl}/mgmt/v1/order/tenantUpdateOrderLogistic`;

// 商铺获取订单列表
export const findTenantOrderListURL = `${baseUrl}/mgmt/v1/order/findOrderList`;

// 商家同意退款
export const permitOrderRefundURL = `${baseUrl}/mgmt/v1/order/permitOrderRefund`;




