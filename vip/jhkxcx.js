/******************************

脚本功能：传图加画框
软件版本：v1.2.0
脚本作者：起风了
更新时间：2023-3-5
问题反馈：QQ+980807262
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/prod\.jiahk\.cn\/api\/v1\/findUserInfo url script-response-body https://raw.githubusercontent.com/lengwangye/Quantumult-x/main/vip/jhk001.js
^https:\/\/pro\.jiahk\.cn\/api\/index\/getUserInfo url script-response-body https://raw.githubusercontent.com/lengwangye/Quantumult-x/main/vip/jhk001.js
[mitm] 

hostname = https://pro.jiahk.cn

*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "msg" : "成功",
  "data" : {
    "userTypeName" : "成为会员",
    "userType" : 1,
    "isVip" : 1,
    "isShowIosVip" : true,
    "activeMemberCardId" : 1,
    "openid" : "oAmqG5EU3s4CVLYyU-YvUq0opGMQ",
    "memberCardId" : 0,
    "vipEtime" : 4076366362000,
    "nickName" : "加画框用户",
    "excessDays" : null,
    "userSn" : "5168735",
    "isExpires" : 4076366362000,
    "headImgUrl" : "https://oss.jiahk.cn/static/img/default-header-icon.png"
  },
  "code" : 200
}


$done({body : JSON.stringify(objc)});
