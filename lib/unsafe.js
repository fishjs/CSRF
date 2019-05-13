const http = require("http")

http.createServer((req, res) => {
  // 打印请求的基本信息，方便调试
  console.log(req.headers.cookie)
  console.log(req.headers.referer)

  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.end("操作成功")

}).listen(8088, () => {
  console.log("server is listening " + 8088);
})

