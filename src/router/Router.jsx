import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router' 

import MainLayout from '../pages/MainLayout/MainLayout' 
import Dashboard from '../pages/Dashboard/Dashboard'
import Analysis from '../pages/Analysis/Analysis'
import Portfolio from '../pages/Portfolio/Portfolio'
import Watchlist from '../pages/Watchlist/Watchlist'
import History from '../pages/History/History'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
