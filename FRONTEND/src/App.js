import './App.css';
import NavBar from './Components/Navbar/Navbar'; // Utiliser l'import sans {}
import LoginSignup from './Pages/LoginSignup'; // Utiliser l'import sans {}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'; // Importer une seule fois

import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

