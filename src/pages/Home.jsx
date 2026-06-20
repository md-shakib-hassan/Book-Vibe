import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'

export const AllBooksData = createContext('');

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("/public/booksData.json")
                .then(response => response.json())
                .then(data => setData(data));
  
  }, [])
  

 

  return (
    <div className='container mx-auto'>
        <Header></Header>
        <AllBooksData value={data}>
          <Outlet>
         
        </Outlet>

        </AllBooksData>
        
        
        <Footer></Footer>
    </div>
  )
}

export default Home