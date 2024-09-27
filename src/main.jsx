import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Aboutus from './Components/AboutUs/Aboutus.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Contactus from './Components/Contact/Contactus.jsx'
import BookaTable from './Components/Booktable/BookaTable.jsx'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}></Route>
      <Route path='aboutus' element={<Aboutus/>}></Route>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='contactus' element={<Contactus/>}></Route>
      <Route path='bookatable' element={<BookaTable/>}></Route>
      <Route path='*' element={<Navigate to="/" />}> </Route>

    </Route>
  )
)

const RedirectToHome = () => {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);

  return null; // Nothing is rendered
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <RedirectToHome />
  </StrictMode>,
)
