import React from "react";
import SkeletonContent from "react-native-skeleton-content";

import {
  CategoriesRow,
  AvailableText,
  HomeCategoryContainer,
  HomeCategoryTitle,
  CategoryContainer,
  CategoryImage,
  CategoryTitle,
} from "./styles";

interface CategoriesProps {
  id: number;
  title: string;
  color: string;
  image: string;
}

interface CategoriesDataProps {
  data: CategoriesProps[];
  isLoading: boolean;
  isHome?: boolean;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryList: React.FC<CategoriesDataProps> = ({
  data,
  isLoading,
  isHome = true,
  setActiveCategory,
}) => {
  return (
    <CategoriesRow
      contentContainerStyle={{
        paddingLeft: !isHome ? 20 : 0,
        paddingRight: !isHome ? 10 : 0,
      }}
    >
      {isHome && <AvailableText>Available</AvailableText>}
      <SkeletonContent
        containerStyle={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        isLoading={isLoading}
        layout={[
          {
            key: "first",
            width: isHome ? 90 : 120,
            height: !isHome ? 85 : 35,
            marginRight: 10,
            borderRadius: isHome ? 20 : 10,
          },
          {
            key: "second",
            width: isHome ? 90 : 120,
            height: !isHome ? 85 : 35,
            marginRight: 10,
            borderRadius: isHome ? 20 : 10,
          },
          {
            key: "third",
            width: isHome ? 50 : 120,
            height: !isHome ? 85 : 35,
            marginRight: 10,
            borderRadius: isHome ? 20 : 10,
          },
        ]}
      >
        {data.map((category: CategoriesProps) =>
          isHome ? (
            <HomeCategoryContainer
              key={category.id}
              color={category.color}
              onPress={() => setActiveCategory(category.id)}
            >
              <HomeCategoryTitle>{category.title}</HomeCategoryTitle>
            </HomeCategoryContainer>
          ) : (
            <CategoryContainer
              key={category.id}
              onPress={() => setActiveCategory(category.id)}
            >
              <CategoryImage source={{ uri: category.image }} />
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryContainer>
          )
        )}
      </SkeletonContent>
    </CategoriesRow>
  );
};

export default CategoryList;
