import Header from "./Header";
import BlogList, { Data } from "./Blog";
import MainSection, { Services } from "./MainSection";
import { Categories } from "../Apis/MyAPi";
import PartnerSection, { Choice } from "./Patner";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function Home(params) {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
  }, []);
  return (
    <>
      {spinner ? (
        <Loader />
      ) : (
        <>
          <Header />
          <BlogList />
          <Services />
          <Categories />
          <Choice />
          <Data />
          <PartnerSection />
        </>
      )}
    </>
  );
}
export default Home;
