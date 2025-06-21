import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT} `);
});
