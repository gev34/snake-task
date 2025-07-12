import express from "express";
import { renderToString } from "react-dom/server";

import fs from "fs";
import path from "path";

import  Snake  from "../client/Snake";

const app = express();
const PORT = 3000;

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("*", (_, res) => {
  const appHtml = renderToString(<Snake />);
const htmlTemplate = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf-8");

  const html = htmlTemplate.replace("<!--APP-->", appHtml);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
