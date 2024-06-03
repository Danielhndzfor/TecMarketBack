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
    // Mapeamos los productos para incluir solo las propiedades necesarias, incluida la URL de la primera imagen
    const formattedProducts = products.map(product => ({
      _id: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      deliveryType: product.deliveryType,
      condition: product.condition,
      category: product.category,
      // Aquí asumimos que la propiedad 'images' es un array de strings que contienen las URL de las imágenes
      // Si 'images' es un array de objetos con la estructura { uri: string, type: string }, necesitaríamos adaptar esta lógica
      images: product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/200' // Si no hay imágenes, utilizamos un placeholder
    }));
    res.status(200).json(formattedProducts);
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
