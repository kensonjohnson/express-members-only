import express, { Request, Response } from "express";
import expressLayouts from "express-ejs-layouts";
import { config } from "dotenv";
import { connect } from "mongoose";

// initialize Express app
const app = express();

// Setup environment variables
config();
const PORT = process.env.PORT || 3000;

// ---------------- Configure Express app ---------------- //
app.use(express.json());
app.use(express.static("public"));

// ---------------- Connect to Database ---------------- //
const databaseURI = process.env.MONGO_URI;
if (databaseURI) {
  connect(databaseURI)
    .then((result) => console.log("\x1b[33mConnected to DB\x1b[39m"))
    .catch((error) => {
      console.error(
        "\x1b[33mMongoose exited with Error:\n\x1b[39m",
        error.message
      );
      console.error("\x1b[33mIs your MongoDB instance running?\x1b[39m");
    });
}

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
