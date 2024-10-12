import { Wrap, WrapItem, Text } from "@chakra-ui/react";
import { teamMembers, sectionHeaders } from "../../mockData/mockdata";
import MemberCard from "../MemberCard/MemberCard";
import "./Members.css";

export default function Members() {
  const memberList = teamMembers;
  const header = sectionHeaders.Members;

  return (
    <div className="members">
      <Text className="zen-antque-regular members-header">{header}</Text>

      <Wrap
        spacingX={10}
        spacingY={10}
        align="center"
        justify="center"
        pt={100}
        pb={190}
      >
        {memberList.map((member, index) => {
          return (
            <WrapItem key={index}>
              <MemberCard
                imageUrl={member.image}
                name={member.name}
                role={member.role}
                expertise={member.expertise}
              ></MemberCard>
            </WrapItem>
          );
        })}
      </Wrap>
    </div>
  );
}
