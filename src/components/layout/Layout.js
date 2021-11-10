import React from 'react'
import { Header, Footer, Content } from './index'
// import { Content } from './Content'
// import { Footer } from './Footer'

const Layout = () => {

    return (
      <>
        <Header/>
          <main className="c-main">
            <Content/>
          </main>
        <Footer/>
      </>
    )
  }
  
  export default Layout
  