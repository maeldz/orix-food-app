import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text } from "react-native";
import { ThemeContext } from "styled-components/native";

import {
  Container,
  Info,
  AddressType,
  AddressData,
  FirstLine,
  SecondLine,
  SelectButton,
} from "./styles";

interface Props {
  addressType: string;
  firstLine: string;
  secondLine: string;
  selected: boolean;
  last: boolean;
  onSelect: () => void;
}

const Address: React.FC<Props> = ({
  addressType,
  firstLine,
  secondLine,
  selected,
  last,
  onSelect,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container last={last} onPress={() => onSelect()}>
      <Info>
        <AddressType>{addressType}</AddressType>
        <AddressData>
          <FirstLine>{firstLine}</FirstLine>
          <SecondLine>{secondLine}</SecondLine>
        </AddressData>
      </Info>
      <SelectButton selected={selected}>
        <Feather name="check" size={24} color={colors.primary} />
      </SelectButton>
    </Container>
  );
};

export default Address;
