import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Menu from '../pages/Menu'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<h1>home</h1>}></Route>
            <Route path="/menu" element={<Menu/>} ></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes