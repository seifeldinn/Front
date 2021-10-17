import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import login from './login.css'
import loginImage from '../../assets/Group621.svg'
import logo from '../../assets/Register/Logo.svg'
import fbLogo from '../../assets/fbicon.png'
import googleLogo from '../../assets/google.png'


async function loginUser(credentials) {
    
 let koko = await fetch('http://127.0.0.1:5500/api/client/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
    
   return koko
}

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    let token = await loginUser({
        email,
      password
    });
    // setToken(token);

    console.log(token.access_token)

  }

  return(
    
    <div>
      <div>
      <div className="parent-loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <div className="row">
        <div className="col-md-6 c-wrapper">
            <div className='koko' >
               <i className="fas fa-grip-lines title-dec"></i>
                <h5 className="mx-5 title" >  LOGIN </h5>
                <i className="fas fa-grip-lines title-dec"></i>
            </div>

            <div>
                <p className="title-des"> 
                    Welcome back to your creative world, <br/> Print it Cool !
                </p>
            </div>
            <img className='limg' src={loginImage} alt="login"/>
        </div>
        <div className="col-md-6 c-wrapper" >
            <form method="post" className="w-100" action="#">
               <div className="mb-3 d-flex px-4">
                    <label htmlfor="email" className="form-label cust-label active-label mx-2">Email Address</label>
                    <input type="email" className="form-control cust-input mx-5 active-input" id="email" value="Someone@Example.Com" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3 d-flex px-4">
                    <label htmlfor="password" className="form-label cust-label mx-2">Password</label>
                    <input type="password" className="form-control cust-input mx-5 nactive-input" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
               <div className="w-100 fpass">
                <a className="normal anc"  href=""> Forgot Password? </a>
               </div>

            </form>
            <div className="mb-3 d-flex px-4 w-100">
                <label htmlfor="password" className="form-label cust-label mx-2 or Raleway">Login With</label>
                
                <div className='wawa'>
                    <div className="social-img">
                        <img src={fbLogo} alt=""/>
                    </div>
                    <div className="social-img or Raleway">
                        OR
                    </div>
                    <div className="social-img">
                        <img src={googleLogo} alt=""/>
                    </div>
                </div>
             </div>
             <div className="mb-3 d-flex px-4 w-100 dlogin">
                <button className="cust-btn" onClick={handleSubmit}>
                    LOGIN
                </button>
            </div>
            <div className="mb-3 d-flex px-4 w-100 reg">
                <div className='regSpan'>
                    <span className="cust-span">
                        Not A Member Yet ? 
                    </span>
                    <a className="normal ancoo">
                        Register
                    </a>
                </div>
                
            </div>
        </div>

       
    </div>
      </div>
        


    </div>


    
//    
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };


// <div>
// //         <div classNameNameName='logo'>
// //   <img classNameNameName='logoimg' src={logo} />
// //   </div>
// //       <div classNameNameName="card position-absolute top-50 start-50 translate-middle">
// //   <div classNameNameName='koko'>
// //     <div classNameNameName="left-column col-2">
// //       <h3 classNameNameName='login-font'>LOGIN</h3>
// //       <p>Welcome back to your creative world, Print it Cool !</p>
// //       <img classNameNameName='login-img'src={loginImage} />
// //     </div>

// //     <div classNameNameName="vl"></div>

// //     <div classNameNameName="right-column col-3">
// //     <form onSubmit={handleSubmit}>
// //     <div classNameNameName="email">
// //         <label>
// //         Email Address
// //           <input classNameNameName='einput' type="text" onChange={e => setEmail(e.target.value)} />
// //         </label>
// //         </div>

// //       <div classNameNameName="password">
// //         <div classNameNameName='col-2'>
// //           <label>
// //         Password
// //         </label>
// //         </div>
// //         <div classNameNameName='col-10'>

// //         <input type="password" onChange={e => setPassword(e.target.value)} />
// //         </div>
// //         </div>
// //         <div>
// //           <button type="submit">Login</button>
// //         </div>
// //       </form>
// //     </div>
// // </div>      
// //     </div>

// //     </div>