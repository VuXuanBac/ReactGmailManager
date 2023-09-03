import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'

import { Root } from './pages/layout/Root'
import { ErrorPage } from './pages/layout/ErrorPage'
import { Me } from './pages/layout/Me'

import { Inbox } from './pages/Inbox'
import { Sent } from './pages/Sent'
import { Spam } from './pages/Spam'
import { Trash } from './pages/Trash'
import { Compose } from './pages/Compose'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "me",
        element: <Me />,
        children: [
          {
            index: true,
            element: <Inbox />,
          },
          {
            path: "sent",
            element: <Sent />
          },
          {
            path: "compose",
            element: <Compose />
          },
          {
            path: "spam",
            element: <Spam />
          },
          {
            path: "trash",
            element: <Trash />
          },
          {
            path: "*",
            element: <Navigate replace to='./' />,
          }
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
