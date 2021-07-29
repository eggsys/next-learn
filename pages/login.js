import React, { useState } from 'react';
import styles from '../styles/Login.module.css'

const login = () => {



    const [state, setstate] = useState({
        email: 'Hamza',
        username : '',
        password: '',
        
    })


    const handlechange = event => {
        setstate ({ [event.target.name]: event.target.value })
        console.log(state)
    }
  
    const handleSubmit = event => {
        event.preventDefault()
        console.log("SUBMIT !")        
        console.log(state)
        console.log("username : ",state.username)
        console.log("password : ",state.password)


        alert("WTF")
    }





    return (
        <body className={styles.container}>
            <div className={styles.center}>
                <h1> Login </h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.txt_field}>
                        <input type="text" name="username" onChange={handlechange} required></input>
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password" onChange={handlechange} required ></input>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className={styles.pass}>forgot password?</div>
                    <input className={styles.submit} type="submit" value="login"></input>
                    <div className={styles.signup_link}>
                        Not a member?
                        <a href="#"> Signup</a>
                    </div>
                </form>
            </div>


            <div>
            <p> TEST </p>
                <button onClick={handleSubmit}>wtf</button>
                
            </div>
        </body>
    );
};

export default login;