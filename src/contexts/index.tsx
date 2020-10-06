import React from "react";

import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";

const RootProvider: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>{children}</AuthProvider>
    </CartProvider>
  );
};

export default RootProvider;
