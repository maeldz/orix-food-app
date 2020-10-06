import {
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeContext } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

import loginBackground from "../../assets/images/loginBackground.png";

import Overlay from "../../components/Overlay";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/Input";

import { useAuth } from "../../contexts/auth";

import {
  Container,
  Content,
  AppLogo,
  AppTitle,
  AppSubtitle,
  AppSlogan,
  Middle,
  Welcome,
  WelcomeTitle,
  WelcomeSubtitle,
  SocialLogin,
  FacebookLogin,
  GoogleLogin,
  Or,
  Line,
  LoginForm,
  RememberMeRow,
  RememberMe,
  Switch,
  RememberMeText,
  ForgotPassword,
  ForgotPasswordText,
  Bottom,
  LoginButton,
  LoginButtonText,
  RightArrow,
  Dots,
  TopDot,
  MiddleDot,
  BottomDot,
  SignUp,
  SignUpMessage,
  SignUpButton,
  SignUpText,
} from "./styles";

const Login: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const contentContainerRef = useRef<ScrollView>(null);

  const { signIn } = useAuth();

  function handleLogin() {
    signIn(email, password);
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setKeyboardOpen(true));

    Keyboard.addListener("keyboardDidHide", () => setKeyboardOpen(false));

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", () => setKeyboardOpen(true));
      Keyboard.removeListener("keyboardDidHide", () => setKeyboardOpen(false));
    };
  }, []);

  return (
    <Wrapper header={false}>
      <Container source={loginBackground}>
        <Overlay color={colors.overlay} opacity={0.92} gradient />
        <Content
          keyboardOpen={keyboardOpen}
          ref={contentContainerRef}
          onContentSizeChange={() => contentContainerRef.current?.scrollToEnd()}
        >
          <AppLogo>
            <AppTitle>ORIX</AppTitle>
            <AppSubtitle>Food Land</AppSubtitle>
            <AppSlogan>Hungry? Order & Eat</AppSlogan>
          </AppLogo>
          <Middle>
            <Welcome>
              <WelcomeTitle>Welcome Back</WelcomeTitle>
              <WelcomeSubtitle>
                Enter your credentials to continue
              </WelcomeSubtitle>
            </Welcome>
            <SocialLogin>
              <FacebookLogin>
                <FontAwesome5
                  name="facebook-f"
                  size={20}
                  color={colors.secondary}
                />
              </FacebookLogin>
              <GoogleLogin>
                <FontAwesome5
                  name="google"
                  size={20}
                  color={colors.secondary}
                />
              </GoogleLogin>
              <Or>OR</Or>
              <Line />
            </SocialLogin>
            <LoginForm>
              <Input
                icon="email-outline"
                label="Email"
                placeholder="Your e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Input
                icon="lock-outline"
                label="Password"
                placeholder="Your password"
                secureTextEntry={true}
                ref={passwordRef}
                onSubmitEditing={() => handleLogin()}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </LoginForm>
            <RememberMeRow>
              <RememberMe>
                <Switch isOn={active} onToggle={() => setActive(!active)} />
                <RememberMeText>Remember me</RememberMeText>
              </RememberMe>
              <ForgotPassword>
                <ForgotPasswordText>Forgot password</ForgotPasswordText>
              </ForgotPassword>
            </RememberMeRow>
          </Middle>
          <Bottom>
            <LoginButton onPress={() => handleLogin()}>
              <LoginButtonText>Login</LoginButtonText>
              <RightArrow>
                <Dots>
                  <TopDot />
                  <MiddleDot />
                  <BottomDot />
                </Dots>
              </RightArrow>
            </LoginButton>
            <SignUp>
              <SignUpMessage>Don't Have An Account?</SignUpMessage>
              <SignUpButton>
                <SignUpText>SignUp</SignUpText>
              </SignUpButton>
            </SignUp>
          </Bottom>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Login;
