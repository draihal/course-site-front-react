import React, { useState } from "react";
import { login } from "../services/login_service";
import Layout from '../components/Layout';
import Link from 'next/link';


function Login() {
  const initialValues = { email: "", password: "", };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(inputs);
    if (res) setError(res);
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return <Layout>
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Вход</h1>
      {error ? <p className="text-center">{error}</p> : null}
      <label htmlFor="inputEmail" className="sr-only">Email</label>
      <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email" onChange={handleInputChange} defaultValue={inputs.email} required autoFocus />
      <label htmlFor="inputPassword" className="sr-only">Пароль</label>
      <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Пароль" onChange={handleInputChange} defaultValue={inputs.password} required />
      <button className="btn btn-lg btn-secondary btn-block" type="submit">Войти</button>
      <p className="mt-5 mb-3 text-muted text-center">Еще не зарегистрированы?</p>
      <Link href="/registration"><button className="btn btn-lg btn-secondary btn-block" type="registration">Регистрация</button></Link>
    </form>
    <style global jsx>{`
      .main{
        padding-top: 12rem;
      }
      html {
        min-height: 100%;
        position: relative;
      }
      body {
        /* Margin bottom by footer height */
        margin-bottom: 60px;
      }
      #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 80px;
        background-color: #f5f5f5;
      }
      .form-signin {
        width: 100%;
        max-width: 350px;
        padding: 15px;
        margin: auto;
      }
      .form-signin .checkbox {
        font-weight: 400;
      }
      .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
      }
      .form-signin .form-control:focus {
        z-index: 2;
      }
      .form-signin input{
        border-radius: 0;
      }
      .form-signin input[type="email"] {
        margin-bottom: -1px;
      }
      .form-signin input[type="password"] {
        margin-bottom: 10px;
      }
      .form-signin .btn-secondary {
        padding: .6rem 1.2rem;
        margin: 0;
      }
    `}</style>
  </Layout>;
}

export default Login;