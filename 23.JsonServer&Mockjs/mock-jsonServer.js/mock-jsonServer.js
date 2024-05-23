const Mock = require("mockjs")

module.exports = ()=>{
    const data = Mock.mock({
        "newsList|4": [
          {
            "id|+1": 1,
            title: "@ctitle(3,7)",
            author: "@cname",
            avatar: "@image('100*100','#a23ade')",
            content: "@csentence(30,50)",
            createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
            "category|1": ["八卦", "娱乐", "科技", "军事"],
          },
        ],
        "orderList|4": [
          {
            "id|+1": 1,
            orderNo: "@string(10)",
            createTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
            name: "@cname",
            address: "@province@city@county",
            tel: /^1[0-9]{10}$/,
            "orderItem|3-6": [
              {
                "id|+1": 1,
                "name|1": ["袜子", "裤子", "秋裤", "棉裤", "羽绒裤", "没有裤"],
                price: "@natural(1,1000)",
                num: "@natural(1,10)",
              },
            ],
          },
        ],
      });
    
      return data;
}