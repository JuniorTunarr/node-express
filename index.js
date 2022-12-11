const express = require("express");
var cors = require("cors");
// CORS: HTML의 요청을 응답이 잘 되도록 만들어주는 것
const app = express();
const port = 3000;
app.use(cors());
// cors 미설정시 콘솔에 오류가 뜰 것
app.get("/", function (req, res) {
  res.send("Hello World");
});
//req: request로 포론트에서 백으로 요청 , res: respond로 백에서 프론트로 응답을 보내주는 것으로 화면에 뜨는 출력값

app.get("/dog", function (req, res) {
  res.send("<h1>강아지<h1>");
  // send안에 html을 보내줄 수 있음
});
app.get("/cat", function (req, res) {
  res.json({ sound: "냐옹!" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//listen하고 있는 포트로 들어온 후, 뒤에 콜백함수가 실행되는 것

//axios는 요청을 하는 것, express는 응답을 함
//주소상에 한글을 넣고 싶으면, 인코딩 사이트를 통해서 변환해줘야함!

// GET: params, query 두 가지 방법이 있음
app.get("/user/:id", (req, res) => {
  //   const p = req.params;
  //   console.log(p.id);
  //   res.json({ userid: p.id });
  const q = req.query;
  // ex: http://localhost:3000/user/asdf?q=jocoding&name=jo&age=20
  console.log(q);
  // result: { q: 'jocoding', name: 'jo', age: '20' }
  res.json({ userid: q.name });
  // result: {"userid": "jo"}
  //   res.send({ : "hello world!" });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  // key 값인 name을 바로 넣어주는 방법으로 name에 예로 dog를 넣었을시 바로 dog로 저장됨
  {
    name === "dog"
      ? res.json({ sound: "멍멍" })
      : name === "cat"
      ? res.json({ sound: "야옹" })
      : name === "pig"
      ? res.json({ sound: "꿀꿀" })
      : res.json({ sound: "알수없음" });
  }
});
