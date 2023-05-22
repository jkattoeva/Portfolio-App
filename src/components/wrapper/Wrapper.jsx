import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import scss from "./Wrapper.module.scss"

const Wrapper = () => {
  return (
    <>
    <div className={scss.wrapper}>
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