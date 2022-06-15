import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home.js'
import PageNavBar from './components/common/PageNavBar.js'
import Footer from './components/common/Footer.js'
import NotFound from './components/common/NotFound.js'
import FootballerShow from './components/FootballerShow/FootballerShow.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import FootballerCreate from './components/User/FootballerCreate.js'

const App = () => {

  // state
  const [footballers, setFootballers] = useState([])

  // fetch data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/footballers/')
      setFootballers(data)
    }
    getData()
  }, [])
  console.log(footballers)

  return (
    <main className='background-main'>
      <section className='background-contents'>
        <BrowserRouter>
          <PageNavBar />
          <Routes>
            <Route path="/" element={<Home footballers={footballers} />} />
            <Route path='/footballer/:id' element={<FootballerShow footballers={footballers} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/footballer/create' element={<FootballerCreate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </section>
    </main>
  )
}

export default App