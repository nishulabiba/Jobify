import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Blog from './components/Blog/Blog';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PieChart from './components/Statistics/Statistics';
import PolarAreaChart from './components/Statistics/Statistics';
import categoryLoader from './Loaders/categoryLoader';
import ViewDetails from './components/ViewDetails/ViewDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('./featured.json'),
      },
      {
        path: "/job/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ()=>
          fetch('./featured.json')
        
          
      },
      {
        path: "statistics",
        element: <PolarAreaChart></PolarAreaChart>
      },
      {
        path: "applied",
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
