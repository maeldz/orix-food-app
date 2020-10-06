import styled from "styled-components/native";

interface CategoriesProps {
  color: string;
}

export const CategoriesRow = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 20px 0;
`;

export const AvailableText = styled.Text`
  font-family: marlinGeoBold;
  font-size: 22px;
  margin: 0 10px 0 20px;
`;

export const HomeCategoryContainer = styled.TouchableOpacity<CategoriesProps>`
  background: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const HomeCategoryTitle = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const CategoryContainer = styled.TouchableOpacity`
  padding: 10px;
  width: 120px;
  align-items: center;
  border: ${(props) => props.theme.colors.border};
  border-radius: 10px;
  margin-right: 10px;
`;

export const CategoryImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 40px;
  height: 40px;
`;

export const CategoryTitle = styled.Text`
  font-family: marlinGeoBold;
  margin-top: 5px;
`;
