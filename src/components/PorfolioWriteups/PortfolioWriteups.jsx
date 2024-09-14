import { Wrap } from "@chakra-ui/react";

import WriteUpCard from "../WriteUpCard/WriteUpCard";

export default function PortfolioWriteups() {
  return (
    <div className="portfolio-writeups">
      <Wrap spacingY={70} pt={200} align="center" justify="center">
        <WriteUpCard></WriteUpCard>
        <WriteUpCard></WriteUpCard>
        <WriteUpCard></WriteUpCard>
      </Wrap>
    </div>
  );
}
