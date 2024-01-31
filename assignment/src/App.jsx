import { useState } from 'react'
import './styles/global.scss'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          {/* <div className="menu-container">
            <Menu />
          </div> */}
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/users",
        //   element: <Users />,
        // },
        // {
        //   path: "/products",
        //   element: <Products />,
        // }
      ]
    },
    // {
    //   path:'/login',
    //   element: <Login/>
    // }
  ]);

  return <RouterProvider router={router} />;
}

export default App
