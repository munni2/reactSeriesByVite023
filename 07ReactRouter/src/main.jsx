import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import AboutUs from './components/about/AboutUs.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
