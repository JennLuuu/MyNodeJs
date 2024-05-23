const Mock = require("mockjs")
module.exports = ()=>{
    const data = Mock.mock({
       "newsList|6" :[
        {
            "id|+1":1,
            title:"@ctitle",
            author:"@cname",
            avatar:"@image('100*100','#556421')",
            content:"@csentence(50,80)",
            createTime:"@datetime('yyyy-MM-dd HH:mm:ss')",
            "category|1":["娱乐","游戏","军事","财经","科技","民生"]
        }
       ],
       "orderList|10":[
        {
            "id|+1":1,
            orderNo:"@natural(1000,10000)",
            createTime:"@datetime('yyyy-MM-dd HH:mm:ss')",
            name:"@name",
            address:"@province@city@county",
            tel:/^1[0-9]{10}$/,
            "orderItem|3-6":[
                {
                    "id|+1":1,
                    "name|1":["袜子","裤子","裙子","帽子","褂子"],
                    price:"@natural(1,1000)",
                    num:"@natural(1,10)",
                }
            ]
        }
       ]
    })
    return data;
}