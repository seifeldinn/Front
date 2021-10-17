import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import validation from './validation'
import login from '../Login/login.css'
import logo from '../../assets/Register/Logo.svg'
import regimg from '../../assets/Register/Layer 2.svg'
import fbLogo from '../../assets/fbicon.png'
import googleLogo from '../../assets/google.png'


async function Register(credentials) {
    
    let request = await fetch('http://127.0.0.1:5500/api/client/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
     
      return request
   }
const Signup = ({submitForm}) => {
    const history = useHistory();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const[dataIsCorrect, setDataIsCorrect] = useState(false)
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.username]:event.target.value,
        })
    }
    const handleFormSubmit = async (event)=>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true)
        let koko = {
            username: values.username,
            email: values.email,
            password: values.password
        }
        let token = await Register(koko)
        console.log(token)
        if(token.access_token){
            return history.push('login') 
        }
    }

    // useEffect(()=> {
    //     if(Object.keys(errors).length === 0 &&dataIsCorrect)
    //     submitForm(true)
    // })
    return (
        <div>
        <div className="parent-loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <div className="koko">
    <div className="row">
        <div className="col-md-6 c-wrapper">
            <div>
               <i className="fas fa-grip-lines title-dec"></i>
                <h5 className="mx-5 title" >  REGISTER </h5>
                <i className="fas fa-grip-lines title-dec"></i>
            </div>

            <div>
                <p className="title-des"> 
                    Register now to enjoy our fully customizable designs <br/> and get them printed on whatever you want
                </p>
            </div>
            <img className='img' src={regimg} alt="REGISTER"/>
        </div>
        <div className="col-md-6 c-wrapper">
            <form method="post" className="w-100" action="#">
               <div className="mb-3 d-flex px-4">
                    <label htmlfor="user_name" className="form-label cust-label active-label mx-2">User Name</label>
                    <input type="user_name" className="form-control cust-input mx-5 active-input" id="email" value={values.username} onChange={handleChange} />
                </div>
                <div className="mb-3 d-flex px-4">
                    <label htmlfor="email" className="form-label cust-label mx-2">Email Address</label>
                    <input type="email" className="form-control cust-input mx-5 nactive-input" id="email"/>
                </div>
                <div className="mb-3 d-flex px-4">
                    <label htmlfor="password" className="form-label cust-label mx-2">Password</label>
                    <input type="password" className="form-control cust-input mx-5 nactive-input" id="password"/>
                </div>
                <div className="mb-3 d-flex px-4">
                    <label htmlfor="cpassword" className="form-label cust-label mx-2">Confirm Pawwsord</label>
                    <input type="cpassword" className="form-control cust-input mx-5 nactive-input" id="cpassword"/>
                </div>
               <div className="w-100 test">
                <a className="normal anc ancoanco" href="/#"> Forgot Password? </a>
               </div>

            </form>
            <div className="mb-3 d-flex px-4 w-100 passlabel">
                <label for="password" className="form-label cust-label mx-2 or Raleway">REGISTER With</label>
                
                <div className='imgimg'>
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
             <div className="mb-3 d-flex px-4 w-100 regbut">
                <button className="cust-btn">
                    REGISTER
                </button>
            </div>
            <div className="mb-3 d-flex px-4 w-100 fsfs">
                <div className='logsug'>
                    <span className="cust-span">
                        Already A Member ?
                    </span>
                    <a className="normal anc ancanc" href="/#">
                        Login
                    </a>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </div>
       
    )
}

export default Signup
{/* 
<div classNameName='container'>
            <div classNameName='app-wrapper'>
                <div>
                    <h2> Register</h2>
                </div>
                <form classNameName=''>
                <div>
                        <label>UserName</label>
                        <input type='text' name='username' value={values.username} onChange={handleChange}/>
                        {errors.username && <p classNameName='error'>{errors.username}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' value={values.email} onChange={handleChange}/>
                        {errors.email && <p classNameName='error'>{errors.email}</p>}

                    </div>
                    <div>
                        <label>Password</label>
                        <input type='text' name='password' value={values.password} onChange={handleChange}/>
                        {errors.password && <p classNameName='error'>{errors.password}</p>}

                    </div>
                    <div>
                        <button classNameName='submit' onClick={handleFormSubmit}>Register</button>
                    </div>

                </form>
            </div>

        </div> */}