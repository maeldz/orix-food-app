import React, { useEffect, useState } from "react";

import api from "../../services/api";

import SearchInput from "../../components/SearchInput";
import Wrapper from "../../components/Wrapper";
import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

import { Container, Slogan, FirstPart, SecondPart, Heading } from "./styles";

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

const Home: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
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
      const response = await api.get(
        `/categories/${activeCategory}?_embed=products`
      );

      setProducts(response.data.products);
      setRefreshing(false);
    }

    loadProducts();
  }, [activeCategory]);

  useEffect(() => {
    async function loadRecommendedProducts() {
      setRefreshing(true);
      const response = await api.get("/recommended/?_expand=product");
      const data = response.data.map((p: RecommendedProductProps) => p.product);
      setRecommendedProducts(data);
      setRefreshing(false);
    }

    loadRecommendedProducts();
  }, []);

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
        />
        <ProductList
          data={products}
          isLoading={!products.length}
          refreshing={refreshing}
        />

        <Heading>We recommend</Heading>
        <ProductList
          data={recommendedProducts}
          isLoading={!recommendedProducts.length}
          scale={0.8}
          refreshing={refreshing}
        />
      </Container>
    </Wrapper>
  );
};

export default Home;
