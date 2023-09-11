import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Welcome from './pages/welcome'
import Index from './pages'
import MainLayout from './Layout/mainLayout'
import AboutMe from './pages/aboutMe'
import UnderConstruction from './pages/underConstruction'
import Projects from './pages/projects'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/index",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Index />,
       },
    ]
  },
  {
    path: "/aboutme",
    element: <MainLayout/>,
    children: [
      { 
        index: true, 
        element: <AboutMe /> 
      }
    ]
  },
  {
    path: "/notavailabe",
    element: <MainLayout/>,
    children: [
      { 
        index: true, 
        element: <UnderConstruction /> 
      }
    ]
  },
  {
    path: "/projects",
    element: <MainLayout/>,
    children: [
      { 
        index: true, 
        element: <Projects /> 
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router ={router}/>
  </React.StrictMode>,
)
