import React from "react";
import { AuthProps, privateRoute } from "../components/private_route";
import Cookie from "js-cookie";
import Router from "next/router";
import { COOKIES } from "../services/login_service";
import Layout from '../components/Layout';
import { get } from "../services/rest_service";
import { AuthToken } from "../services/auth_token";
import { connect } from 'react-redux';
// import initialize from '../services/initialize';
import actions from '../redux/actions';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // static async getInitialProps(ctx) {
    //     initialize(ctx);
    // }

    async componentDidMount() {
        await this.props.getUser(
            { token: this.props.authentication.token },
            'profile'
        );
    }
    render() {
        console.log(this.props.authentication.user);
        return this.props.authentication.user ? (
            <Layout title="Profile">
                <h3>You are logged in as {this.props.authentication.user}</h3>
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
            </Layout>
        ) : (
            <Layout title="users">
                <h3>You are not authenticated.</h3>
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
            </Layout>
        );
    }
}


export default connect(state => state, actions)(Users);

// function Profile(props) {
//   const logout = async () => {
//     Cookie.remove(COOKIES.authToken);
//     await Router.push("/login");
//   };
//
//   return <Layout>
//     <p>{props.message}</p>
//     {props.auth.isAuthenticated ? "YES" : "NO"}
//     <button onClick={logout}>Logout</button>
//     <style global jsx>{`
//         body,html{
//             height:100%;
//         }
//         .main{
//             height:auto;
//             min-height:100%;
//             padding-top: 6rem;
//         }
//     `}</style>
//   </Layout>
// }

// Profile.getInitialProps = async ({ auth }) => {
//   const res = await get("/api/v1/users/me/", {
//     headers: {
//       Authorization: auth.authorizationString
//     }
//   });
//
//   let message = "";
//
//   if (res.error) {
//     message = res.error;
//   } else if (res.data && res.data.message) {
//     message = res.data.message
//   }
//
//   return { message, auth, };
// };

// export default privateRoute(Profile);
// export default Profile;