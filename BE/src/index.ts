import express from "express";
import merchRouter from "./routers/merch";
import filtersRouter from "./routers/filters";
import CONFIG from "./utils/config";
import brandRouter from "./routers/brand";
import productsRouter from "./routers/products";
import productCategoriesRouter from "./routers/productCategoriesRouter";
import variantsRouter from "./routers/variantsRouter";
import variantCategoriesRouter from "./routers/variantCategoriesRouter";

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

app.use("/api/brands", brandRouter);
app.use("/api/products", productsRouter);
app.use("/api/product-categories", productCategoriesRouter);
app.use("/api/variants", variantsRouter);
app.use("/api/variant-categories", variantCategoriesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
