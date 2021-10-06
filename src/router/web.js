import express from "express";
import { getHomePage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/about", (req, res) => {
    res.send("About");
  });

  return app.use("/", router);
};

export default initWebRoute;
