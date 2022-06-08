import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navigation from './routes/navigation/navigation.component'
import PaymentPage from './routes/payment-page/payment-page.component'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<PaymentPage/>}  />
      </Route>
    </Routes>
  )
}

export default App
