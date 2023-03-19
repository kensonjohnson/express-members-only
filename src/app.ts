import express, { Request, Response } from "express";
import expressLayouts from "express-ejs-layouts";
import { config } from "dotenv";

// initialize Express app
const app = express();

// Setup environment variables
config();
const PORT = process.env.PORT || 3000;

// ---------------- Configure Express app ---------------- //
app.use(express.json());
app.use(express.static("public"));

// ---------------- Set View Engine ---------------- //
app.set("views", "src/views");
app.set("view engine", "ejs");
app.use(expressLayouts); // express-ejs-layouts

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(PORT, () => {
  return console.log(`http://localhost:${PORT}`);
});
