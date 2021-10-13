import express from "express";
import {
  getHomePage,
  getDetailPage,
  createNewUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);
  router.get("/detail/user/:userId", getDetailPage);
  router.post("/create-new-user", createNewUser);
  router.get("/about", (req, res) => {
    res.send("About");
  });

  return app.use("/", router);
};

export default initWebRoute;
