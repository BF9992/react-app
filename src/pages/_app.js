import "@/styles/globals.css";
import Layout from '../layout';


import Navbar from '../pages/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;