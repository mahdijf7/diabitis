import "../styles/Home.module.css";
import Content from "../components/home";

export default function Home() {
  return <Content />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
