import React, { useContext, useState, forwardRef, Ref } from "react";
import { TextInputProps, TextInput as TextInputt } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

import { Container, Label, InputContainer, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  icon: string;
  label: string;
}

interface Props extends InputProps {
  ref: Ref<TextInputt>;
}

const Input: React.FC<Props> = forwardRef(({ icon, label, ...rest }, ref) => {
  const [focused, setFocused] = useState(false);

  const { colors } = useContext(ThemeContext);

  return (
    <Container focused={focused}>
      <Label>{label}</Label>
      <InputContainer>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={colors.secondary}
        />
        <TextInput
          {...rest}
          placeholderTextColor={colors.subFont}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          ref={ref}
        />
      </InputContainer>
    </Container>
  );
});

export default Input;
