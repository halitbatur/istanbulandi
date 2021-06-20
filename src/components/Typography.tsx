import styled from "@emotion/styled";
import { Space } from "./Styles";

export const SectionHeader = styled.header`
  font-size: ${Space[32]};
  color: #00acd8;
`;

export const SubHeader = styled.header`
  font-size: ${Space[24]};
  color: #1f1f1e;
`;

interface ColorProps {
  color: string;
}

export const Paragraph = styled.p<ColorProps>`
  font-size: ${Space[16]};
  color: ${(props) => props.color};
  margin: 0;
`;

export const Link = styled.p<ColorProps>`
  font-size: ${Space[20]};
  cursor: pointer;
  color: ${(props) => props.color};
  margin: 0;
`;
