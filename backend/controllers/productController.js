import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// path to products JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFile = path.join(__dirname, "../data/products.json");

// read products from file
const loadProductsFromFile = () => {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(data);
};
//write products to file
const saveProductsToFile = (product) => {
  fs.writeFileSync(dataFile, JSON.stringify(product, null, 2), "utf-8");
};

// add Products
export const addProduct = (req, res) => {
  const { id, name, price, imageUrl, category, description } = req.body;
  if (!id || !name || !price || !imageUrl || !category) {
    return res.status(400).JSON({ error: "All fields are required." });
  }
  const products = loadProductsFromFile();

  // check for duplicate ID
  const existingProduct = products.find((p) => p.id === id);
  if (existingProduct) {
    return res
      .status(500)
      .json({ error: "Product with this ID already exists." });
  }
  const newProduct = {
    id,
    name,
    price,
    imageUrl,
    category,
    description,
  };

  products.push(newProduct);
  saveProductsToFile(products);
  res
    .status(200)
    .json({ message: "Product added successfully!", product: newProduct });
};

// delete product
export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const products = loadProductsFromFile();
    const index = products.findIndex((product) => product.id == id);
    if (index === -1) {
      return res.status(404).json({ error: "Product not found." });
    }
    const deleteProduct = products.splice(index, 1)[0];
    saveProductsToFile(products);
    res.json({
      message: "Product deleted successfully",
      product: deleteProduct,
    });
  } catch (error) {
    console.log("An error occur to delete product.", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get product details by ID
export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const products = loadProductsFromFile();
    const product = products.find((product) => product.id == id);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.json(product);
  } catch (error) {
    console.log("An error occur to get product by id.", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// list products with optional filter by name
export const listProducts = (req, res) => {
  const { q } = req.query;
  let products = loadProductsFromFile();
  if (q) {
    const query = q.toLowerCase();
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }

  res.json(products);
};
