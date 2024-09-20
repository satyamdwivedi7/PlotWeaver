import React, { useState } from 'react';  
import Login from '../src/components/Login';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-[100vh] w-[100vw] bg-[#121212]'>
      <Header/>
      <div className="bg-[url('/bg-dark.png')] bg-cover bg-no-repeat bg-center h-screen flex flex-col justify-between pt-16">
        <Login/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App;
