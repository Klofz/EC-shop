import express from "express";
import filtersService from "../services/filtersService";

const filtersRouter = express.Router();

filtersRouter.get("/", (_req, res) => {
  res.send(filtersService.getFilters());
});

export default filtersRouter;
