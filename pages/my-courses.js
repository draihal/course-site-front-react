import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';
import Link from 'next/link';


const MyCourses = ({ user, token, error }) => (
  <Layout title="Мои курсы">
    {(user && (
      <div>
        {error ? <p className="text-center">{error}</p> : null}
        <div className="group py-4">
          <div className="container">
            <h2>Мои курсы</h2>
            <hr/>
        <div className="row">
          {user.student_profile.involved.map(group => (
            <div className="col-sm-4" key={group.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{group.name}</h5>
                  <p className="card-text">Some text.</p>
                  <Link href={`/group?name=${group.slug}`}>
                    <a href="#" className="btn btn-secondary btn-md float-right">Перейти</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        </div>
      </div>
    )) || 'Пожалуйста войдите!'}
    <style global jsx>
      {`
          .main{
            padding-top: 6rem;
          }
          html {
            min-height: 100%;
            position: relative;
          }
          body {
            /* Margin bottom by footer height */
            margin-bottom: 80px;
          }
          #footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            /* Set the fixed height of the footer here */
            height: 80px;
            background-color: #f5f5f5;
          }
      `}
    </style>
  </Layout>
);

MyCourses.getInitialProps = async ctx => {
  const { token } = ctx.store.getState().authentication;
  if (token) {
    const response = await axios.get(`${process.env.basePath}/api/v1/users/`, {
      headers: {
        authorization: `JWT ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const user = response.data.results[0];
    return {
      user, token
    };
  }
};

export default connect(state => state, actions)(MyCourses);
