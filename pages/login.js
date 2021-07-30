
import React, { useState } from 'react';
import styles from '../styles/Login.module.css'
import axios from 'axios'



const login = () => {
    
    const [usr, setUsr] = useState('')
    const [pwd, setPwd] = useState('')

    function handleSubmit() {
        console.log("Sumbit handle")
    }

    const hello = () => {
        console.log('hello side effect')
    }

    React.useEffect(() => {
        //alert('hello side effect',usr)
        return () => {
            console.log("clean up", usr)
        }
    }, [usr])


    const getFold = () => {

        setTimeout(() => { alert('Hello') }, 5000)


        for (let index = 0; index < 10; index++) {
            console.log(index)

        }
        return "FOLD DONE"
    }
    const foo = async () => {
        console.log('start foo')
        let fold = await getFold();
        console.log('end foo')
        console.log(fold)
    }

    const submitValue = () => {
        const frmdetails = {
            'Username': usr,
            'Password': pwd,
        }
        console.log(frmdetails);
    }

    const getData = () =>{
        axios.get('https://6103b63e79ed6800174825eb.mockapi.io/api/v1/users').then(
            (response)=>{
                console.log(response.data)
            }
        )
    }

    const getData2 = () =>{
        axios.get('http://localhost:3001/api/getadmin').then(
            (response)=>{
                console.log(response.data)
            }
        )
    }

    return (
        <body className={styles.container}>
            <div className={styles.center}>
                <h1> Login </h1>
                <form method="post" onSubmit={submitValue}>
                    <div className={styles.txt_field}>
                        <input type="text" name="username1" onChange={e => setUsr(e.target.value)} required></input>
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password1" onChange={e => setPwd(e.target.value)} required ></input>
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


            <div className={styles.card_2} >
                <h1> TEST  </h1>
                <button onClick={getData2}>Get data from mockup</button>

            </div>            
        </body>
    );
};

export default login;