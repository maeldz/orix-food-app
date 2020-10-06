import React from "react";

import Header from "../Header";

import { Container, Content } from "./styles";

interface Props {
  header?: boolean;
  isHome?: boolean;
}

const Wrapper: React.FC<Props> = ({
  children,
  header = true,
  isHome = false,
}) => {
  return (
    <Container>
      <Content>
        {header && <Header isHome={isHome} />}
        {children}
      </Content>
    </Container>
  );
};

export default Wrapper;
