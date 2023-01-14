import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';
import SearchResuls from './searchResults';
import { createSearchParams, useNavigate } from "react-router-dom";

// import React, {useState} from 'react'
// const searchBar = () => {}
// const [searchInput, setSearchInput] = useState("");





function App() {
  const navigate = useNavigate();
  const search = () => {
    // ajax request to backend and send in the searchParams 




    navigate('/searchresults');
  }

  return (
    <div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>




    <div className="c"
      style={
          {
          //  border: '2px solid blue',
           margin: '100px 0'
          }
        }
      >

        {/* <input
           type="text"
           placeholder="Search here"
           // onChange={handleChange}
           // value={searchInput}
           /> */}

       {/* <form action="/" method="get"> */}
         <label htmlFor="header-search">
             <span className="visually-hidden">Search Courses</span>
         </label>
         <input
             type="text"
             id="header-search"
             placeholder="Search blog posts"
             name="s1s"
         />
         <button onClick={() => search()}>Search</button>
         {/* <Link to="/searchresults"> Search</Link> */}
         {/* query params here  */}
         {/* after that find a way to call backend and get data for rendering that component */}
         {/* conenct some button with link to basically  */}
       {/* </form> */}

    </div>

    {/* <Routes>
      <switch>
        <Route path="searchresults">
          <SearchResuls />
        </Route>
      </switch>
    </Routes> */}
    
    <Outlet />


    </div>
  );
}

export default App;
