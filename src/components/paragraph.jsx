import styled from "styled-components";

const Paragraph = styled.p`
  margin: unset;
  margin-top: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSize[1]};
  line-height: 20px;
  text-align: center;
`;

export default Paragraph;
