import React, { useState } from "react";
import Layout from '../components/Layout';
import Link from 'next/link';
import { catchAxiosError } from "../services/error";
import axios from "axios";
import Router from "next/router";


export async function registration(inputs) {
  const data = JSON.stringify(inputs);
  const res = await axios.post(`${process.env.basePath}/api/v1/users/`, data, {
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json"
    }})
      .catch(catchAxiosError);
  if (res.error) {
    return res.error;
  } else if (res.status !== 201) {
    return "Что-то пошло не так!";
  }
  return "Вы успешно зарегистрировались!";
  // await Router.push("/profile");
}


function Registration() {
  const initialValues = {
    email: "", first_name: "", last_name: "", password: "", phone_number: "",
    is_partner: true, is_student: false, is_teacher: false,
  };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registration(inputs);
    if (res) setError(res);
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: !e.target.defaultChecked,
    });
  };

  return <Layout>
    <form className="form-registration" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Регистрация</h1>
      {error ? <p className="text-center">{error}</p> : null}
      <label htmlFor="inputName" className="sr-only">Имя</label>
      <input type="text"
             id="inputName"
             name="first_name"
             className="form-control"
             placeholder="Имя"
             onChange={handleInputChange}
             defaultValue={inputs.first_name}
             required autoFocus />
      <label htmlFor="inputSurname" className="sr-only">Фамилия</label>
      <input type="text"
             id="inputSurname"
             name="last_name"
             className="form-control"
             placeholder="Фамилия"
             onChange={handleInputChange}
             defaultValue={inputs.last_name} />
      <label htmlFor="inputEmail" className="sr-only">Email</label>
      <input type="email"
             id="inputEmail"
             name="email"
             className="form-control"
             placeholder="Email"
             onChange={handleInputChange}
             defaultValue={inputs.email}
             required />
      <label htmlFor="inputPassword" className="sr-only">Пароль</label>
      <input type="password"
             id="inputPassword"
             name="password"
             className="form-control"
             placeholder="Пароль"
             onChange={handleInputChange}
             defaultValue={inputs.password}
             required />
      <label htmlFor="inputPhone" className="sr-only">Телефонный номер</label>
      <input type="tel"
             id="inputPhone"
             name="phone_number"
             className="form-control"
             placeholder="Телефонный номер"
             onChange={handleInputChange}
             defaultValue={inputs.phone_number}
             required />
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-outline-secondary active">
          <input type="radio" name="is_student" id="option1" autoComplete="off" defaultChecked={true} onChange={handleToggle} /> Студент
        </label>
        <label className="btn btn-outline-secondary">
          <input type="radio" name="is_teacher" id="option2" autoComplete="off" defaultChecked={inputs.is_teacher} onChange={handleToggle} /> Преподаватель
        </label>
        <label className="btn btn-outline-secondary">
          <input type="radio" name="is_partner" id="option3" autoComplete="off" defaultChecked={inputs.is_partner} onChange={handleToggle} /> Партнер
        </label>
      </div>


      <button className="btn btn-lg btn-secondary btn-block" type="submit">Зарегистрироваться</button>
      <p className="mt-5 mb-3 text-muted text-center">Уже зарегистрированы?</p>
      <Link href="/login"><button className="btn btn-lg btn-secondary btn-block" type="login">Войти</button></Link>
    </form>
    <style global jsx>{`
      .main{
        padding-top: 9rem;
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
      .form-registration {
        width: 100%;
        max-width: 350px;
        padding: 15px;
        margin: auto;
      }
      .form-registration .checkbox {
        font-weight: 400;
      }
      .form-registration .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
      }
      .form-registration .form-control:focus {
        z-index: 2;
      }
      .form-registration input{
        border-radius: 0;
      }
      .form-registration input[type="name"] {
        margin-bottom: -1px;
      }
      .form-registration input[type="phone"] {
        margin-bottom: 10px;
      }
      .form-registration button[type="submit"] {
        margin-top: 10px;
      }
      .form-registration .btn-group {
        margin-top: 10px;
      }
      .form-registration .btn-outline-secondary {
        border-radius: 0;
      }
      .form-registration .btn-secondary {
        padding: .6rem 1.2rem;
        margin: 0;
      }
    `}</style>
  </Layout>;
}

export default Registration;