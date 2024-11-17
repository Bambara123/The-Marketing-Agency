import SwiperObj from "../../components/SwiperObj/SwiperObj";
import "./Culture.css";
import colors from "../../config/colors";
import { Divider } from "@chakra-ui/react";
import Members from "../../components/Members/Members";
import TeamWriteup from "../../components/TeamWriteup/TeamWriteup";
import Footer from "../../components/Footer/Footer";

export default function Culture() {
  return (
    <div className="culture-continer" style={{ backgroundColor: colors.black }}>
      <div className="header-swiper">
        <SwiperObj></SwiperObj>
      </div>

      <div className="culture-main">
        <Members></Members>
        <Divider></Divider>
        <TeamWriteup></TeamWriteup>
      </div>

      <Footer></Footer>
    </div>
  );
}
