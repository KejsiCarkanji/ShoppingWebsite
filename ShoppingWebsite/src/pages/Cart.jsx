import Header from "../components/Header";
import { useProductsContext } from "../store/useProductsContext";

export default function Cart() {
    const { productsAdded, addProduct, decreaseQuantity, deleteProduct, 
        clearCart, calculateTotal } = useProductsContext();
    
    return (
        <div className="cart-page">
            <Header />
            <div className="cart-container">
                {productsAdded.length > 0 ? (
                    <>
                        {productsAdded.map((item) => (
                            <div key={item.product.id} className="cart-product">
                                <img src={item.product.img} alt={item.product.title} />
                                <div className="cart-product-details">
                                    <h3>{item.product.title}</h3>
                                    <p>{item.product.price + '€'}</p>
                                    <p>{item.quantity}</p>
                                    <div className="buttons">
                                        <button onClick={() => addProduct(item.product)}>+</button>
                                        <button onClick={() => decreaseQuantity(item)}>–</button>
                                        <button onClick={() => deleteProduct(item.product)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p>Total: {calculateTotal() + '€'}</p>
                        <button onClick={clearCart} style={{ marginBottom: '20px' }}>Clear Cart</button>
                    </>
                ) : (
                    <p>Cart is empty</p>
                )}
            </div>
        </div>
    );
}
