import "./login-form.css"
import loginImg from '../images/login.png'
import { Navigate, redirect, useNavigate } from "react-router-dom"



const LoginForm = () => {

    const navigate = useNavigate();

    function handleLogin() {
        console.log('click')
        navigate("/homepage")
    }

    return (
        <div className="login-page">
            <img src={loginImg} width="300" alt='login-page' />
            <div className="container">
                <h1>LOGIN</h1>
                <div className='input-container'>
                    <i class="fa fa-user icon"></i>
                    <input type="text" placeholder="Username" />
                </div>

                <div className='input-container'>
                    <i class="fa fa-key icon"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={handleLogin} className="login-btn" >LOGIN</button>
            </div>
        </div>
       
    )
}

export default LoginForm;