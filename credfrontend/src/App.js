import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allproducts from './components/Allproducts';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';
import Product_router from './router/Product_router';


function App() {
  return (
    <div className="App">
    
     {/* <Allproducts/> */}
     {/* <AddProduct/> */}
     {/* <ViewProducts/> */}
     <Product_router/>
     
    </div>
  );
}

export default App;
