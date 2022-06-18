import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Menu from '../pages/Menu'
import Search from '../pages/Search'
import SingleProduct from '../pages/SingleProduct'
import FindKFC from '../main_components/FindKFC/FindKFC';
import Home from "../pages/Home"
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Careers from "../pages/Careers"
import CheckOut from '../checkout_components/CheckOut'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/menu" element={<Menu/>} ></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/menu/:id" element={<SingleProduct/>}></Route>
            <Route path="/find" element={<FindKFC/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/api/Auth/login" element={<Login />}></Route>
            <Route path="/api/Auth/signup" element={<SignUp />}></Route>
            <Route path="/careers" element={<Careers/>}></Route>
            <Route path="/checkout" element={<CheckOut/>}></Route>
            {/* PAGE NOT FOUND */}
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes