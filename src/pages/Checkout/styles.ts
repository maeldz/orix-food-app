import styled from "styled-components/native";

interface Props {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.overlay};
  padding: 0 20px;
`;

export const Heading = styled.Text`
  font-family: marlinGeoBold;
  font-size: 23px;
  margin: 10px 0;
`;

export const CashPayment = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 15px;
`;

export const LeftSide = styled.View``;

export const CashPaymentLabel = styled.Text`
  font-family: marlinGeoBold;
  margin-bottom: 5px;
  font-size: 17px;
`;

export const CashTotalRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CashTotalText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 17px;
  margin-left: 10px;
`;

export const SelectButton = styled.View<Props>`
  background: ${(props) =>
    props.selected
      ? props.theme.colors.secondary
      : props.theme.colors.inactive};
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-radius: 13px;
`;

export const TotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Total = styled.View`
  justify-content: space-between;
  height: 70px;
`;

export const TotalLabel = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 25px;
`;

export const TotalText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 30px;
`;

export const PlaceOrderButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  width: 50%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const PlaceOrderText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-family: marlinGeoBold;
  font-size: 20px;
`;
