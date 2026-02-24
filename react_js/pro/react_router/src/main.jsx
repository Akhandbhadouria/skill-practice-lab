import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/component/home_comp/home.jsx'
import Layout from "./Layout.jsx";
import About from './assets/component/about/about.jsx'
import Contact from './assets/component/contact/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [//children ke andar jo routes hai wo <Outlet /> ke andar render honge (Layout file me Outlet hai na, wahi jaha pages switch hote hain).
      {
        path: "akhand",     //Agar user /akhand URL pe jata hai → Layout load hoga → aur uske andar Outlet me <Home /> render hoga.
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)