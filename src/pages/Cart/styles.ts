import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
`;

export const Heading = styled.View`
  margin: 0 20px 10px;
`;

export const FirstPart = styled.Text`
  font-family: marlinGeoBold;
  font-size: 28px;
`;

export const SecondPart = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 28px;
`;

export const ProductList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
})`
  background: ${(props) => props.theme.colors.overlay};
`;

export const Product = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  padding: 20px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 80px;
  height: 80px;
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-family: marlinGeoBold;
  font-size: 20px;
`;

export const Price = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 20px;
  margin-top: 10px;
`;

export const Controls = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

export const DecreseButton = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.View`
  background: ${(props) => props.theme.colors.secondary};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const AmountText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-family: marlinGeoBold;
`;

export const IncreseButton = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const DiscountCode = styled.View`
  height: 60px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.overlay};
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 20px 20px 30px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const SubtotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const SubtotalLabel = styled.Text`
  font-family: marlinGeoBold;
  font-size: 20px;
`;

export const SubtotalText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  border-top-width: 0.5px;
  border-color: #000;
  margin: 10px 20px;
`;

export const TotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TotalLabel = styled.Text`
  font-family: marlinGeoBold;
  font-size: 20px;
`;

export const TotalText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 20px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  margin-left: 5px;
  height: 70px;
  width: 50%;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 40px 0 20px;
`;

export const CheckoutButtonText = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
`;
