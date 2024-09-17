import { Wrap } from "@chakra-ui/react";

import WriteUpCard from "../WriteUpCard/WriteUpCard";
import { portfolioWritups } from "../../mockData/portfolioWriteups";

export default function PortfolioWriteups() {
  return (
    <div className="portfolio-writeups">
      <Wrap spacingY={20} pt={200} align="center" justify="center">
        {portfolioWritups.map((writeup, index) => (
          <WriteUpCard
            key={index}
            companyName={writeup.companyName}
            location={writeup.location}
            date={writeup.timePeriod}
            description={writeup.description}
            services={writeup.services.join(" | ")}
            logo={writeup.logo}
          />
        ))}
      </Wrap>
    </div>
  );
}
