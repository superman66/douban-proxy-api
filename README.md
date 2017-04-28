# 豆瓣 Api V2 Node.js 转发服务
简单的几行代码实现通过 Node.js + Express + superagent 转发豆瓣 Api 请求，解决跨域问题。

**安装依赖**

Node.js 转发请求用到了 `express` 和 `superagent`. [superanget](https://github.com/visionmedia/superagent)是一个 Node.js HTTP client,主要用于在 Node.js 中发起 Http 请求。
进入项目：
```
npm install
```

**端口设置**

由于部署到 Heroku 时，端口是动态分配的，所以需要根据 `process.env.NODE_ENV` 动态设置端口。
如果不需要部署到 Heroku，可直接设置静态端口。
```javascript
app.set('port', (process.env.PORT || 8081));
```
**定义接口**

根据豆瓣 提供的 Api，我整理出其中的 `movie`、`book` 和 `music` 三个部分，放在 `routes/` 文件夹下。
来看看如何定义接口（以 `routes/movie.js` 为例）：
```javascript
// 定义 restful api
app.get('/movie/:type', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.get('/movie/subject/:id', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.get('/movie/search', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})
```

**CORS设置**

>跨源资源共享 ( [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) )机制让Web应用服务器能支持跨站访问控制，从而使得安全地进行跨站数据传输成为可能。
主要是通过设置`Access-Control-Allow-Origin: *`
```javascript
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});
```
**端口监听**

```javascript
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
```
**启动**

```
npm start
```

# 部署到Heroku
详情见： [官方 Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
