import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { verifyUser } from '../../data/users';
import './login.css';

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <Form.Label htmlFor="username" className="form-label">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='Enter your username'
                className="form-control"
                ref={userRef}
            />

            <Form.Label htmlFor="password" className="form-label">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='Enter your password'
                className="form-control"
                ref={passRef}
            />
            <button className='login-button' onClick={() => {
                const user = userRef.current.value.trim();
                const pass = passRef.current.value.trim();
                userRef.current.value = '';
                passRef.current.value = '';
                const userInfo = verifyUser(user, pass);
                if (userInfo === null) {
                    alert('Wrong username or password');
                    userRef.current.focus();
                } else {
                    setToken(userInfo.token);
                    setRole(userInfo.Role);
                }
            }}>Login</button>
        </div>
    );
}

export default Login;

