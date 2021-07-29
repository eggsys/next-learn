import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <body className={styles.container}>
            <div className="center">
                <h1> Login </h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required></input>
                        <label>username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required></input>
                        <label>username</label>
                    </div>
                    <div className="pass">forgot password?</div>
                    <input type="submit" value="login"></input>
                    <div className="signup_link">
                        Not a member
                        <a href="#">Signup</a>
                    </div>
                </form>
            </div>
        </body>
    );
};

export default login;