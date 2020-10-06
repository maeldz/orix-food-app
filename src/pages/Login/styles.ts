import { Dimensions, ScrollViewProps } from "react-native";
import styled from "styled-components/native";
// @ts-ignore
import CustomSwitch from "toggle-switch-react-native";

const { width } = Dimensions.get("window");

interface Props {
  keyboardOpen: boolean;
}

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs((props: Props) => ({
  contentContainerStyle: {
    alignItems: "center",
    flex: props.keyboardOpen ? 0 : 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: "space-around",
  },
}))<Props>``;

export const AppLogo = styled.View`
  align-items: center;
  margin-top: 30px;
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

export const Middle = styled.View`
  margin-top: 50px;
  align-self: stretch;
`;

export const Welcome = styled.View``;

export const WelcomeTitle = styled.Text`
  font-size: 20px;
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const WelcomeSubtitle = styled.Text`
  font-size: 16px;
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.subFont};
`;

export const SocialLogin = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const FacebookLogin = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.subFont};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const GoogleLogin = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.subFont};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Or = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Line = styled.View`
  height: 0.8px;
  margin-left: 10px;
  background: ${(props) => props.theme.colors.subFont};
  flex: 1;
`;

export const LoginForm = styled.View``;

export const RememberMeRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const RememberMe = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Switch = styled(CustomSwitch).attrs((props) => ({
  offColor: props.theme.colors.subFont,
  onColor: props.theme.colors.secondary,
}))``;

export const RememberMeText = styled.Text`
  color: ${(props) => props.theme.colors.subFont};
  margin-left: 10px;
  font-family: marlinGeoBold;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Bottom = styled.View`
  align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 20px 0 10px;
  width: ${width * 0.5}px;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 8px 8px 8px 15px;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const LoginButtonText = styled.Text`
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
  background: #fff;
  width: 5px;
  height: 5px;
  margin-bottom: 1px;
  border-radius: 2.5px;
`;

export const MiddleDot = styled.View`
  background: #fff;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-left: 8px;
  margin-bottom: 1px;
`;

export const BottomDot = styled.View`
  background: #fff;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  margin-bottom: 1px;
`;

export const SignUp = styled.View`
  flex-direction: row;
`;

export const SignUpMessage = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.subFont};
  font-size: 12px;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const SignUpText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;
