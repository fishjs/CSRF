const http = require("http")

http.createServer((req, res) => {
  // 打印请求的基本信息，方便调试
  console.log(req.headers.cookie)
  console.log(req.headers.referer)
  res.setHeader("Content-Type", "text/plain; charset=utf-8")

  // 通过refer字段来验证用户是否是第三方页面跳转的
  if (req.headers.referer && req.headers.referer.startsWith("http://locahost:8088") === false){
    res.end("你是第三方网站跳转的！为了安全，禁止您此次请求")

  } else {
    res.end("操作成功")
  }

}).listen(8088, () => {
  console.log("server is listening " + 8088);
})

