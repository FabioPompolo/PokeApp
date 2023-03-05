import { Image, ImageSourcePropType, Text } from "react-native";
import styled from "styled-components/native";
import { Badge } from "./badge";

export interface PokemonCardProps {
    name: string;
    imageUrl: string;
    types: string[];
    withMarginRight?: boolean;
}

export const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    return <PokemonCardStyled withMarginRight={props.withMarginRight ?? false}>
        <PokemonNameStyled>{props.name}</PokemonNameStyled>
        {props.types.map((type, index) => <Badge key={`${type} ${index}`} text={type} color="#5DAB36" />)}
        <ImageStyled source={{uri: props.imageUrl, height: 80, width: 80,}}/>        
    </PokemonCardStyled>
}

interface PokemonCardStyledProps {
    withMarginRight: boolean;
}
const PokemonCardStyled = styled.View<PokemonCardStyledProps>`
  background-color: #78C850;
  height: 150px;
  flex: 0.5;
  border-radius: 16px;
  padding: 8px;
  ${props => props.withMarginRight && `margin-right: 8px`}
`;

const PokemonNameStyled = styled.Text`
font-size: 20px;
font-weight: bold;
`

const ImageStyled = styled.Image`
    align-self: flex-end;
`;
