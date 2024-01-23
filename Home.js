import React, { useEffect, useState } from "react";
import Card from "../components/Card";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function gettingdata() {
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const response = await data.json();
      setData(response);
    }

    gettingdata();
  }, []);
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "0px 20px ",
        backgroundColor: "cream",
      }}
    >
      {data.map((item, id) => {
        return <Card key={id} data={item} />;
      })}
    </section>
  );
};

export default Home;
