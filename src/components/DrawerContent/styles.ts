import styled from "styled-components/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

interface ItemProps {
  isActive: boolean;
}

export const Container = styled(DrawerContentScrollView)`
  padding: 0 10px;
  background: ${(props) => props.theme.colors.primary};
`;

export const AppLogo = styled.View`
  align-items: center;
  margin: 50px 0 30px 0;
`;

export const AppTitle = styled.Text`
  font-family: eurostile;
  font-size: 45px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const AppSubtitle = styled.Text`
  font-family: vennBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const AppSlogan = styled.Text`
  font-size: 12px;
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.subFont};
  margin-top: 5px;
`;

export const DrawerItem = styled.TouchableOpacity<ItemProps>`
  flex-direction: row;
  background: ${(props) =>
    props.isActive ? props.theme.colors.secondary : "transparent"};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const DrawerLabel = styled.Text<ItemProps>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.secondary};
  font-family: marlinGeoBold;
`;

export const SignOut = styled.TouchableOpacity`
  flex-direction: row;
  background: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SignOutText = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  font-family: marlinGeoBold;
`;
