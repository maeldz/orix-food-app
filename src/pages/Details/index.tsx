import React, { useMemo } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import Wrapper from "../../components/Wrapper";

import {
  Container,
  Product,
  ProductContent,
  Title,
  UnderProduct,
  Image,
  Price,
  Controls,
  Decrease,
  Amount,
  AmountText,
  Increase,
  Description,
  ButtonRow,
  AddToCartButton,
  AddToCartText,
  BuyNowButton,
  BuyNowText,
} from "./styles";
import { useCart } from "../../contexts/cart";

const Details: React.FC = () => {
  const {
    params: { item },
  } = useRoute<RouteProp<ParamList, "Details">>();

  const { items, addToCart, updateCart } = useCart();

  const amount = useMemo(() => {
    const product = items.find((p) => p.id === item.id);

    if (product) {
      return product.amount;
    }

    return 0;
  }, [items]);

  function increase() {
    if (amount === 0) return addToCart(item);

    updateCart(item.id, amount + 1);
  }

  function decrease() {
    updateCart(item.id, amount - 1);
  }

  return (
    <Wrapper>
      <Container>
        <Product backgroundColor={item.backgroundColor}>
          <Title>{item.title}</Title>
          <ProductContent>
            <UnderProduct />
            <Image source={{ uri: item.image }} />
            <Price>{`$${item.price}`}</Price>
            <Controls>
              <Decrease onPress={() => decrease()}>
                <Entypo name="minus" size={26} color="black" />
              </Decrease>
              <Amount>
                <AmountText>{amount}</AmountText>
              </Amount>
              <Increase onPress={() => increase()}>
                <Entypo name="plus" size={26} color="black" />
              </Increase>
            </Controls>
          </ProductContent>
        </Product>
        <Description>{item.description}</Description>
        <ButtonRow>
          <AddToCartButton>
            <AddToCartText>Add to Cart</AddToCartText>
          </AddToCartButton>
          <BuyNowButton>
            <BuyNowText>Buy Now</BuyNowText>
          </BuyNowButton>
        </ButtonRow>
      </Container>
    </Wrapper>
  );
};

export default Details;
