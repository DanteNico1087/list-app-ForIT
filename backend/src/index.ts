import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// --- Rutas ---
app.get('/api/hello', (_req, res) => {
  res.json({ message: '¡Hola desde el backend con TypeScript y Express!' });
});
app.use('/api/tasks', tasksRouter);

// --- Middleware de 404 para rutas no existentes ---
app.use((_req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada.' });
});

// --- Middleware de manejo de errores ---
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(status).json({ error: message });
};
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server corriendo en http://localhost:${PORT}`);
});
