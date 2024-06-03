import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/products.routes.js'; // Importa las rutas de productos
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: '*' // Permitir solicitudes desde todas las fuentes, ajusta según sea necesario
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', productRoutes); // Usa las rutas de productos en lugar de propiedades
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

export default app;
