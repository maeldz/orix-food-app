import React, { useContext, useEffect, useMemo } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

import { useCart } from "../../contexts/cart";

import Wrapper from "../../components/Wrapper";

import {
  Container,
  Heading,
  FirstPart,
  SecondPart,
  ProductList,
  Product,
  Left,
  ImageContainer,
  Image,
  Info,
  Title,
  Price,
  Controls,
  DecreseButton,
  Amount,
  IncreseButton,
  AmountText,
  DiscountCode,
  TextInput,
  SubtotalRow,
  SubtotalLabel,
  SubtotalText,
  Separator,
  TotalRow,
  TotalLabel,
  TotalText,
  CheckoutButton,
  CheckoutButtonText,
} from "./styles";

const Cart: React.FC = () => {
  const { params } = useRoute<RouteProp<ParamList, "Cart">>();
  const { navigate } = useNavigation();

  const { colors } = useContext(ThemeContext);

  const { items, updateCart } = useCart();

  function increase(id: number, amount: number) {
    updateCart(id, amount + 1);
  }

  function decrease(id: number, amount: number) {
    updateCart(id, amount - 1);
  }

  useEffect(() => {}, []);

  const itemsWithSubtotal = useMemo(() => {
    return items.map((p) => ({ ...p, subtotal: p.price * p.amount }));
  }, [items]);

  const total = useMemo(() => {
    return itemsWithSubtotal.reduce(
      (total, product) => total + product.subtotal,
      0
    );
  }, [itemsWithSubtotal]);

  return (
    <Wrapper isHome={params?.isHome}>
      <Container>
        <Heading>
          <FirstPart>My</FirstPart>
          <SecondPart>Cart List</SecondPart>
        </Heading>
        <ProductList>
          {itemsWithSubtotal.map((p) => (
            <Product key={p.id}>
              <Left>
                <ImageContainer>
                  <Image source={{ uri: p.image }} />
                </ImageContainer>
                <Info>
                  <Title>{p.title}</Title>
                  <Price>$ {p.subtotal}</Price>
                </Info>
              </Left>
              <Controls>
                <IncreseButton onPress={() => increase(p.id, p.amount)}>
                  <Entypo name="plus" size={20} color={colors.secondary} />
                </IncreseButton>

                <Amount>
                  <AmountText>{p.amount}</AmountText>
                </Amount>

                <DecreseButton onPress={() => decrease(p.id, p.amount)}>
                  <Entypo name="minus" size={20} color={colors.secondary} />
                </DecreseButton>
              </Controls>
            </Product>
          ))}
        </ProductList>
        <DiscountCode>
          <MaterialCommunityIcons
            name="brightness-percent"
            size={20}
            color={colors.secondary}
          />
          <TextInput
            placeholder="Do you have any discount code?"
            placeholderTextColor={colors.secondary}
          />
        </DiscountCode>
        <SubtotalRow>
          <SubtotalLabel>Subtotal</SubtotalLabel>
          <SubtotalText>$ {total}</SubtotalText>
        </SubtotalRow>
        <Separator />
        <TotalRow>
          <TotalLabel>Total</TotalLabel>
          <TotalText>$ {total}</TotalText>
        </TotalRow>
        <CheckoutButton onPress={() => navigate("Checkout", { total })}>
          <CheckoutButtonText>Checkout</CheckoutButtonText>
        </CheckoutButton>
      </Container>
    </Wrapper>
  );
};

export default Cart;
