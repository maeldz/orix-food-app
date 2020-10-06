import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text } from "react-native";
import { ThemeContext } from "styled-components/native";

import {
  Container,
  LeftSide,
  Brand,
  CreditCardRow,
  Dots,
  Dot,
  LastFourDigits,
  SelectButton,
} from "./styles";

interface Props {
  brand: string;
  lastFourDigits: number;
  selected: boolean;
  onSelect: () => void;
}

const CreditCard: React.FC<Props> = ({
  brand,
  lastFourDigits,
  selected,
  onSelect,
}) => {
  let brandIcon;

  const { colors } = useContext(ThemeContext);

  switch (brand) {
    case "mastercard":
      brandIcon = <FontAwesome5 name="cc-mastercard" size={24} color="black" />;
      break;
    case "visa":
      brandIcon = <FontAwesome5 name="cc-visa" size={24} color="black" />;
      break;
    case "amex":
      brandIcon = <FontAwesome5 name="cc-amex" size={24} color="black" />;
      break;
    case "discover":
      brandIcon = <FontAwesome5 name="cc-discover" size={24} color="black" />;
      break;
    default:
      brandIcon = <FontAwesome5 name="credit-card" size={24} color="black" />;
      break;
  }

  return (
    <Container onPress={() => onSelect()}>
      <LeftSide>
        <Brand>{brand}</Brand>
        <CreditCardRow>
          {brandIcon}
          <Dots>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </Dots>
          <LastFourDigits>{lastFourDigits}</LastFourDigits>
        </CreditCardRow>
      </LeftSide>
      <SelectButton selected={selected}>
        <Feather name="check" size={24} color={colors.primary} />
      </SelectButton>
    </Container>
  );
};

export default CreditCard;
