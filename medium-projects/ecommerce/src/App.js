import logo from './logo.svg';
import './App.css';
import ReactDom from "react-dom/client";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Orders from './pages/Orders';
import Products from './pages/Products';
import { NoPage } from './pages/NoPage';
function App() {
  return ( //sdfsdf
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout/>}>   
        <Route index element = {<Home/>}/>
        <Route path='Orders' element = {<Orders/>}/>
        <Route path='Products' element = {<Products />}/>
        <Route path='*' element = {<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
