import React from "react";
import { Text } from "react-native";

import { Container, Gradient } from "./styles";

interface Props {
  color: string;
  opacity?: number;
  gradient?: boolean;
}

const Overlay: React.FC<Props> = ({
  color,
  opacity = 0.9,
  gradient = false,
  ...props
}) => {
  return (
    <Container color={color} opacity={opacity} {...props}>
      {gradient && <Gradient color={color} />}
    </Container>
  );
};

export default Overlay;
