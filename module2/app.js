const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.query, req.params);


  res.send("Hello World!");
});

// для отправки на сервер (например регистрация пользователя)
app.post("/", (req, res) => {
  const body = reg.body

  console.log(body);

  res.send("Hello World!");
});

// Обновление сущности целиком (например изенение данных пользователя польностью на основании предыдущих)
app.put("/", (req, res) => {
  res.send("Hello World!");
});

// Модифиуация сущности целиком (например изенение только email пользователя)
app.patch("/", (req, res) => {
  res.send("Hello World!");
});

app.delete("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
