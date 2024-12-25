// 解析返回的 JSON 数据
var obj = JSON.parse($response.body);

// 修改用户数据，伪造为 VIP 状态
obj.data = {
  "loginStatus": 1,
  "expire": false,
  "nickName": "起风了",
  "title": "至尊VIP会员",
  "userTypeName": "尊贵VIP用户",
  "memberCardId": 12345,
  "superVipEndTime": 4102444800000, // 2100 年时间戳
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

// 返回修改后的 JSON 数据
$done({body: JSON.stringify(obj)});