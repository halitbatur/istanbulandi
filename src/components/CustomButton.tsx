import React from "react";
import { Space } from "./Styles";
import styled from "@emotion/styled";

interface ColorProps {
  backgroundColor: string;
  titleColor: string;
}

const CustomBtn = styled.button<ColorProps>`
  width: 179px;
  height: 46px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 11px;

  a {
    color: ${(props) => props.titleColor};
    font-size: ${Space[20]};
  }
`;

interface CustomButtonProps {
  href: string;
  borderRadius: string;
  backgroundColor: string;
  title: string;
  titleColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  backgroundColor,
  title,
  titleColor,
}) => {
  return (
    <CustomBtn backgroundColor={backgroundColor} titleColor={titleColor}>
      <a href={href}>{title}</a>
    </CustomBtn>
  );
};

export default CustomButton;
