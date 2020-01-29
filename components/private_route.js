import ServerCookie from "next-cookies";
import Router from "next/router";
import React, { Component } from "react";
import { COOKIES } from "../services/login_service";
import { AuthToken } from "../services/auth_token";
import { redirectToLogin } from "../services/redirect_service";


export function privateRoute(WrappedComponent) {
  return class extends Component {
    static async getInitialProps(ctx) {
      const token = ServerCookie(ctx)[COOKIES.authToken];
      const auth = new AuthToken(token);
      const initialProps = { auth };
      if (!token || auth.isExpired) {
        redirectToLogin(ctx.res)
      }
      if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps);
      return initialProps;
    }

    get auth() {
      // the server pass to the client serializes the token
      // so we have to reinitialize the authToken class
      //
      // @see https://github.com/zeit/next.js/issues/3536
      return new AuthToken(this.props.auth.token);
    }

    render() {
      return <WrappedComponent auth={this.auth} {...this.props} />;
    }
  };
}
