import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../store/useThemeContext";
import shoppingCart from '../assets/images/icons/shopping-cart.png';
import logo from '../assets/images/icons/logo.png';

export default function Header({children}) {
    const navigate = useNavigate();
    const {toggleTheme, darkMode} = useThemeContext();

  return (
    <div className="header">
      <img src={logo} onClick={() => navigate('/')} />
      <h1 style={{backgroundColor: 'lightblue'}} onClick={() => navigate('/')}>Home</h1>
      <label onClick={toggleTheme}>{darkMode ? 'dark' : 'light'}</label>
      <img src={shoppingCart} onClick={() => navigate('/cart')} />
      {children}
    </div>
  );
}