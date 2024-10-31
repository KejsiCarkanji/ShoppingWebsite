import { Link } from "react-router-dom"
import { useState } from "react"

export default function Product(
    {img, 
    title, 
    price, 
    id, 
    description, 
    addProduct
    }) {

    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        addProduct(quantity); 
      };

    return (
        <div>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
            {!description && 
            <Link to={`/`+id}>View Details</Link>
            }
            {description &&
            <div>
            <p>{description}</p>
            <input type="number" min="1" max="10" value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}/>
            </ div>
            }
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}