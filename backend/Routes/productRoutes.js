import express from 'express'
import Product from '../Models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get('/new-arrivals', async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 }).limit(5);
    res.send(products);
});

productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

/*
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
})
*/

export default productRouter;