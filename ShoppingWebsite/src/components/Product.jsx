import { Link } from "react-router-dom"

export default function Product({img, title, price, id}){
    return (
        <div>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
        <Link to={`/`+id}>View Details</Link>
        <button>Add to Cart</button>
        </div>
    )
}