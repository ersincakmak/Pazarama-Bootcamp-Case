import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Application,
  ApplicationCreate,
  ApplicationInquiry,
  ApplicationSuccessfull,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/basvuru-olustur" element={<ApplicationCreate />} />
        <Route path="/basvuru-sorgula" element={<ApplicationInquiry />} />
        <Route path="/basvuru-basarili" element={<ApplicationSuccessfull />} />
        <Route path="/basvuru/:id" element={<Application />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
