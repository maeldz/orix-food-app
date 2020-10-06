import React, { useContext } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { useCart } from "../../contexts/cart";

import {
  Container,
  PageNavigation,
  ShowMenu,
  PageTitle,
  Cart,
  Badge,
  CartAmount,
} from "./styles";

interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const { toggleDrawer, goBack, navigate } = useNavigation<
    DrawerNavigationProp<any>
  >();

  const { name } = useRoute();
  const { items } = useCart();

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <PageNavigation>
        <ShowMenu>
          {isHome ? (
            <Feather
              name="menu"
              size={24}
              color={colors.secondary}
              onPress={() => toggleDrawer()}
            />
          ) : (
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.secondary}
              onPress={() => goBack()}
            />
          )}
        </ShowMenu>
        <PageTitle>{name}</PageTitle>
      </PageNavigation>
      {name !== "Cart" && (
        <Cart onPress={() => navigate("Cart")}>
          <Feather
            name="shopping-bag"
            size={28}
            color={colors.secondary}
            onPress={() => navigate("Cart")}
          />
          <Badge>
            <CartAmount>{items.length}</CartAmount>
          </Badge>
        </Cart>
      )}
    </Container>
  );
};

export default Header;
