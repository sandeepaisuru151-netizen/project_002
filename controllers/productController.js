import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req, res) {

    if (!isAdmin(req)) {

        res.status(403).json({
            message: "Accsess denied. Admin only"
        })
        return
    }

    try {

        const existingProduct = await Product.findOne({
            productId: req.body.productId
        })

        if (existingProduct != null) {

            res.status(400).json({
                message: "Product with productId is already exists"
            })
            return
        }

        const newProduct = new Product({

            productId: req.body.productId,
            name: req.body.name,
            altNames: req.body.altNames,
            price: req.body.price,
            labelPrice: req.body.labelPrice,
            description: req.body.description,
            images: req.body.images,
            brand: req.body.brand,
            model: req.body.model,
            category: req.body.category,
            stock: req.body.stock
        })

        await newProduct.save()

        res.status(201).json({
            message: "Product created successfully",
           //product: newProduct
        }) 

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "error creating product",
            error: error.message
        })
    }
}

export async function getAllProducts(req, res) {

    try {
        if (isAdmin(req)) {

            const products = await Product.find();

            res.json(products);
        } else {

            const products = await Product.find({ isAvailble: true });

            res.json(products);
        }

    } catch (error) {

        res.status(500).json({

            message: "Error fetching products"
        })
    }

}

export async function deleteProduct(req,res){

    if(!isAdmin(req)) {

        res.status(403).json ({
            message : "Access denied. Admin Only"
        })
        return
    }

    try {

        await Product.deleteOne({
            productId : req.params.productId
        })

        res.json({

            message : "Product deleted successfully"
        })

    } catch (error){

        res.status(500).json({

            message : "Error deleting product"
        })
    }
    
}

export async function updateProduct(req,res){

    if(!isAdmin(req)){

        res.status(403).json({

            message : "Access denied. Admon only"
        })
        return
    }

    try{

        await Product.updateOne({
            productId : req.params.productId
        },{

            name: req.body.name,
            altNames: req.body.altNames,
            price: req.body.price,
            labelPrice: req.body.labelPrice,
            description: req.body.description,
            images: req.body.images,
            brand: req.body.brand,
            model: req.body.model,
            category: req.body.category,
            stock: req.body.stock,
            isAvailble : req.body.isAvailble

        })

        res.json ({
            message : "Product update successfully"
        })

    } catch(error){

        res.status(500).json ({
            message : "Error update product"
        })
    }
}

export async function getProductById(req,res) {

    try {
        const product = await Product.findOne({
            productId : req.params.productId
        })

        if (product == null){
            res.status(404).json ({
                message : "Product not found"
            })
        } else{

            if (product.isAvailble) {
                res.json (product)
            } else{
                if (isAdmin(req)) {
                    res.json(product)
                } else {

                    res.status(403).json ({
                        message : "Accsess denied. Admin Only"
                    })
                }
            }

        }
    } catch (error){
        res.status(500).json ({
            message : "error fetching product"
        })
    }
}