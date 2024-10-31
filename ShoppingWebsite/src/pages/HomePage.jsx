import { Outlet } from "react-router-dom";
import products from "../common/products";
import Product from "../components/Product";
import Header from "../components/Header";
import { useState } from  "react";

export default function HomePage() {
    const [productsAdded, setProductsAdded] = useState([])
    
    const addProduct = (product) => {
        const productFound = productsAdded.find((item) => item.product.id === product.id)
        if(productFound) {
            const updatedProduct = productsAdded.map((item) => 
                item.product.id === productFound.product.id ? {...item, quantity: item.quantity + 1} : item
            )
            setProductsAdded(updatedProduct)
        }
        else
            setProductsAdded([...productsAdded, {product, quantity: 1}])
    }

    console.log(productsAdded)

    return(
        <Header> 
        {products.map((product) => ( 
            <Product
                key={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                id = {product.id}
                addProduct={() => addProduct(product)}
            />
        ))}
        </Header>
    )
}
