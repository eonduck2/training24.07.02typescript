import http from "http";

http
  .createServer((req, res) => {
    if (req.method === `GET`) {
      if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end(`ㅎㅇ`);
      }
    }
  })
  .listen(3000, () => {
    console.log(`https://localhost:3000`);
  });
