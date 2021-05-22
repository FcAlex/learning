import React from 'react'
import Footer from '../common/template/Footer'
import Header from '../common/template/Header/'
import Sidebar from '../common/template/Menu/Sidebar'
import Routes from './routes'

import './main.css'

const App = (_) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <section className="mainSection">
        <Routes />
      </section>
      <Footer />
    </div>
  )
}

export default App