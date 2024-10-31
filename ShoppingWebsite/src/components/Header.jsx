import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../store/useThemeContext";
import shoppingCart from '../assets/images/icons/shopping-cart.png';
import logo from '../assets/images/icons/logo.png';
import { useProductsContext } from "../store/useProductsContext";
import darkModee from '../assets/images/icons/dark-mode.png';
import lightMode from '../assets/images/icons/light-mode.png';

export default function Header({children}) {
    const navigate = useNavigate();
    const {toggleTheme, darkMode} = useThemeContext();
    const {totalProducts} = useProductsContext();

  return (
    <div className="header">
      <img src={logo} onClick={() => navigate('/')} className="logo" />
      <h1 onClick={() => navigate('/')}>Home</h1>
      <div className="cart"> 
        {darkMode ? <img src={lightMode} onClick={toggleTheme} className="cart-icon"/> : 
        <img src={darkModee} onClick={toggleTheme} className="cart-icon"/>}
        <img src={shoppingCart} onClick={() => navigate('/cart')} className="cart-icon" />
        <span className="cart-count" style={{fontWeight: 'bold'}}>{'('+ totalProducts() + ')'}</span>
      </div>
      {children}
    </div>
  );
}