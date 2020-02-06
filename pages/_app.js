import '../styles/styles.scss'
import '../styles/fixed.scss'
import '../styles/fortawesome.scss'
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../services/initialize';

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }



export default withRedux(initStore, { debug: true })(
    class MyApp extends App {
        static async getInitialProps({ Component, ctx }) {
            initialize(ctx);
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                        : {})
                }
            };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            );
        }
    }
);
