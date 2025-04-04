import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {AppLayout} from './components/Layout/AppLayout';

import './App.css';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {Country} from './pages/Country';
import {Contact} from './pages/Contact';
import {ErrorPage} from './pages/ErrorPage';
import {CountryDetails} from './components/Layout/CountryDetails'; 

const router = createBrowserRouter(            // object in array 
  [{
    path: "/",
    element : <AppLayout />,
    errorElement : <ErrorPage />,

    children : [           //for key:value use : instead of =
      {
        path: "/",              //home page , always set
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "country/:id",  //dynamic route
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }]
  }

]);
const App = () => {
  return (
    // calling here 
    <RouterProvider router={router}></RouterProvider> 
  )
}

export default App;
