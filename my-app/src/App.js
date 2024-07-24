// import React, { useEffect, useState } from 'react';
import './App.css';
// import logo from './logo-no-background.png'; // Ensure your image is in the correct path.
// import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';// Import the Login component
import Signup from './Signup';
import Landing from './Landing'; 
import NavBar from './component/common/NavBar';
//import Home from './pages/HomePage';
import Recipes from './pages/Recipes';
import RecipeDetails from './component/RecipeDetails';
//import services from './component/services/api'; 


const App = () => {
  // const [message, setMessage] = useState('');
  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/hello')
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);
  return (
    <Router>
   
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
       </Routes>
      </Router>
  );
};
export default App;
