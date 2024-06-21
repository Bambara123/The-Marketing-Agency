import React from "react";
import "./Home.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ServiceTypes from "../components/ServiceTypes/ServiceTypes";
import ClientTypes from "../components/ClientTypes/ClientTypes";
import ServicesMore from "../components/ServicesMore/ServicesMore";
import Testimonial from "../components/Testimonial/Testimonial";
import WorkTogether from "../components/WorkTogether/WorkTogether";

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
        <section className="services-more">
          <ServicesMore></ServicesMore>
        </section>
        <section className="testimonnial">
          <Testimonial></Testimonial>
        </section>

        <section className="work-together">
          <WorkTogether></WorkTogether>
        </section>
      </div>

      <Footer></Footer>
    </div>
  );
}
