import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AppLoading } from "expo";

import api from "../services/api";
import { useCart } from "./cart";

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthContextData {
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  firstLogin: boolean;
  loading: boolean;
  user: {
    id: number;
    email: string;
    name: string;
  } | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [firstLogin, setFirstLogin] = useState(true);
  const [loading, setLoading] = useState(true);

  const { clearCart } = useCart();

  async function signIn(email: string, password: string) {
    const response = await api.get(
      `/users?email=${email}&password=${password}`
    );

    if (response.data.length) {
      const user = response.data[0] as User;

      const data = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      await AsyncStorage.multiSet([
        ["@orix:user", JSON.stringify(data)],
        ["@orix:firstLogin", JSON.stringify(false)],
      ]);

      setFirstLogin(false);
      setUser(data);
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@orix:user", "@orix:token"]);
    await clearCart();
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@orix:user");
      const storagedFirstLogin = await AsyncStorage.getItem("@orix:firstLogin");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      if (storagedFirstLogin) {
        setFirstLogin(JSON.parse(storagedFirstLogin));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, firstLogin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
