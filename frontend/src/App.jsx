import { Routes, Route,Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Signup from "./pages/Signup";

function App() {
  const user=false
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
       
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/signup" element={user?<Navigate to="/"/>:<Signup />}/>
        <Route path="/Login" element={user?<Navigate to="/"/>:<Login/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
