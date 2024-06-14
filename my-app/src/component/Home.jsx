import React from 'react';
//import axios from 'axios';
//import logo from '../logo-no-background.png'; // Ensure your image is in the correct path
import logo1 from '../logo-no-background.png';
import '../App.css'; // Import the CSS file
import {Link} from 'react-router-dom';

//import Login from '../component/Login';
 //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Home = () => {
 // const [message, setMessage] = useState('');

//  useEffect(() => {
  //  axios.get('http://localhost:3000/api/hello')
    //  .then(response => {
     //   setMessage(response.data.message);
     // })
      //.catch(error => {
       // console.error('There was an error fetching the data!', error);
      //});
  //}, []);
return (
 
  
    <div>
      <img src={logo1} alt="/logo-no-background.png" style={{ width: '500px', height: '80px' }} />
      <div className="nav-container">
        <button className="nav-button">Home</button>
        <button className="nav-button"><Link to="/recipes" style={{ textDecoration: 'none', color: 'inherit' }}>Recipes</Link></button>
        <button className="nav-button">Ingredients</button>
        <button className="nav-button">
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
        </button>
      </div>
      <div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>
      <div className="po">
        <h2>About Us</h2>
        <p className="about-us">
          Khana Khajana is a web-based application which helps you to find the perfect recipe you need.
        </p>
        <ul>
          <li className="bullet">Find Recipes which suit your taste</li>
          <li className="bullet">Don't have the required item? No worries, shop for them.</li>
          <li className="bullet">Browse for recipes</li>
          <li className="bullet">Select ingredients to find the best recipes</li>
        </ul>
      </div>
      <div>
       {/* <h1>{message}</h1>*/}
      </div>
    </div>
    
  );
};

export default Home;
