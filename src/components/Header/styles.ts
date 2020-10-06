import styled from "styled-components/native";

export const Container = styled.View`
  background: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const PageNavigation = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ShowMenu = styled.TouchableOpacity``;

export const PageTitle = styled.Text`
  font-family: marlinGeoBold;
  font-size: ${(props) => props.theme.constants.fontSize.pageTitle}px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Cart = styled.TouchableOpacity``;

export const Badge = styled.View`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 5.5px;
  background: #f00;
  align-items: center;
  justify-content: center;
  right: -4px;
  top: -2px;
`;

export const CartAmount = styled.Text`
  font-size: 8px;
  color: #fff;
  font-family: marlinGeoBold;
`;
