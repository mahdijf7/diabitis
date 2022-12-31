import Content from "../components/diabetes";

export default function Index() {
  return <Content />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
