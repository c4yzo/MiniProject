import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import SigninScreen from './Screens/SigninScreen/SigninScreen.jsx';
import ProductScreen from './Screens/ProductScreen/ProductScreen.jsx';
import CartScreen from './Screens/CartScreen/CartScreen.jsx';
import ShippingScreen from './Screens/ShippingScreen/ShippingScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
