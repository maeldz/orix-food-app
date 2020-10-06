import styled from "styled-components/native";

interface Props {
  last: boolean;
}

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px;
  margin-bottom: ${(props) => (props.last ? 0 : 15)}px;
  border-radius: 15px;
`;

export const Info = styled.View``;

export const AddressType = styled.Text`
  font-family: marlinGeoBold;
  margin-bottom: 5px;
  font-size: 17px;
`;

export const AddressData = styled.View``;

export const FirstLine = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 16px;
`;

export const SecondLine = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 16px;
`;

export const SelectButton = styled.View<ButtonProps>`
  background: ${(props) =>
    props.selected
      ? props.theme.colors.secondary
      : props.theme.colors.inactive};
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-radius: 13px;
`;
