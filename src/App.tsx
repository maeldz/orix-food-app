import React, { useEffect } from "react";
import * as Updates from "expo-updates";
import { AppLoading, registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Routes from "./routes";

import RootProvider from "./contexts";

function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, []);

  LogBox.ignoreLogs(["No native splash", "useNativeDriver"]);

  const theme = useColorScheme() === "dark" ? light : light;

  const [fontsLoaded] = useFonts({
    eurostile: require("./assets/fonts/EurostileLTStd-Ex2.ttf"),
    marlinGeoRegular: require("./assets/fonts/MarlinGeo-Regular.ttf"),
    marlinGeoBold: require("./assets/fonts/MarlinGeo-Bold.ttf"),
    vennBold: require("./assets/fonts/Venn-ExtendedBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <RootProvider>
        <StatusBar style="dark" />
        <Routes />
      </RootProvider>
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
