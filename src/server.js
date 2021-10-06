import express from "express";
import configViewEngine from "./configs/viewEngine";

import initWebRoute from "./router/web";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// setup view engine
configViewEngine(app);
// init web router
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
