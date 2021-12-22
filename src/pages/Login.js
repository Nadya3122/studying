import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
    }

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;