import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
<Router>
      <Topbar/>
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>

        <Routes>
          <Route path="/users" element={<UserList/>} exact/>
        </Routes>

        <Routes>
          <Route path="/user/:userId" element={<User/>} exact/>
        </Routes>

        <Routes>
          <Route path="/newUser" element={<NewUser/>} exact/>
        </Routes>

        <Routes>
          <Route path="/productList" element={<ProductList/>} exact/>
        </Routes>

        <Routes>
          <Route path="/product" element={<Product/>} exact/>
        </Routes>
    
        <Routes>
          <Route path="/product/productId" element={<Product/>} exact/>
        </Routes>

        <Routes>
          <Route path="/newproduct" element={<NewProduct/>} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
