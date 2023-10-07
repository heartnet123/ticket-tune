import React, { useState } from 'react';
import styles from './styles-signin.module.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const redirectToHome = () => {
        if (email && password) {
            navigate('/home'); // สมมติว่าหน้า home มี path เป็น /home
        } else {
            alert('Please fill in both email and password.');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        redirectToHome();
    };

    return (
        <div className={styles["login-page"]}>
            <header>
            </header>
            <div className={styles.container}>
                <form className={styles["registration-form"]} onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button type="submit" id="signin-button">Sign In</button>
                    
                    <div className={styles["action-links"]}>
                        <a href="/register">Create account</a> {/* สมมติว่าหน้า register มี path เป็น /register */}
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
