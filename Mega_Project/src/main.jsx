import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './store/store.js'
import { Provider } from 'react-redux'
import {Protected , Login} from './components/index.js'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import addPost from './pages/addPost.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'

const router =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {path:'/' ,
        element:<Home />,
      },
      {
        path:'/login',
        element:(
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
          <Signup />
          </Protected>
        )
      },
      {
          path:'/add-post',
          element:(
            <Protected authentication={true}>
            <addPost />
            </Protected>
          )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <Protected authentication={true}>
          <EditPost/>
          </Protected>
        )
      },
      {
        path:'/post/:slug',
        element:<Post />
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <Provider store ={ store}>
   <RouterProvider router ={router}/>
   </Provider>
  </StrictMode>,
)
