/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home,About,Contact,User, Github, GithubInfo } from './components'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/User/:userid",
        element:<User/>

      },
      {
        loader:GithubInfo,
        path:"/github",
        element:<Github/>
      }
    ]
  }
])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//     <Route  path="/home" element={<Home />} />
//     <Route  path="/about" element={<About />} />
//     <Route  path="/Contact" element={<Contact />} />
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
