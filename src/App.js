import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './Components/Home';
import {Products} from "./Components/Products";
import { Navbar } from './Components/Navbar';
import {ProductsDetails} from "./Components/ProductDetails"
import { ProductDoesNotExist } from './Components/ProductNotExist';
import {PageNotFound} from "./Components/PageNotFound";

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductsDetails /> } ></Route>
        <Route path="/ProductNotExist" element={<ProductDoesNotExist />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
