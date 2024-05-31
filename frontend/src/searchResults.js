// import './App.css';

// import React, {useState} from 'react'
// const searchBar = () => {}
// const [searchInput, setSearchInput] = useState("");


// function SearchResuls() {
//   return (
//     <div>
//         These are Search results 
//     </div>
//   );
// }

// export default SearchResuls;



import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  // const searchResultsList = location.state?.searchResultsList || [];
  const [searchResultsList, setSearchResultsList] = useState([]);
  console.log('searchResultsList', searchResultsList);

  useEffect(() => {
    console.log('location.state in searchResults:', location.state);
    setSearchResultsList(location.state?.searchResultsList);
  }, [location.state]);


  return (
    <div>
      <h2>Search Results</h2>
      {searchResultsList.map((result, index) => (
        <div key={index}>
          {/* Display search result */}
          <p>{result.title}</p>
          <p>{result.description}</p>
          {/* Compare button that navigates to Compare component */}
          {/* <Link to={{
            pathname: "/compare",
            state: { courseList: searchResultsList } // Pass search results as state
          }}
          onClick={() => console.log('searchResultsList:', searchResultsList, 'location.state:', location.state, 'result', result)}
          > */}
            <button
              onClick={() => navigate('/compare', { state: { courseList: [result,null,null,null] } })}
            >Compare</button>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
