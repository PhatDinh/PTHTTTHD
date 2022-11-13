import "./login-form.css"
import loginImg from '../images/login.png'



const LoginForm = () => {
    return (
        <div className="login-page">
            <img src={loginImg} width="300" alt='login-page' />
            <div className="container">
                <h1>LOGIN</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="login-btn" >LOGIN</div>
            </div>
        </div>
       
    )
}

export default LoginForm;