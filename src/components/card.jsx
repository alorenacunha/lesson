import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 ${({ theme }) => theme.spaces[4]};
  padding: ${({ theme }) => theme.spaces[5]} ${({ theme }) => theme.spaces[4]};
  width: 283.4px;
  height: min-content;

  background: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => theme.borderWidths[2]} solid ${({ theme }) => theme.color.lightGray};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.color.borderRadius};

  align-items: center;
`;

export default Card;
