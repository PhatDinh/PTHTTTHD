
import loginImg from '../../../images/login.png'
import { json, Navigate, useNavigate } from "react-router-dom"
import "./login-form.css"
import { useState } from 'react';



const LoginForm = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    function handleLogin() {
        const data = fetch( 'http://localhost:8080/api/login' ,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                'userName' : username,
                'password' : password,
            })
        }
        ).then(res=> {
            if (!res.ok) throw new Error (res.status);
            else return res.json();
        }).then(data => {
            localStorage.setItem('role',data.role);
            navigate("/homepage");
        })
    }

    return (
        <div className="login-page">
            <img src={loginImg} width="300" alt='login-page' />
            <div className="login-container">
                <h1>LOGIN</h1>
                <div className='input-container'>
                    <i className="fa fa-user icon"></i>
                    <input type="text" placeholder="Username" className='input-username' onChange={e=> setUsername(e.target.value)}/>
                </div>

                <div className='input-container'>
                    <i className="fa fa-key icon"></i>
                    <input type="password" placeholder="Password" className='input-password' onChange={e=> setPassword(e.target.value)}/>
                </div>
                <button onClick={handleLogin} className="login-btn" >LOGIN</button>
            </div>
        </div>
       
    )
}

export default LoginForm;