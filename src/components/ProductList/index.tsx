import React from "react";
import { FlatList, Dimensions } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import Product from "../Product";

const { height } = Dimensions.get("window");

interface ProductProps {
  id: number;
  categoryId: number;
  title: string;
  price: number;
  image: string;
  backgroundColor: string;
}

interface ProductDataProps {
  data: ProductProps[];
  scale?: number;
  isBuyable?: boolean;
  isLoading: boolean;
  refreshing: boolean;
  vertical?: boolean;
}

const ProductList: React.FC<ProductDataProps> = ({
  data,
  scale = 1,
  isBuyable = false,
  isLoading,
  refreshing,
  vertical = false,
}) => {
  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: isLoading ? 20 : 0,
        paddingBottom: isLoading && scale !== 1 ? 20 * scale : 0,
      }}
      isLoading={isLoading}
      layout={[
        {
          key: "first",
          flex: vertical ? 1 : 0,
          width: `${!vertical ? 50 * scale : 0}%`,
          height: vertical ? height * 0.33 * scale : height * 0.29 * scale,
          marginRight: 20 * scale,
          borderRadius: scale * 30,
        },
        {
          key: "second",
          flex: vertical ? 1 : 0,
          width: `${!vertical ? 50 * scale : 0}%`,
          height: vertical ? height * 0.33 * scale : height * 0.29 * scale,
          marginRight: 20 * scale,
          borderRadius: scale * 30,
        },
        {
          key: "third",
          width: `${scale !== 1 ? 50 * scale : 0}%`,
          height: scale !== 1 ? height * 0.29 * scale : 0,
          borderRadius: scale * 30,
        },
      ]}
    >
      <FlatList<ProductProps>
        data={data}
        renderItem={({ item }) => (
          <Product
            item={item}
            scale={scale}
            isBuyable={isBuyable}
            vertical={vertical}
          />
        )}
        keyExtractor={(item) => item.title}
        horizontal={!vertical}
        numColumns={vertical ? 2 : undefined}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: vertical ? 10 : 0,
          paddingBottom: scale !== 1 ? scale * 20 : 0,
        }}
        refreshing={scale === 1 && refreshing}
        onRefresh={() => {}}
      />
    </SkeletonContent>
  );
};

export default ProductList;
