import React, { useEffect, useState } from "react";

import api from "../../services/api";

import SearchInput from "../../components/SearchInput";
import Wrapper from "../../components/Wrapper";
import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

import { Container, Slogan, FirstPart, SecondPart } from "./styles";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  backgroundColor: string;
}

interface RecommendedProductProps {
  id: number;
  productId: number;
  product: ProductProps;
}

interface CategoriesProps {
  id: number;
  title: string;
  color: string;
}

const Explore: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      setRefreshing(true);
      if (activeCategory) {
        const response = await api.get(
          `/categories/${activeCategory}?_embed=products`
        );

        setProducts(response.data.products);
      } else {
        const response = await api.get("/products");
        setProducts(response.data);
      }
      setRefreshing(false);
    }

    loadProducts();
  }, [activeCategory]);

  return (
    <Wrapper isHome>
      <Container>
        <Slogan>
          <FirstPart>Hungry?</FirstPart>
          <SecondPart>Order & Eat.</SecondPart>
        </Slogan>
        <SearchInput placeholder="Search" />

        <CategoryList
          data={categories}
          isLoading={!categories.length}
          setActiveCategory={setActiveCategory}
          isHome={false}
        />

        <ProductList
          data={products}
          isLoading={!products.length}
          refreshing={refreshing}
          vertical
          isBuyable
        />
      </Container>
    </Wrapper>
  );
};

export default Explore;
