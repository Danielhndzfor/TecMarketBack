import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  deliveryType: {
    type: String,
    enum: ['envio a domicilio', 'retiro en tienda', 'entrega personal'],
    required: true,
  },
  condition: {
    type: String,
    enum: ['nuevo', 'usado', 'seminuevo'],
    required: true,
  },
  category: {
    type: String, 
    enum: ['electronica', 'hogar', 'comida', 'postres', 'bebidas', 'ropa', 'libros', 'deportes', 'otros'],
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
});

const Product = mongoose.model('Product', productSchema);

export default Product;

