import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'

// const router=createBrowserRouter([
//     {
//       path : '/',
//       element : <Layout />,
//       children : [
//         {
//           path : "",
//           element : <Home/>
//         },
//         {
//           path : "about",
//           element : <Aboutus/>
//         },
//         {
//           path : "contact",
//           element : <Contact/>
//         }
//       ]
//     }
// ])

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<Aboutus/>} />
        <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
