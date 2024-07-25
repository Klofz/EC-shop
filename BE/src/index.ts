import express from "express";
import merchRouter from "./routers/merch";
import filtersRouter from "./routers/filters";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/merch", merchRouter);
app.use("/api/filters", filtersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
