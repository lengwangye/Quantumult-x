/******************************

脚本功能：传图加画框
软件版本：v1.2.0
脚本作者：起风了
更新时间：2023-3-5
问题反馈：QQ+980807262
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/prod\.jiahk\.cn\/api\/v1\/findUserInfo url script-response-body https://raw.githubusercontent.com/lengwangye/Quantumult-x/main/vip/jhk.js

[mitm] 

hostname = prod.jiahk.cn


*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "msg" : "成功",
  "data" : {
    "renewStatus" : true,
    "vipEndTime" : 4076366362000,
    "userTypeName" : "开通会员",
    "nextRenewTime" : 0,
    "userType" : 1,
    "expire" : 4076366362000,
    "isVip" : true,
    "loginMethod" : 2,
    "subscribe" : true,
    "watermark" : {
      "standardWatermarkUrl" : "https://oss.jiahk.cn/app/common/default_watermark_700.png",
      "highWatermarkUrl" : "https://oss.jiahk.cn/app/common/default_watermark_1500.png",
      "superWatermarkUrl" : "https://oss.jiahk.cn/app/common/default_watermark_3000.png"
    },
    "userId" : 1286159,
    "memberCardId" : 0,
    "excessDays" : null,
    "nickName" : "传图加画框用户",
    "platform" : true,
    "vipEndTimeStr" : 4076366362000,
    "loginStatus" : 1,
    "headImgUrl" : "https://oss.jiahk.cn/app/images/default_head_image.png"
  },
  "code" : 200
}


$done({body : JSON.stringify(objc)});
