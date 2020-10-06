import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.overlay};
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 20px 20px 10px 20px;
`;

export const Search = styled.TextInput`
  flex: 1;
  margin-right: 10px;
  font-family: marlinGeoBold;
  font-size: 18px;
`;

export const SearchButton = styled.TouchableOpacity``;
