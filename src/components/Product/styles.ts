import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { transparentize } from "polished";

interface Props {
  scale: number;
  vertical?: boolean;
  added?: boolean;
}

interface ContainerProps extends Props {
  color: string;
  vertical: boolean;
}

export const Container = styled.View<ContainerProps>`
  background: ${(props) => transparentize(0.6, props.color)};
  border-radius: ${(props) => props.scale * 30}px;
  margin: 0 ${(props) => props.scale * (props.vertical ? 10 : 20)}px
    ${(props) => props.scale * (props.vertical ? 10 : 0)}px 0;
  flex: ${(props) => (props.vertical ? 0.5 : "none")};
`;

export const Content = styled.TouchableOpacity<Props>`
  padding: ${(props) =>
      `${props.scale * (props.vertical ? 25 : 40)}px ${
        props.scale * (props.vertical ? 25 : 40)
      }px`}
    0;
  align-items: center;
  justify-content: center;
`;

export const UnderProduct = styled(LinearGradient).attrs({
  colors: ["#fff", "transparent"],
  start: [0, -1],
  end: [0, 1],
})<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: ${(props) => props.scale * -30}px;
  border-top-left-radius: ${(props) => props.scale * 80}px;
  border-top-right-radius: ${(props) => props.scale * 80}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: "contain",
})<Props>`
  height: ${(props) => props.scale * 100}px;
  width: ${(props) => props.scale * 100}px;
`;

export const ProductTitle = styled.Text<Props>`
  font-family: marlinGeoBold;
  font-size: ${(props) => props.scale * 16}px;
  margin-top: ${(props) => props.scale * 5}px;
`;

export const ProductPrice = styled.Text<Props>`
  font-family: marlinGeoBold;
  font-size: ${(props) => props.scale * 23}px;
  margin-bottom: ${(props) => props.scale * 10}px;
`;

export const AddButton = styled.TouchableOpacity<Props>`
  background: ${(props) => (props.added ? "#000" : "transparent")};
  width: 60%;
  border: 1px solid #000;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 20px;
`;

export const AddButtonText = styled.Text<Props>`
  font-family: marlinGeoBold;
  font-size: ${(props) => props.scale * 16}px;
  color: ${(props) => (props.added ? "#fff" : "#000")};
`;

export const StartingFromText = styled.Text<Props>`
  font-family: marlinGeoRegular;
  font-size: ${(props) => props.scale * 14}px;
`;
