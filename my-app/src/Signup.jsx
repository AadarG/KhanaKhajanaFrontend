import React from 'react';
import './style/Signup.css';
import './App.css';
import {Link} from 'react-router-dom';
import food1 from './food1.png';
import food2 from './food2.png';
import food3 from './food3.png';
import logo from './logo-no-background.png';


const Signup = () => {
    return(
        <div className="wrapper">
   <div className="container">
        <div className="top">
            <img src={logo} alt="logo" style={{ width: '450px', height: '60px' }} />
            </div>


        <div className="box body-s">
            <div className="box1 sign-up">
                 <form action="">
                     <div className="row">
                        <i className="fas fa-user"></i>
                         <input type="text" placeholder="first name" />
                     </div>
                     <div className="row">
                        <i className="fas fa-message"></i>
                         <input type="email" placeholder="email" />
                     </div>
                     <div className="row">
                        <i className="fas fa-lock"></i>
                         <input type="password" name="" id="" placeholder="password" />
                     </div>
                     <button className="btn">Create Account</button>
                     <div className="more-info">Already have an account?<Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></div>
                 </form>
            </div>
            
            <div className="box1 content">
                 <div className="first">Create Account</div>
                 <div className="second">What you will get?</div>
                 <div className="reason">
                    <i className="fa-solid fa-star"><span>Manage your recipes the easy way.</span></i>

                    <i className="fa-solid fa-star"><span>Share  and discover new recipes</span></i>

                    <i className="fa-solid fa-star"><span>More than 15,000 recipes from around the world!.</span></i>

                    <i className="fa-solid fa-star"><span>Invite and share your recipes with friends.</span></i>
                 </div>
            </div>
        </div>


     </div>
     <div className="food1 firstf">
        <img src={food1} alt="" />
     </div>
     <div className="food2 secondf">
        <img src={food2} alt="" />
     </div>
     <div className="food3 thirdf">
        <img src={food3} alt="" />
     </div>
</div>

    )
};
export default Signup;