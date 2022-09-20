const { application } = require("express");
const book = require("my-app");
const config = require("./my-app");
require("dotenv").config();
app.use(express.static("public"));
const PORT = process.env.PORT;

app.set("book name", "whene");
app.set("book sale", "book zohiogch ner");
app.set("book is ISBN number", "bookpublish-date");
app.set("book code");
res.render("index");

app.get("/", function (req, res) {
  res.render("index", { name: "book" });
});
app.listen(PORT);
console.log("my book", PORT);
