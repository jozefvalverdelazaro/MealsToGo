import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infraestructure/theme";

import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
