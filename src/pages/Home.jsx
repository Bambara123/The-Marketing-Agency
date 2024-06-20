import React from "react";
import "./Home.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ServiceTypes from "../components/ServiceTypes/ServiceTypes";
import ClientTypes from "../components/ClientTypes/ClientTypes";

export default function Home() {
  return (
    <div className="home">
      <Header></Header>
      <div className="main">
        <section className="service-types">
          <ServiceTypes></ServiceTypes>
        </section>
        <section className="clients">
          <ClientTypes></ClientTypes>
        </section>
        <section className="services-more"></section>
        <section className="testimonnial"></section>
      </div>
      <div className="cont">
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
            <div className="slide">
              <img
                src={process.env.PUBLIC_URL + "/logos/Carlsburg.svg"}
                alt=""
                height="100px"
                width="250px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
