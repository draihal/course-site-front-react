import React from "react";
import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async componentDidMount() {
        await this.props.getUser(
            { token: this.props.authentication.token },
            'profile'
        );
    }
    render() {
        return this.props.authentication.user ? (
            <Layout title="Profile">
                <h3>You are logged in as {this.props.authentication.user}</h3>
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
                `}</style>
            </Layout>
        ) : (
            <Layout title="users">
                <h3>You are not authenticated.</h3>
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
                `}</style>
            </Layout>
        );
    }
}

export default connect(state => state, actions)(Users);
