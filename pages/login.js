import React, { useState } from "react";
import { login } from "../services/login_service";
import Layout from '../components/Layout';


function Page() {
  // these values are hardcoded since our main.go api only accepts this auth combo
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

    {error ? <p>Error: {error}</p> : null}

    <form className="container mx-auto max-w-sm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="example@dot.com"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder="********"/>
      </div>
      <button type="submit">Login</button>
    </form>
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

export default Page;