import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import "./Wrapper.scss"

const Wrapper = () => {
  return (
    <>
    <div className="wrapper">
    <header>
      <Header/>
    </header>
    <footer>
      <Footer/>
    </footer>
    </div>
    
    </>
  )
}

export default Wrapper