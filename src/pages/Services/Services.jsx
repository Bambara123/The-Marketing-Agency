import ServicesMore from "../../components/ServicesMore/ServicesMore";
import ServiceTypes from "../../components/ServiceTypes/ServiceTypes";
import colors from "../../config/colors";

import "./Services.css";

export default function Services() {
  return (
    <div className="services" style={{ backgroundColor: colors.black }}>
      <section>
        <ServicesMore shouldHaveTop={false}></ServicesMore>
      </section>
      <section className="process"></section>
    </div>
  );
}
