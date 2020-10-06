interface ProductProps {
  id: number;
  categoryId: number;
  amount: number;
  title: string;
  image: string;
  price: number;
  description: string;
  backgroundColor: string;
}

type ParamList = {
  Cart: {
    isHome: boolean;
  };
  Details: {
    item: ProductProps;
  };
  Checkout: {
    total: number;
  };
};
