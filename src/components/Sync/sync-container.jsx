import React, { useState } from "react";
import SyncButton from "./sync-button";
import styled from "styled-components";
import Title from "../title";

const SyncBox = styled.div`
  margin-top: ${({ theme }) => theme.spaces[7]};

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}px) {
    margin: ${({ theme }) => theme.spaces[4]} 0px;
  }
`;

const SyncContainer = () => {
  const [syncDone, setSyncDone] = useState(false);

  const syncContacts = () => {
    const updated = !syncDone;
    setSyncDone(updated);
  };

  return (
    <SyncBox>
      <SyncButton syncDone={syncDone} onClick={() => syncContacts()} />

      <Title>{!syncDone ? "Sync Contacts" : "All Done!"}</Title>
    </SyncBox>
  );
};

export default SyncContainer;
