// import "../styles/Home.module.scss";
import Content from "../components/news";

export default function Index() {
  return <Content />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
