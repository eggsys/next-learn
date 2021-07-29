import { type } from 'language-tags';
import React, { useState } from 'react';
import styles from '../styles/Login.module.css'

const login = () => {



    const [usr, setstateUsr] = useState(0)
    const [pwd, setstatePwd] = useState(0)


    const handlechange = event => {
        setstateUsr ({ [event.target.name]: event.target.value })

        console.log(typeof(usr))
        console.log(event.target.name)
        console.log(usr)
    }

    const handlePwd = event => {
        setstatePwd ({ [event.target.name]: event.target.value })
        
        console.log(event.target.name)
        console.log(pwd)
    }
  
    const handleSubmit = event => {
        event.preventDefault()
        console.log("SUBMIT !")        
        console.log(usr)
        console.log(pwd)
        

        alert("WTF")
    }





    return (
        <body className={styles.container}>
            <div className={styles.center}>
                <h1> Login </h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.txt_field}>
                        <input type="text" name="username1" onChange={handlechange} required></input>
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password1" onChange={handlePwd} required ></input>
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