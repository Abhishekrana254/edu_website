import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchResuls from './searchResults';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <div>
      //   <h1>Hello World</h1>
      //   <Link to="about">About Us</Link>
      // </div>
      <App />
    ),
    children: [
      {
        path: "/searchresults",
        element: <SearchResuls />,
      }
    ]
  },
  {
    // path: "searchresults",
    // element: <SearchResuls />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
