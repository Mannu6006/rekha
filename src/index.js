import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import App from './App';
// import Bootstrap2 from './Bootstrap2';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import Features from './Features';
import Contact from './Contact';
import Services from './Services';
import {Route,Routes} from 'react-router';
// import About from './About';



// import Usememo from './Usememo';
// import Hello from './Hello';






import {BrowserRouter } from 'react-router-dom'; 
// {/* <App name="future findre"/> */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   
  
   <Navbar/>
   {/* <Usememo/> */}
   {/* <Hello/> */}
  
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="product" element={<Product/>}></Route>
    <Route path="features" element={<Features/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
    <Route path="services" element={<Services/>}></Route>
    <Route></Route>
   </Routes>
  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

