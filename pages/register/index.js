// import "../styles/Home.module.scss";
import Content from "../../components/register/index";

export default function Index() {
  return <Content />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
