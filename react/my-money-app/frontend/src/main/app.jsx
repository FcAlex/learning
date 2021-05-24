import React from 'react'
import Footer from '../common/template/Footer'
import Header from '../common/template/Header/'
import Sidebar from '../common/template/Menu/Sidebar'
import Routes from './routes'
import Messages from '../common/msg/Messages'

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
      <Messages />
    </div>
  )
}

export default App