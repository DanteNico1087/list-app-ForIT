 import express, { Request, Response } from 'express';

// Creamos la aplicación Express
const app = express();

// Puerto en el que correrá nuestro servidor
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON automáticamente
app.use(express.json());

// Ruta de prueba: GET /api/hello
app.get('/api/hello', (_req: Request, res: Response) => {
  res.json({ message: '¡Hola desde el backend con TypeScript y Express!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server corriendo en http://localhost:${PORT}`);
});
