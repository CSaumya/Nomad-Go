import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import PlaceRoutes from './pages/PlaceRoutes'
import NoPage from './pages/NoPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = '/' element = {<Layout />}>
      <Route index element = {<Home />} />
      <Route path ='/about' element = {<About />} />
      <Route path = '/blogs' element = {<Blogs />} />
      <Route path = '/blogs/:id' element = {<BlogDetails />} />
      <Route path = '/places' element = {<PlaceRoutes />} />
      <Route path = '*' element = {<NoPage />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
