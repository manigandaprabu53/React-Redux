import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './Utils/AppRoutes';


function App() {
  const routerd = new createBrowserRouter(AppRoutes);
  return (
    <>
      <RouterProvider router = {routerd}/>
    </>
  )
}

export default App
