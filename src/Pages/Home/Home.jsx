import React from 'react'
import './Home.css'
import Navbar from './../../Components/Navbar/Navbar'
import Introduction from './Introduction/Introduction'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Introduction/>
    </div>
  )
}

export default Home