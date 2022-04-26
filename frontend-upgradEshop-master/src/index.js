import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import AddProductsPage from './components/AddProducts/AddProducts';
import ProductCard from './components/ProductCard/ProductCard';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <section>
          <Routes>
            <Route path='/' element={ <NavigationBar /> }></Route>
            <Route path='/login' element={ <SignInPage /> }></Route>
            <Route path='/signup' element={ <SignUpPage /> }></Route>
            <Route path='/addproducts' element={ <AddProductsPage /> }></Route>
            <Route path='/productcard' element={ <ProductCard/> }></Route>
            <Route path='/products' element={<Products/> }></Route>
            <Route path='/productdetails' element={<ProductDetails/>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
