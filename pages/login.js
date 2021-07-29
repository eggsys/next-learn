import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <body className={styles.container}>
            <div className={styles.center}>
                <h1> Login </h1>
                <form method="post">
                    <div className={styles.txt_field}>
                        <input type="text" required></input>
                            <span></span>
                        <label>username</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" required></input>
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
        </body>
    );
};

export default login;