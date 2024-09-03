import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="max-w-[100vw] relative min-h-[100vh] bg-white text-base ">
      <BrowserRouter>
      <Navbar/>
      <div className='pt-20'>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
