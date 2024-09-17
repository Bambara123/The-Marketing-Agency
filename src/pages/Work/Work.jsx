import React from "react";
import "./Work.css";

import Footer from "../../components/Footer/Footer";
import Testimonial from "../../components/Testimonial/Testimonial";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import PortfolioWriteups from "../../components/PorfolioWriteups/PortfolioWriteups";
import colors from "../../config/colors";
import PortfolioIntro from "../../components/PortfolioIntro/PortfolioIntro";

export default function Work() {
  return (
    <div className="work" style={{ backgroundColor: colors.black }}>
      <section>
        <PortfolioIntro></PortfolioIntro>
      </section>
      <div className="work-main">
        <section className="portfolio-writups-section">
          <PortfolioWriteups></PortfolioWriteups>
        </section>
        <section className="testimonnial">
          <Testimonial></Testimonial>
        </section>
      </div>

      <Footer></Footer>
    </div>
  );
}
