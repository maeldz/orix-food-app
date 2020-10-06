import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export const Container = styled(LinearGradient).attrs({
  colors: ["#007bdc", "#fff"],
  end: [0, 1.3],
})`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const AppLogo = styled.View`
  align-items: center;
  margin-top: 50px;
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

export const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 250px;
  height: 250px;
`;

export const GetStartedButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 40px;
  width: ${width * 0.5}px;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px 8px 8px 15px;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const GetStartedText = styled.Text`
  margin-right: 15px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: marlinGeoBold;
`;

export const RightArrow = styled.View`
  padding: 20px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.secondary};
`;

export const Dots = styled.View`
  justify-content: center;
`;

export const TopDot = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 5px;
  height: 5px;
  margin-bottom: 1px;
  border-radius: 2.5px;
`;

export const MiddleDot = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-left: 8px;
  margin-bottom: 1px;
`;

export const BottomDot = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-bottom: 1px;
`;
