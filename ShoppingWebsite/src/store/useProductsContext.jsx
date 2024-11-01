import { createContext, useState, useContext, useEffect} from "react";

const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {

    const getStoredProducts = () => {
        const storedProducts = localStorage.getItem("productsAdded");
        return storedProducts ? JSON.parse(storedProducts) : [];
    };

    const [productsAdded, setProductsAdded] = useState(() => 
        getStoredProducts() 
    );

    useEffect(() => {
        localStorage.setItem("productsAdded", JSON.stringify(productsAdded));
    }, [productsAdded]);
    
    const addProduct = (product, quantity = 1) => {
        const productFound = productsAdded.find((item) => item.product.id === product.id)
        if(productFound) {
            const updatedProducts = productsAdded.map((item) => 
                item.product.id === productFound.product.id ? {...item, quantity: item.quantity + quantity} : item
            )
            setProductsAdded(updatedProducts)
        }
        else
            setProductsAdded([...productsAdded, {product, quantity}])
    }

    const decreaseQuantity = (product) => {
        if(product.quantity > 1){
            const updatedProducts = productsAdded.map((item) =>
                item.product.id === product.product.id ? {...item, quantity: item.quantity - 1} : item
            )
            setProductsAdded(updatedProducts)
        } else {
            const updatedProducts = productsAdded.filter((item) => item.product.id !== product.product.id)
            setProductsAdded(updatedProducts)
        }
    }

    const deleteProduct = (product) => {
        const updatedProducts = productsAdded.filter((item) => item.product.id !== product.id)
        setProductsAdded(updatedProducts)
    }

    const clearCart = () => {
        setProductsAdded([]);
        localStorage.removeItem("productsAdded"); 
    };

    const calculateTotal = () => {
        return productsAdded.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }

    const totalProducts = () => {
        return productsAdded.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <ProductContext.Provider 
        value={{productsAdded, addProduct, decreaseQuantity, deleteProduct, 
        totalProducts, clearCart, calculateTotal}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductContext)
}