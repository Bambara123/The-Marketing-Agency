import Process from "../../components/Process/Process";
import ServicesMore from "../../components/ServicesMore/ServicesMore";
import Footer from "../../components/Footer/Footer";
import ServiceTypes from "../../components/ServiceTypes/ServiceTypes";
import colors from "../../config/colors";

import "./Services.css";

export default function Services() {
  return (
    <div className="services" style={{ backgroundColor: colors.black }}>
      <section className="services-more">
        <ServicesMore shouldHaveTop={false}></ServicesMore>
      </section>
      <section className="process">
        <Process></Process>
      </section>

      <Footer></Footer>
    </div>
  );
}
