import React from "react";
import SyncContainer from "../components/sync-container";
import Card from "../components/card";
import SelectCheckbox from "../components/select-checkbox";
import Avatar from "../components/avatar";
import GmailLogo from "../assets/img/gmail.svg";
import MailchimpLogo from "../assets/img/mailchimp.svg";
import Paragraph from "../components/paragraph";
import Title from "../components/title";

const Home = () => {
  return (
    <div className="background">
      <Card  id="gmail-contacts">
        <Avatar icon={GmailLogo} />
        <Title>Gmail</Title>
        <Paragraph>These Gmail contacts will sync to MailChimp</Paragraph>
        <SelectCheckbox id="gmail-contacts-selection" listOptions={["WorkFriends", "Another label", "Family"]} />
      </Card>
      <SyncContainer />
      <Card id="mailchimp-contacts">
        <Avatar icon={MailchimpLogo} />
        <Title>Mailchimp</Title>
        <Paragraph>These Mailchimp contacts will sync to Gmail</Paragraph>
        <SelectCheckbox id="mailchimp-contacts-selection" listOptions={["WorkFriends", "Another label", "Family"]} />
      </Card>
    </div>
  );
};
export default Home;
