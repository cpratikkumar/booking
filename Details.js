import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import HashLoader from "react-spinners/HashLoader";
import Booking from "../pages/Booking.js";
const Details = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [showpop, setShowpop] = useState(false);
  useEffect(() => {
    const api = async () => {
      const getsingleData = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const response = await getsingleData.json();
      setLoader(false);
      setSingleData(response);
    };
    api();
  }, [id]);
  const clickHandler = () => {
    setShowpop(true);
  };
  return (
    <>
      {!singleData ? null : (
        <section className="outerbody">
          {showpop ? (
            <Booking data={singleData} setShowpop={setShowpop} />
          ) : null}
          {loader ? (
            <HashLoader loading={loader} color="grey" />
          ) : (
            <div className="innerbody">
              <div className="imagesection">
                <img
                  src={
                    singleData.image?.original
                      ? singleData.image?.original
                      : "https://m.media-amazon.com/images/I/413+SVFO39L.png"
                  }
                  alt="img"
                />
              </div>
              <div className="detailssection">
                <h1>{singleData.name}</h1>
                <h3>{singleData.type}</h3>
                <h3>{singleData.language}</h3>
                <h3>
                  {singleData.rating?.average
                    ? singleData.rating?.average
                    : (Math.random() * (10 - 7) + 7).toFixed(1)}
                </h3>
                <p>{singleData.summary?.split("<p>")[1].slice(0, 200)}</p>
                <button onClick={clickHandler}>Book</button>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Details;
