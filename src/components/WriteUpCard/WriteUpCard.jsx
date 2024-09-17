import { useEffect, useRef, useState } from "react";
import { Card, Image, Stack, Text, CardBody } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./WriteUpCard.css";

export default function WriteUpCard({
  companyName,
  location,
  date,
  description,
  services,
  logo,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top >= 100 && rect.bottom <= windowHeight - 50) {
          cardRef.current.classList.add("scaled");
        } else {
          cardRef.current.classList.remove("scaled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      className="writeup-card"
      ref={cardRef}
      style={{ backgroundColor: colors.card_black, borderRadius: 20 }}
      py={25}
      px={50}
    >
      <Stack align={"left"} flex={2}>
        <Text className="zen-antque-regular text-left-white-header">
          {companyName}
        </Text>
        {/* <Image
            src={process.env.PUBLIC_URL + "/logos/" + logo}
            alt="logo"
            width={140}
          /> */}
        <Text className="text-left-normal" color={colors.dark_gray} pt={5}>
          {location}
        </Text>
      </Stack>

      <Stack flex={5}>
        <CardBody>
          <Text
            size="sm"
            textAlign="left"
            color={colors.white}
            className="red-hat-text-bold text-left-normal"
          >
            {services}
          </Text>

          <Text py="2" className="text-left-normal" color={colors.dark_gray}>
            {date}
          </Text>

          <Text
            py="2"
            className={`red-hat-text text-left-normal`}
            color={colors.dark_gray}
          >
            {description}
          </Text>
          {/* {description.split(" ").length > 50 && (
            <Text
              onClick={toggleReadMore}
              color={colors.blue}
              cursor="pointer"
              className="read-more"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Text>
          )} */}
        </CardBody>
      </Stack>
    </Card>
  );
}
