import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../store/useThemeContext";

export default function Header({children}) {
    const navigate = useNavigate();
    const {toggleTheme} = useThemeContext();

  return (
    <div className="header">
      <label onClick={toggleTheme}>theme</label>
      <h1 style={{backgroundColor: 'lightblue'}} onClick={() => navigate('/')}>Shopping Website</h1>
      <button style={{backgroundColor: 'lightblue'}} onClick={() => navigate('/cart')}>Cart</button>
      {children}
    </div>
  );
}