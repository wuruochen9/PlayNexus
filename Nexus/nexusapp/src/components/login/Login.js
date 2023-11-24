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
            const response = await api.post('/api/v1/login', { userName, userPwd });
            debugger
            if("key" in response.data){
              sessionStorage.setItem("userkey", response.data["key"]);
              setUserName('');
              setUserPwd('');
              navigate(`/`);
            }
            else{
              alert(response.data);
            }
            // bmfzkkw
            // UK#f405m#&
          }
          catch(err){
              console.log(err);
              alert('Server Disconnected');
          }
      }
    };

    return (
      <div className="background" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_52683-66117.jpg?w=996&t=st=1700201506~exp=1700202106~hmac=584b782e34941423408c68320c1a6cc5302e221bfaa19892876307aba99a814e")` }}>
          <section className="loginform_4 cf" >
            {/* <img src={require('./3206784.jpg')} alt="logo"></img> */}
            <img src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg?w=740"/>
          
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
                    <img src={require('./login2.png')} alt="logo"></img>
                </button>

            </section>
          </section>
      </div>
    );
};

export default Login;
