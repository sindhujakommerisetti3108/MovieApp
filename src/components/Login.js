import React from 'react';
import { useState,useEffect } from 'react';
import { auth } from '../firebase';
import { useHistory } from "react-router-dom"
import {userLogin} from '../Redux/action'
import {useDispatch} from 'react-redux';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    let dispatch = useDispatch();
    useEffect(() => {
        sessionStorage.clear();
    }, [])
    const signIn = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                dispatch(userLogin())
                history.push("/home");               
            })
            .catch((error) => alert(error.message));
    };

    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                alert("Your account has been created successfully!!");
                resetForm();
            })
            .catch((error) => alert(error.message));
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
      };

    return (
        <div className="login__container">
            <form>
                <h5>E-mail</h5>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <h5>Password</h5>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    className="login_singInButton"
                    onClick={signIn}
                    type="submit"
                >
                    Sign In
                </button>
                <button
                    className="login_registerButton"
                    onClick={register}
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Login;
