import { useState } from 'react';
import React from 'react';
import Header from './components/header';
import MainSection from './components/MainSection';
import ProyectSection from './components/ProyectSection'
import About from './components/About';
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainSection />
      <ProyectSection />
      <About />
      <Footer />
      
    </>
  )
}

export default App
