import express from 'express';
import User from '../Models/userModel.js';
import Product from '../Models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/users', async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
});

seedRouter.get('/products', async (req, res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    res.send(createdProducts);
});

export default seedRouter;