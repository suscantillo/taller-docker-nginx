const express = require('express');
const app = express();
const PORT = process.env.PORT;

const products = [
  { id: 1, name: 'Teclado', price: 80000 },
  { id: 2, name: 'Mouse', price: 45000 },
  { id: 3, name: 'Monitor', price: 650000 },
];

app.get('/', (req, res) => {
  res.json({
    name: 'backend-api',
    version: '1.0.0',
    endpoints: ['/health', '/api/products', '/api/products/:id'],
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend-api' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
