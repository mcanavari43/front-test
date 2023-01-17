// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import axios from 'axios'
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';
import UserList from './components/UserList';
import '../src/index.css'

axios.defaults.baseURL = "https://test-fullstack.onrender.com"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound/>, 
  },
  
     {
        path: '/user/details',
        element: <UserDetails />,
        errorElement: <NotFound/>, 
      },
        {
          path: '/user/list',
          element: <UserList/>,
          errorElement: <NotFound/>, 
        }
    

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
