import React from "react";
import { useAuth } from "../../contexts/auth";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import {
  Container,
  AppLogo,
  AppTitle,
  AppSubtitle,
  AppSlogan,
  DrawerItem,
  DrawerLabel,
  SignOut,
  SignOutText,
} from "./styles";

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container {...props}>
      <AppLogo>
        <AppTitle>ORIX</AppTitle>
        <AppSubtitle>Food Land</AppSubtitle>
        <AppSlogan>Hungry? Order & Eat</AppSlogan>
      </AppLogo>
      {props.state.routes.map((route, index) => (
        <DrawerItem
          key={route.key}
          onPress={() =>
            props.navigation.navigate(
              route.name,
              route.name === "Cart" ? { isHome: true } : undefined
            )
          }
          isActive={index === props.state.index}
        >
          <DrawerLabel isActive={index === props.state.index}>
            {route.name}
          </DrawerLabel>
        </DrawerItem>
      ))}
      <SignOut onPress={() => handleSignOut()}>
        <SignOutText>Sign Out</SignOutText>
      </SignOut>
    </Container>
  );
};

export default DrawerContent;
