import {createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import CheckOut from '../Pages/CheckOut/CheckOut'
import Error from '../Pages/Error'
import Login from '../Pages/Forms/Login'
import Registration from '../Pages/Forms/Registration'
import ResetPassword from '../Pages/Forms/ResetPassword'
import Home from '../Pages/Home/Home'
import Services from '../Pages/Services/ServicePage'
import Orders from '../Pages/Orders/Orders'
import SingleService from '../Pages/ServiceDetails/SingleService'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([

    {
      path:'/',
      errorElement:<Error />,
      element:<Main />,
      loader:()=>fetch('http://localhost:5000/services'),
      children:[
          {
              path:'/',
              element:<Home />
          },
          {
              path:'/home',
              element:<Home />
          },
          {
              path:'/services',
              element:<Services />
          },
          {
            path:'/service-details/:id',
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
            element:<SingleService />
          },
          {
            path:'/checkout/:id',
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
            element:<PrivateRoute><CheckOut /></PrivateRoute>
          },
          {
            path:'/orders',
            element:<PrivateRoute><Orders /></PrivateRoute>
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/resetpassword',
            element:<ResetPassword />
          },
          {
            path:'/registration',
            element:<Registration />
          }
         
              
            
          
      ]

    }

  ])

export default router