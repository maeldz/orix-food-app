import styled from "styled-components/native";

interface CategoriesProps {
  color: string;
}

export const Container = styled.ScrollView`
  background: ${(props) => props.theme.colors.primary};
`;

export const Slogan = styled.View`
  margin: 10px 0 0 20px;
`;

export const FirstPart = styled.Text`
  font-family: marlinGeoBold;
  font-size: 32px;
`;

export const SecondPart = styled.Text`
  font-family: marlinGeoRegular;
  font-size: 32px;
`;

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

export const Heading = styled.Text`
  font-family: marlinGeoBold;
  font-size: 22px;
  margin: 20px;
`;

export const AvailableCategoriesContainer = styled.TouchableOpacity<
  CategoriesProps
>`
  background: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const AvailableCategoriesTitle = styled.Text`
  font-family: marlinGeoBold;
  color: ${(props) => props.theme.colors.secondary};
`;
