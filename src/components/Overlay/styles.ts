import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  color: string;
  opacity?: number;
}

export const Container = styled.View<Props>`
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  opacity: ${(props) => props.opacity};
`;

export const Gradient = styled(LinearGradient).attrs((props: Props) => ({
  colors: ["transparent", props.color],
  end: [0, 0.9],
}))<Props>`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
