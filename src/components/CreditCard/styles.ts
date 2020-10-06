import styled from "styled-components/native";

interface Props {
  selected: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 15px;
`;

export const LeftSide = styled.View``;

export const Brand = styled.Text`
  font-family: marlinGeoBold;
  text-transform: capitalize;
  margin-bottom: 5px;
  font-size: 17px;
`;

export const CreditCardRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Dots = styled.View`
  align-items: center;
  margin: 0 5px 0 10px;
  flex-direction: row;
`;

export const Dot = styled.View`
  width: 3px;
  height: 3px;
  background: ${(props) => props.theme.colors.secondary};
  margin-right: 5px;
`;

export const LastFourDigits = styled.Text`
  font-family: marlinGeoBold;
  font-size: 16px;
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
