import styled from "styled-components";

const SelectText = styled.div`
  padding-left: ${({ theme }) => theme.spaces[1]};

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 22px;
`;

export default SelectText;
