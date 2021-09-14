import React from "react";
import styled from "styled-components";
import GmailLogo from "../assets/img/gmail.svg";
import MailchimpLogo from "../assets/img/mailchimp.svg";
import ShadowImg from "../assets/img/shadow.svg";
import Avatar from "../components/avatar";
import Card from "../components/card";
import Paragraph from "../components/paragraph";
import SyncContainer from "../components/Sync/sync-container";
import SelectMultipleCheck from "../components/Selection/select-multiple";
import Title from "../components/title";

const View = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: ${({ theme }) => theme.space[3]};
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}px) {
    top: ${({ theme }) => theme.space[9]};
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin: ${({ theme }) => theme.space[6]} 0px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}px) {
    flex-flow: column wrap;
    align-items: center;
    margin: ${({ theme }) => theme.space[5]} 0px;
  }
`;

const Home = () => {
  return (
    <View>
      <Background src={ShadowImg} />
      <Container>
        <Card id="gmail-contacts">
          <Avatar icon={GmailLogo} />
          <Title>Gmail</Title>
          <Paragraph>These Gmail contacts will sync to MailChimp</Paragraph>
          <SelectMultipleCheck id="gmail-contacts-selection" listOptions={["WorkFriends", "Another label", "Family", "Relatives", "Friends"]} />
        </Card>
        <SyncContainer />
        <Card id="mailchimp-contacts">
          <Avatar icon={MailchimpLogo} />
          <Title>Mailchimp</Title>
          <Paragraph>These Mailchimp contacts will sync to Gmail</Paragraph>
          <SelectMultipleCheck id="mailchimp-contacts-selection" listOptions={["WorkFriends", "Family"]} />
        </Card>
      </Container>
    </View>
  );
};
export default Home;
