import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js'
import PageNavBar from './components/common/PageNavBar.js'

const App = () => {

  return (
    <BrowserRouter>
      <PageNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
