[rewrite_local]

^https:\/\/prod\.jiahk\.cn\/api\/v1\/findUserInfo url script-response-body 11.js

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
