import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { useCart } from "../../contexts/cart";

import {
  Container,
  Content,
  UnderProduct,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  StartingFromText,
} from "./styles";

interface Props {
  item: {
    id: number;
    categoryId: number;
    title: string;
    price: number;
    image: string;
    backgroundColor: string;
  };
  scale: number;
  isBuyable: boolean;
  vertical: boolean;
}

const Product: React.FC<Props> = ({ item, scale, isBuyable, vertical }) => {
  const { addToCart, items } = useCart();
  const { navigate } = useNavigation();

  const inCart = items.find((p) => p.id === item.id);

  function handleAddToCart() {
    if (!inCart) {
      addToCart({ ...item, amount: 0 });
    }
  }

  function handleOnPress() {
    if (isBuyable) {
      navigate("Details", { item });
    }
  }

  return (
    <Container scale={scale} color={item.backgroundColor} vertical={vertical}>
      <Content
        scale={scale}
        vertical={vertical}
        onPress={() => handleOnPress()}
      >
        <UnderProduct scale={scale} />
        <ProductImage source={{ uri: item.image }} scale={scale} />
        <ProductTitle scale={scale}>{item.title}</ProductTitle>
        {isBuyable ? (
          <>
            <ProductPrice scale={scale}>${item.price}</ProductPrice>
            <AddButton
              scale={scale}
              added={!!inCart}
              onPress={() => handleAddToCart()}
            >
              <AddButtonText scale={scale} added={!!inCart}>
                {inCart ? "Added" : "Add"}
              </AddButtonText>
            </AddButton>
          </>
        ) : (
          <>
            <StartingFromText scale={scale}>Starting From</StartingFromText>
            <ProductPrice scale={scale}>${item.price}</ProductPrice>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Product;
