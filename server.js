import express, { static } from "express";
import { urlencoded, json } from "body-parser";

var PORT = process.env.PORT || 8080;

var app = express();

app.use(static("public"));

app.use(urlencoded({ extended: true }));

app.use(json());

import exphbs from "express-handlebars";

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

import routes from "./controllers/burgersController.js";

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});