import styled from "styled-components/native";
import SkeletonContent from "react-native-skeleton-content";
import { ISkeletonContentProps } from "react-native-skeleton-content/lib/Constants";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

interface ProductDataProps extends ISkeletonContentProps {
  scale: number;
}

export const Skeleton = styled(SkeletonContent).attrs(
  (props: ProductDataProps) => ({
    containerStyle: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: props.isLoading ? 20 : 0,
    },
    layout: [
      {
        key: "first",
        width: `${55 * props.scale}%`,
        height: height * 0.32 * props.scale,
        marginRight: 20 * props.scale,
        borderRadius: props.scale * 30,
      },
      {
        key: "second",
        width: `${55 * props.scale}%`,
        height: height * 0.32 * props.scale,
        borderRadius: props.scale * 30,
      },
    ],
  })
)<ProductDataProps>``;
