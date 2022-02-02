import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useStore } from '../redux/store';
import { Provider } from 'react-redux';

// import layout
import Layout from '../layout/index';
//

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);
  return (<Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout></Provider>
  );
}

export default MyApp;
