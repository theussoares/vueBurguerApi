
const express = require('express');
const app = express();
const PORT = 3000;

const data = {
    products: [
        {
            id: 1,
            name: "Hamburguer",
            category: "Sanduíches",
            price: 14,
            img: "https://i.imgur.com/Vng6VzV.png"
        },
        {
            id: 2,
            name: "X-Burguer",
            category: "Sanduíches",
            price: 16,
            img: "https://i.imgur.com/soOUeeW.png"
        },
        {
            id: 3,
            name: "Big Vue",
            category: "Sanduíches",
            price: 18,
            img: "https://i.imgur.com/eEzZzcF.png"
        },
        {
            id: 4,
            name: "Fanta Guaraná",
            category: "Bebidas",
            price: 5,
            img: "https://i.imgur.com/YuIbfCi.png"
        },
        {
            id: 5,
            name: "Coca-Cola",
            category: "Bebidas",
            price: 4.99,
            img: "https://i.imgur.com/KC2ihEN.png"
        },
        {
            id: 6,
            name: "Milkshake Ovomaltine",
            category: "Bebidas",
            price: 4.99,
            img: "https://i.imgur.com/iNkD4Pq.png"
        }
    ]
}    

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
