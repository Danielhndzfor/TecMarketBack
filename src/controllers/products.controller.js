// backend/controllers/products.controller.js
import Product from '../models/product.model.js';

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, stock, deliveryType, condition, category } = req.body;
    const imagePaths = req.files.map(file => {
      const url = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
      return url; 
    });

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      deliveryType,
      condition,
      category,
      images: imagePaths,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};