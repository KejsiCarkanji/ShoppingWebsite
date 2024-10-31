import { useNavigate } from "react-router-dom";

export default function Header({children}) {
    const navigate = useNavigate();
  return (
    <div className="header">
      <h1 style={{backgroundColor: 'lightblue'}}>Shopping Website</h1>
      <button style={{backgroundColor: 'lightblue'}} onClick={() => navigate('/cart')}>Cart</button>
      {children}
    </div>
  );
}