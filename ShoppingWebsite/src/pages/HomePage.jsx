import { Outlet } from "react-router-dom";
import products from "../common/products";
import Product from "../components/Product";

export default function HomePage() {
    return(
        <div>
        {products.map((item) => ( 
            <Product
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                id = {item.id}
            />
        ))}
        
        </div>
    )
}
