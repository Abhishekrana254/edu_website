import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './compare.css';
import axios from 'axios';

function Compare(props) {

  const location = useLocation();

  // if (location.state) {
    console.log('location.state', location, props);
  // }
  const courseList = location.state?.courseList || [];


  const [courses, setCourses] = useState(Array(4).fill(null)); // Array to store courses for comparison
  // const [courses, setCourses] = useState(courseList);
  const [selectedCourse, setSelectedCourse] = useState(null); // Currently selected course
  const [searchResults, setSearchResults] = useState([]); // Search results for courses
  const [showPopup, setShowPopup] = useState(false); // Flag to control popup visibility


  useEffect(() => {
    console.log('location.state in Compare:', location.state);
    setCourses(location.state.courseList);
  }, [location.state]);


  // Function to handle adding a course to the comparison list
  const addCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = selectedCourse;
    setCourses(updatedCourses);
    setShowPopup(false);
  };

  // Function to handle removing a course from the comparison list
  const removeCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = null;
    setCourses(updatedCourses);
  };

  // const BASE_URL = "http://127.0.0.1:8000/"
  const BASE_URL = "https://eduwebsiteapi-2a7413d5add2.herokuapp.com/"
  // Function to handle searching for courses
  const searchCourses = (query) => {
    // Implement course search logic here
    // get couses from ajax request
    console.log('in search course', { "query": query} );
    axios.post(BASE_URL + 'main/search_courses/', { "query": query} )
      .then(response => {
        // const formattedData = response.data.map(post => ({
        //   id: post.id,
        //   userId: post.userId,
        //   title: post.title,
        //   body: post.body,
        // }));
        // setPosts(formattedData);
        console.log('response here ', response);
        // setCourses(updatedCourses);

        setSearchResults(response.data.data_list);
      })
      .catch(error => {
        console.error(error);
        // Perform custom error handling, show error message, etc.
      });

    // const results = [
    //   { id: 1, title: 'Python Programming', provider: 'Coursera', duration: 6, price: 49.99, rating: 4.5 },
    //   { id: 2, title: 'Machine Learning', provider: 'edX', duration: 8, price: 79.99, rating: 4.2 },
    //   { id: 3, title: 'Web Development Bootcamp', provider: 'Udemy', duration: 10, price: 29.99, rating: 4.7 }
    // ];
    // setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Online Course Comparison</h1>
      <div className="course-table">
        <table>
          <thead>
            <tr>
              <th>Course 1</th>
              <th>Course 2</th>
              <th>Course 3</th>
              <th>Course 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {courses.map((course, index) => (
                <td key={index}>
                  {course ? (
                    <div>
                      <h2>{course.title}</h2>
                      <p>Provider: {course.provider}</p>
                      <p>Duration: {course.duration} weeks</p>
                      <p>Price: ${course.price}</p>
                      <p>Rating: {course.rating}</p>
                      <button onClick={() => removeCourse(index)}>Remove</button>
                    </div>
                  ) : (
                    <button onClick={() => setShowPopup(true)}>Add Course</button>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup">
          <input type="text" placeholder="Search for a course..." onChange={(e) => searchCourses(e.target.value)} />
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} onClick={() => setSelectedCourse(result)}>
                {result.title} - {result.provider}
              </li>
            ))}
          </ul>
          <button onClick={() => addCourse(courses.findIndex(course => course === null))}>Add Selected Course</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Compare;
