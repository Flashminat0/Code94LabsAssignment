import express from "express";

const router = express.Router();


import {addProduct, deleteProduct, getAllProducts} from "../controllers/product";


router.post("/product/addProduct", addProduct);
router.get("/product/fetchProducts", getAllProducts);
router.delete("/product/deleteProduct", deleteProduct);


module.exports = router;
