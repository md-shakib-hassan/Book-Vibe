import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className='container mx-auto'>
        <Header></Header>
        <Outlet>
         
        </Outlet>
        
        <Footer></Footer>
    </div>
  )
}

export default Home