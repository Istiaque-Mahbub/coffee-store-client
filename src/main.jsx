import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import Signin from './component/Signin.jsx';
import SignUp from './component/SignUp.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './component/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://coffee-store-server-silk-seven.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`https://coffee-store-server-silk-seven.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/signin',
    element:<Signin></Signin>

  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffee-store-server-silk-seven.vercel.app/users'),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
