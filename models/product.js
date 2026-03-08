import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        altNames: {
            type: [String],
            required: false,
            default: []
        },

        price: {
            type: Number,
            required: true
        },

        labelPrice: {
            type: Number,
            required: true
        },

        description: {
            type: String,
            required: false
        },

        images: {
            type: [String],
            required: true,
            default: [
                "#images.png",
                "3images2.png"
            ]
        },

        brand: {
            type: String,
            required: false
        },

        model: {
            type: String,
            required: false
        },

        category: {
            type: String,
            required: true
        },

        isAvailble: {
            type: Boolean,
            required: true,
            default: true
        },

        stock: {
            type: String,
            required: true,
            default: 0
        }
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product