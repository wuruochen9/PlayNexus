import "./Login.css";
import { useState, useEffect } from 'react'  
import { Link, useNavigate } from "react-router-dom"  
import api from '../../api/axiosConfig'; 

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    
    const tryLogin = async () => {
      if (userName === '') {
        alert('Please enter your username');
      } 
      else if (userPwd === '') {
        alert('Please enter your password');
      } 
      else {
        try{
          await api.post('/api/v1/login', { userName, userPwd });
          setUserName('');    //empty the Name and Description
          setUserPwd('');
        }
        catch(err){
            console.log(err);
        }
        navigate(`/test`);
      }
    };

    return (
      <div className="background">
          <section className="loginform cf">
              <section className="loginform_1 cf">
                <h2 className="title"> U s e r  &nbsp; L O G I N </h2>
              </section>
          
              <section className="loginform_2 cf">
                  <label className="label" htmlFor="username" >Username</label>
                  <input className="input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}  />
                  <label htmlFor="password" className="label">Password</label>
                  <input className="input" type="password" value={userPwd} onChange={(e) => setUserPwd(e.target.value)} />
              </section>
              
              <button type="submit" className="loginform_3 cf" onClick={() => tryLogin()}>
                  <img src={require('./login.png')} alt="logo"></img>
              </button>

          </section>
      </div>
    );
};

export default Login;
