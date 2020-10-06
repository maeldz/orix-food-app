import styled from "styled-components/native";

interface Props {
  focused: boolean;
}

export const Container = styled.View<Props>`
  border-bottom-width: 1.5px;
  border-bottom-color: ${(props) =>
    props.focused ? props.theme.colors.secondary : props.theme.colors.subFont};
  padding: 3px 0;
  margin-top: 20px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.subFont};
  font-family: marlinGeoBold;
  margin-bottom: 3px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.secondary};
  font-family: marlinGeoBold;
  margin-left: 5px;
  flex: 1;
`;
