import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[4]};
  width: 283.4px;
  height: min-content;

  background: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => theme.borderWidth[2]} solid ${({ theme }) => theme.color.lightGray};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.color.borderRadius};

  align-items: center;
`;

export default Card;
