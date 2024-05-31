import logo from './logo.svg';
// import test from "./test.jpeg";
import './App.css';
import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';
import SearchResuls from './searchResults';
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

// import React, {useState} from 'react'
// const searchBar = () => {}
// const [searchInput, setSearchInput] = useState("");





function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const BASE_URL = "https://eduwebsiteapi-2a7413d5add2.herokuapp.com/"
  const search = () => {
    // ajax request to backend and send in the searchParams 

    axios.post(BASE_URL + 'main/search_courses/', { "query": inputValue} )
      .then(response => {
        // const formattedData = response.data.map(post => ({
        //   id: post.id,
        //   userId: post.userId,
        //   title: post.title,
        //   body: post.body,
        // }));
        // setPosts(formattedData);
        console.log('response', response);
        // setCourses(updatedCourses);
        // results in here 

        // navigate('/searchresults');
        // use this inputValue as query to get results from the ajax request 
        console.log('Input value:', inputValue);

        const results = [{
          id: 1,
          title: "Quantum AI IIT Delhi",
          category: "Data Science and Machine Learning",
          description: "This course is Quantum computing combined with artificial intelligence provided by the leading faculties in the country",
          provider: 'Times Now',
          duration: 7,
          price: 69.99, 
          rating: 4.3
        }, { 
          id: 2,
          title: 'Python Programming', 
          category: "Programming Languages",
          description: "",
          provider: 'Coursera', 
          duration: 6, 
          price: 49.99, 
          rating: 4.5 
        }, { 
          id: 3,
          title: 'Machine Learning',
          category: "Data Science and Machine Learning",
          description: "",
          provider: 'edX', 
          duration: 8, 
          price: 79.99, 
          rating: 4.2 
        }, { 
          id: 4,
          title: 'Web Development Bootcamp', 
          category: "Web Development",
          description: "",
          provider: 'Udemy', 
          duration: 10, 
          price: 29.99, 
          rating: 4.7 }]

        navigate('/searchresults', { state: { searchResultsList: response.data.data_list } });
        // navigate('/searchresults', { state: { searchResultsList: results } });

      })
      .catch(error => {
        console.error(error);
        // Perform custom error handling, show error message, etc.
      });


    
  }

  return (
    <div>

      <div className="App">
        {/* <header className="App-header navbar"> */}
        <header className="navbar">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p className='text-3xl'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {/* logo */}
          <img src={logo} alt='logo' className='App-logo h-6'></img>
          {/* nav links */}
          {/* #181b21 */}
          <div>
            <a href='#Home' className='nav_link'>Home</a>
            <a href='#About' className='nav_link'>About</a>
          </div>
          {/* ext links */}
          <div>
            <a href='#Logout' className='nav_link'>Login</a>
            <a href='#Share' className='nav_link'>Share</a>
          </div>
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
       {/* border-2 border-solid border-red-500 */}
       <div className='relative m-auto  flex flex-col items-center w-1/2'>
         <label htmlFor="header-search">
             <strong><span className="visually-hidden">Search Courses</span></strong>
         </label>
          <br/>
          <div className='rounded-full w-full relative h-12'>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s1s"
                value={inputValue}
                onChange={handleInputChange}
                className='h-12 rounded-full w-full'
            />
            <button onClick={() => search()} 
                className='rounded-full absolute  right-0'>
                  Search</button>
          </div>

       </div>
         
         
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
    
    {/*
     <div class="relative flex items-center h-19 mb-5 pb-5" style={{border:'2px solid red'}}>
      <img src={test} className='w-21 h-20 '/>
      <div className=''>
        <strong>Andrew Alfred</strong> <br/> 
        <span>Technical advisor</span>
      </div>
    </div>
    */}
   

    <Outlet />


    </div>
  );
}

export default App;
