import styled from "@emotion/styled";
import { Space, Colors } from "./Styles";

interface ColorProps {
  color: string;
}

export const SectionHeader = styled.header`
  font-size: ${Space[32]};
  color: ${Colors.mainPrimary};
`;

export const SubHeader = styled.header`
  font-size: ${Space[24]};
  color: ${Colors.neutrals[1000]};
`;

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
