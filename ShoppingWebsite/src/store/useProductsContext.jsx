import { createContext, useState, useContext} from "react";

const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [productsAdded, setProductsAdded] = useState([])
    
    const addProduct = (product) => {
        const productFound = productsAdded.find((item) => item.product.id === product.id)
        if(productFound) {
            const updatedProducts = productsAdded.map((item) => 
                item.product.id === productFound.product.id ? {...item, quantity: item.quantity + 1} : item
            )
            setProductsAdded(updatedProducts)
        }
        else
            setProductsAdded([...productsAdded, {product, quantity: 1}])
    }

    const removeProduct = (product) => {
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

    return (
        <ProductContext.Provider value={{productsAdded, addProduct, removeProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductContext)
}