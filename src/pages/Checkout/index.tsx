import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ThemeContext } from "styled-components/native";

import api from "../../services/api";

import { useAuth } from "../../contexts/auth";

import Wrapper from "../../components/Wrapper";
import Address from "../../components/Address";
import CreditCard from "../../components/CreditCard";

import {
  Container,
  Heading,
  CashPayment,
  LeftSide,
  CashPaymentLabel,
  CashTotalRow,
  CashTotalText,
  SelectButton,
  TotalRow,
  Total,
  TotalLabel,
  TotalText,
  PlaceOrderButton,
  PlaceOrderText,
} from "./styles";

interface AddressProps {
  id: number;
  type: string;
  state: string;
  city: string;
  street: string;
  zip: string;
}

const Checkout: React.FC = () => {
  const [addresses, setAddresses] = useState<AddressProps[]>([]);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("cash");

  const { params } = useRoute<RouteProp<ParamList, "Checkout">>();

  const { user } = useAuth();

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    async function loadAddresses() {
      const response = await api.get(`/users/${user?.id}/addresses`);

      setAddresses(response.data);
    }

    loadAddresses();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Heading>Address</Heading>
        {addresses.map((address, index) => {
          const last = addresses.length === index + 1;

          return (
            <Address
              key={address.id}
              addressType={address.type}
              firstLine={`${address.state}, ${address.city}`}
              secondLine={`${address.street} ${address.zip}`}
              selected={selectedAddress === address.id}
              last={last}
              onSelect={() => setSelectedAddress(address.id)}
            />
          );
        })}
        <Heading>Payment</Heading>
        <CreditCard
          brand="mastercard"
          lastFourDigits={1253}
          selected={selectedPayment === "creditCard"}
          onSelect={() => setSelectedPayment("creditCard")}
        />
        <CashPayment onPress={() => setSelectedPayment("cash")}>
          <LeftSide>
            <CashPaymentLabel>Cash On Delivery</CashPaymentLabel>
            <CashTotalRow>
              <FontAwesome5 name="wallet" size={24} color={colors.secondary} />
              <CashTotalText>$ {params.total}</CashTotalText>
            </CashTotalRow>
          </LeftSide>
          <SelectButton selected={selectedPayment === "cash"}>
            <Feather name="check" size={24} color={colors.primary} />
          </SelectButton>
        </CashPayment>

        <TotalRow>
          <Total>
            <TotalLabel>Total</TotalLabel>
            <TotalText>$ {params.total}</TotalText>
          </Total>
          <PlaceOrderButton>
            <PlaceOrderText>Place Order</PlaceOrderText>
          </PlaceOrderButton>
        </TotalRow>
      </Container>
    </Wrapper>
  );
};

export default Checkout;
