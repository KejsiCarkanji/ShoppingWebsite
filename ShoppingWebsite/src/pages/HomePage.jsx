import products from "../common/products";
import Product from "../components/Product";
import Header from "../components/Header";
import { useProductsContext } from "../store/useProductsContext";
export default function HomePage() {
    const { addProduct, productsAdded } = useProductsContext()
    console.log(productsAdded)
    return(
        <Header> 
        <div className="home-page">
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
        </div>
        </Header>
    )
}
