import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import Books from "../../Components/Books/Books";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Banner />
      <section>
        <Books booksData={data}/>
      </section>
    </div>
  );
};

export default Home;
