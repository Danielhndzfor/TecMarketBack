import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getProducts, getProduct, createProduct } from '../controllers/products.controller.js';
import upload from '../multerConfig.js';  // Importa Multer

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', upload.array('images', 5), createProduct);  // Usa Multer en la ruta POST

export default router;
