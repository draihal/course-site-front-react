import React, { useState } from "react";
import Layout from '../components/Layout';


function Login() {
    const LoginInputs = {
        email: "test@example.com",
        password: "test!",
    };

    const [inputs, setInputs] = useState(LoginInputs);

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`TODO add login endpoint! ${JSON.stringify(inputs)}`)
    };

    const handleInputChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    return <Layout >
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       onChange={handleInputChange}
                       value={inputs.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                       id="password"
                       name="password"
                       onChange={handleInputChange}
                       value={inputs.password}
                />
            </div>
            <button type="submit">Login</button>
        </form>
            </div>
        <style global jsx>{`
            body,html{
                height:100%;
            }
            .main{
                height:auto;
                min-height:100%;
                padding-top: 6rem;
            }
        `}</style>
    </Layout>;
}

export default Login;
