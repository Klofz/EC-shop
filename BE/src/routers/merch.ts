import express from "express";
import merchService from "../services/merchService";

const merchRouter = express.Router();

merchRouter.get("/", (_req, res) => {
  res.send(merchService.getMerch());
});

export default merchRouter;
