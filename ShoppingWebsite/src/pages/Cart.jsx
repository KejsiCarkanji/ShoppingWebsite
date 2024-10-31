import Header from "../components/Header"
import { useProductsContext } from "../store/useProductsContext"

export default function Cart() {
    const {productsAdded, addProduct, removeProduct} = useProductsContext()
    console.log(productsAdded)
    return (
        <Header> 
            <div>
                {productsAdded.map((item) => (
                    <div key={item.product.id}>
                        <img src={item.product.img} alt={item.product.title} />
                        <h3>{item.product.title}</h3>
                        <p>{item.product.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => addProduct(item.product)}>+</button>
                        <button onClick={() => removeProduct(item)}>-</button>
                    </div>
                ))}
            </div>
        </Header>
    )
}   