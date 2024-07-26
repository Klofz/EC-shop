import express from "express";
import merchRouter from "./routers/merch";
import filtersRouter from "./routers/filters";
import CONFIG from "./utils/config";

const app = express();
app.use(express.static("dist"));
app.use(express.json());

const PORT = CONFIG.PORT;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/merch", merchRouter);
app.use("/api/filters", filtersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
