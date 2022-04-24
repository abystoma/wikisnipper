import styled, { keyframes } from "styled-components";
import { FaWikipediaW } from "react-icons/fa";

const slideIn = keyframes`
  0% { transform: translateY(5%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const Card = styled.article`
  padding: 15px 15px;
  width: 400px;
  animation: ${slideIn} 0.6s forwards;
`;

export const CardHeader = styled.div`
  padding: 15px;
  text-align: center;
  letter-spacing: 1.2px;
  background-color: var(--color-white);
  border-left: solid 5px var(--color-purple);
  border-right: solid 5px var(--color-teal);
  border-top-left-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div`
  letter-spacing: 1px;
  background-color: var(--color-white);
  padding: 10px 15px 20px 15px;
  border-left: solid 5px var(--color-gray-light);
  border-right: solid 5px var(--color-orange);
  border-bottom-right-radius: 25px;
`;

export const EntryTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 1.2;
  margin-left: 10px;
  margin-top: 2px;
  font-weight: 400;
`;

export const EntryTitleLink = styled.a`
  text-decoration: none;
  color: var(--color-link);

  @media (hover: hover) {
    &:hover {
      color: var(--color-link-hover);
      text-decoration: underline;
    }
  }
`;

export const EntryText = styled.p`
  & > span {
    padding: 5px;
    background-color: var(--color-text-highlight);
  }
`;

export const CardHeaderWikiIcon = styled(FaWikipediaW)`
  color: var(--color-gray-medium);
  font-size: 34px;
  align-self: baseline;
`;



