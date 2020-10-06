import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Wrapper from "../../components/Wrapper";
import Overlay from "../../components/Overlay";

import logo from "../../assets/images/logo.png";

import {
  Container,
  AppLogo,
  AppTitle,
  AppSubtitle,
  AppSlogan,
  LogoImage,
  GetStartedButton,
  GetStartedText,
  RightArrow,
  Dots,
  TopDot,
  MiddleDot,
  BottomDot,
} from "./styles";

const Welcome: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <Wrapper header={false}>
      {/* @ts-ignore */}
      <Container>
        <Overlay color={colors.overlay} opacity={0.9} />
        <AppLogo>
          <AppTitle>ORIX</AppTitle>
          <AppSubtitle>Food Land</AppSubtitle>
          <AppSlogan>Hungry? Order & Eat</AppSlogan>
        </AppLogo>
        <LogoImage source={logo} />
        <GetStartedButton onPress={() => navigation.navigate("Login")}>
          <GetStartedText>Get Started</GetStartedText>
          <RightArrow>
            <Dots>
              <TopDot />
              <MiddleDot />
              <BottomDot />
            </Dots>
          </RightArrow>
        </GetStartedButton>
      </Container>
    </Wrapper>
  );
};

export default Welcome;
