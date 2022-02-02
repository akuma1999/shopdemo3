import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useStore } from '../redux/store';
import { Provider } from 'react-redux';

// import layout
import Layout from '../layout/index';
//

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
