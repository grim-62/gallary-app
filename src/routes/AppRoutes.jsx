import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import About from '../components/About'
import Search from '../components/search/Search'
import NotFound from '../components/NotFound'
import SingleImg from '../components/SingleImg'
import Contact from '../components/Contact'
import SingleVideo from '../components/SingleVideo'
// import GridBox from '../components/GridBox';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path='media/:id'element={<SingleImg/>}/>
        <Route path='video/video/:id'element={<SingleVideo/>}/>
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search/:query" element={<Search />}>
        <Route path='media/:id'element={<SingleImg/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes