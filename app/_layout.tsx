import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-reanimated";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import WelcomeStackScreens from "@/routes/WelcomeStackScreens";
import { UserProvider } from "@/context/UserContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
          <View flex={1} p="$6">
            <UserProvider>
              <WelcomeStackScreens />
            </UserProvider>
          </View>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
