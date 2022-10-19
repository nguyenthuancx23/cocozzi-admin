// import '../styles/globals.css'
import App, { AppContext, AppProps } from "next/app"
import { Sidebar } from '../components/sidebar';

function MyApp({ Component, pageProps }: AppProps) {


  return ( <div>
  <Sidebar />
  <Component {...pageProps} />

  </div> )
}

// custom app next
MyApp.getInitialProps = async (appContext : AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log("appProps", appProps);

  return { ...appProps }
}
export default MyApp
