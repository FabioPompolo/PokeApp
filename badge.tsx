import { Text } from "react-native";
import styled from "styled-components/native";

export interface BadgeProps {
  text: string;
  color: string
}
export const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <BadgeStyled color={props.color}>
        <Text>{props.text}</Text>
    </BadgeStyled>
  );
}

interface BadgeStyledProps {
    color: string
  }
const BadgeStyled = styled.View<BadgeStyledProps>`
    background-color: ${(props) => props.color};
    width: 40%;
    align-items: center;
    border-radius: 8px;
`