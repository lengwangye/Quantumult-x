/*************************************

项目名称：加画框 解锁VIP
下载地址：https://t.cn/A6t6nFst
脚本作者：自定义
使用声明：⚠️仅供学习与交流，请勿转载与售卖！

**************************************

[rewrite_local]
^https:\/\/prod\.jiahk\.cn\/api\/v2\/forty\/findUserInfo url script-response-body https://raw.githubusercontent.com/your-username/your-repo/main/jiahk.js

[mitm]
hostname = prod.jiahk.cn

*************************************/

var response = JSON.parse($response.body);

// 修改用户数据为 VIP
response.data = {
  "loginStatus": 1,
  "expire": false,
  "nickName": "VIP用户",
  "title": "至尊VIP会员",
  "userTypeName": "尊贵VIP用户",
  "memberCardId": 12345,
  "superVipEndTime": 4102444800000, // 2100年
  "isVip": true,
  "excessDays": 99999,
  "channel": 1,
  "vipEndTimeStr": "2100/01/01",
  "vipEndTime": 4102444800000,
  "isNew": false,
  "buttonText": "续费会员",
  "userType": 1,
  "loginMethod": 1,
  "nextRenewTime": 4102444800000,
  "superMemberCardId": 67890,
  "platform": 1,
  "registerTime": 1735099739,
  "subtitle": "VIP画框/场景/滤镜，超清保存任意用",
  "headImgUrl": "https://oss.jiahk.cn/app_image/user_header_img/FAEEA88F-E761-4E10-B94A-BD497765E20E/2aa6d1b1c9732d8084f3b67aa0bdd08d",
  "watermark": {
    "standardWatermarkUrl": "https://oss.jiahk.cn/app/common/vip_watermark_700.png",
    "highWatermarkUrl": "https://oss.jiahk.cn/app/common/vip_watermark_1500.png",
    "superWatermarkUrl": "https://oss.jiahk.cn/app/common/vip_watermark_3000.png"
  },
  "subscribe": true,
  "renewStatus": true,
  "userId": 1973138
};

// 返回修改后的数据
$done({body: JSON.stringify(response)});