import express from "express";

const router = express.Router();


import {addProduct, deleteProduct, getAllProducts, getSingleProduct} from "../controllers/product";


router.post("/product/addProduct", addProduct);
router.get("/product/fetchProducts", getAllProducts);
router.get("/product/fetch-single-Product", getSingleProduct);
router.delete("/product/deleteProduct", deleteProduct);


module.exports = router;
