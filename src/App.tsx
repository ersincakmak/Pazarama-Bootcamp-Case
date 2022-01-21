import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  Application,
  ApplicationCreate,
  ApplicationInquiry,
  ApplicationSuccessfull,
} from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/basvuru-olustur" element={<ApplicationCreate />} />
      <Route path="/basvuru-sorgula" element={<ApplicationInquiry />} />
      <Route path="/basvuru-basarili" element={<ApplicationSuccessfull />} />
      <Route path="/basvuru/:id" element={<Application />} />
      <Route path="*" element={<Navigate to="/basvuru-olustur" />} />
    </Routes>
  </BrowserRouter>
)

export default App
