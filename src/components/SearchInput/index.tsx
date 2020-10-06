import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";
import { TextInputProps } from "react-native";

import { Container, Search, SearchButton } from "./styles";

const SearchInput: React.FC<TextInputProps> = ({ ...props }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Search {...props} placeholderTextColor={colors.secondary} />
      <SearchButton>
        <Feather name="search" size={30} color={colors.secondary} />
      </SearchButton>
    </Container>
  );
};

export default SearchInput;
