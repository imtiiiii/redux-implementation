import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../app/store";
import "../public/assets/css/main.css";
import '../public/assets/css/bootstrap.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/common.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
