import express from "express";
import expressLayouts from "express-ejs-layouts";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.set("views", "src/views");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});
