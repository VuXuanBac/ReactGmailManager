import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'

import { Root } from './pages/layout/Root'
import { Me } from './pages/layout/Me'

import { AuthContextProvider } from './contexts/AuthContext'
import { ProtectedLayout } from './pages/layout/ProtectedLayout'

import { NAV } from "./data/pageconfigs"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "me",
            element: <Me />,
            errorElement: <Me />,
            children: NAV.map(item => {
              const Element = item.component
              const isIndex = item.link === ""
              return {
                path: isIndex ? undefined : item.link,
                index: isIndex,
                element: <Element />,
              }
            })
          },
        ]
      },
      {
        path: "*",
        element: <Navigate replace to='/' />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
)