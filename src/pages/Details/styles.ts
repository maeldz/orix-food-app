import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { lighten, transparentize } from "polished";

interface Props {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;
  justify-content: space-between;
`;

export const Product = styled.View<Props>`
  background: ${(props) => transparentize(0.6, props.backgroundColor)};
  border-radius: 20px;
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: marlinGeoBold;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const ProductContent = styled.View`
  align-items: center;
`;

export const UnderProduct = styled(LinearGradient).attrs({
  colors: ["#fff", "transparent"],
  start: [0, -1],
  end: [0, 1],
})`
  position: absolute;
  width: ${200 * 0.92}px;
  height: 100%;
  bottom: -70px;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 200px;
  height: 200px;
`;

export const Price = styled.Text`
  font-family: marlinGeoBold;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Decrease = styled.TouchableOpacity``;

export const Amount = styled.View`
  padding: 10px;
  width: 50px;
  background: #000;
  border-radius: 6px;
  align-items: center;
  margin: 0 5px;
`;

export const AmountText = styled.Text`
  font-family: marlinGeoBold;
  color: #fff;
  font-size: 20px;
`;

export const Increase = styled.TouchableOpacity``;

export const Description = styled.Text`
  font-family: marlinGeoRegular;
  line-height: 18px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  flex: 0.5;
  margin-right: 5px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const AddToCartText = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
`;

export const BuyNowButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.secondary};
  border: 1.5px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  flex: 0.5;
  margin-left: 5px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const BuyNowText = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
`;
