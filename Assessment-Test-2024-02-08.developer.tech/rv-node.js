const express = require('express');
const app = express();
const port = 3000;

// Dummy data (replace with your actual data fetching logic)
const products = [
  // ... (your dummy data here)
    {
      "title": "PEGASUS 33 Running Shoes For Men",
      "price": 59.99,
      "image": "https://i.pinimg.com/originals/43/40/8e/43408ee5a8d234752ecf80bbc3832e65.jpg",
    },
    {

      "title": "MEN'S ADIDAS RUNNING KALUS SHOES",
      "price": 39.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrEqFHfSbs6rUzcYnN_PcnS_D2JLXusKMVFk4Y8N_tn3hJgNIf",
    }, 
    {
      "title": "PEGASUS 33 Running Shoes For Men",
      "price": 59.99,
      "image": "https://i.pinimg.com/originals/43/40/8e/43408ee5a8d234752ecf80bbc3832e65.jpg",
    }
];

//  Middleware for JSON parsing
app.use(express.json());

// Endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
