import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

import { Container } from "./styles";

const Skeleton: React.FC = () => {
  return (
    <Placeholder Animation={Fade}>
      <PlaceholderLine style={{ flex: 1 }} />
    </Placeholder>
  );
};

export default Skeleton;
