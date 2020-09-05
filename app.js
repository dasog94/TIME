import express from "express";
import morgan from "morgan";
const app = express();

// router 설정
import indexRouter from "./routes/index.js";
import introductionRouter from "./routes/introduction.js";
import archievingRouter from "./routes/archieving.js";
import pictureRouter from "./routes/picture.js";

// db 받아오기
import db from "./db.js";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set("views", __dirname + "/views");

// 화면 engine을 ejs로 설정
app.set("view engine", "ejs");

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + "/public"));

db();
// Url
app.use("/", indexRouter);
app.use("/introduction", introductionRouter);
app.use("/archieving", archievingRouter);
app.use("/picture", pictureRouter);

export default app;

//작동 확인용
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("connected");
    console.log(`http://localhost:${PORT}/`);
});