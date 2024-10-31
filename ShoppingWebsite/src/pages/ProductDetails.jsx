import { useParams } from "react-router"
import products from "../common/products"
import Product from "../components/Product"
import Header from "../components/Header"
import { useState } from "react"

function ProductDetails() {

    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))
    return (
        <Header>
            <h1>Product Details</h1>
            <Product 
                img={product.img} 
                title={product.title} 
                price={product.price} 
                description={product.description} 
                addProduct={() => addProduct(product)}
            />
        </Header>
    )
}

export default ProductDetails