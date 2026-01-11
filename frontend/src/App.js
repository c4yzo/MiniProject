import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import SigninScreen from './Screens/SigninScreen/SigninScreen.jsx';
import SignupScreen from './Screens/SignupScreen/SignupScreen.jsx';
import ProductScreen from './Screens/ProductScreen/ProductScreen.jsx';
import CartScreen from './Screens/CartScreen/CartScreen.jsx';
import ShippingAddressScreen from './Screens/ShippingAddressScreen/ShippingAddressScreen.jsx';
import PaymentMethodScreen from './Screens/PaymentMethodScreen/PaymentMethodScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
