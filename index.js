var express = require('express');//引入express模块
var app = express();
// const cors = require('cors')
// app.use(cors)// 解决跨域

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//定义方法
app.get('/',function(req,res){
    res.send('HellowWorld')
});
//响应接口
app.get('/react/list',function(req,res){
//数据
    let result={
        err:0,
        msg:'ok',
        data:[
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
          ]
    }
    res.send(result)
})

app.post('/text', (req, res) => {
    res.json('<div>hello text</div>')
})
//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function(){
    console.log('runing 3000...');
})