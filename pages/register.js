import Content from "../components/register";
import FetchApi from "../services/FetchApi";

const Index = ({ provinceList, citiesList }) => {
  return (
    <>
      <Content  provinceOptions={provinceList} citiesList={citiesList} />
    </>
  );
};

export default Index;
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await FetchApi("", "fa", "info");
  // const posts = await res.json()
  if (res.success) {
    return {
      props: {
        provinceList: res.dataBody.provinceList,
        citiesList: res.dataBody.citiesList,
      },
    };
  }
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      provinceList: [],
      citiesList: [],
    },
  };
}
