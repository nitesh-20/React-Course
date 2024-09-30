import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" description="Card 2 desc"/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default App