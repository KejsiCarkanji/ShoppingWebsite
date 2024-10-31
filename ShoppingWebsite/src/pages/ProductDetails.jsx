import { useParams } from "react-router"
import products from "../common/products"
import Product from "../components/Product"
import Header from "../components/Header"
import { useProductsContext } from "../store/useProductsContext"
function ProductDetails() {
    const { addProduct, productsAdded } = useProductsContext()
    console.log(productsAdded)

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
                addProduct={(quantity) => addProduct(product, quantity)}
            />
        </Header>
    )
}

export default ProductDetails