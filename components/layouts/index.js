import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import t from "../../public/locales/defualt/common.json"
const Leyouts = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Leyouts;
