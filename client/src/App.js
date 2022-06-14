import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js'
import PageNavBar from './components/common/PageNavBar.js'
import Footer from './components/common/Footer.js'
import NotFound from './components/common/NotFound.js'
import FootballerShow from './components/FootballerShow/FootballerShow.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'

const App = () => {

  return (
    <BrowserRouter>
      <PageNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/footballer/:id' element={<FootballerShow />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login'  element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
