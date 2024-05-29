import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-reanimated";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import { UserProvider } from "@/context/UserContext";
import DashboardStackScreens from "@/routes/DashboardStackScreens";
import PaddedView from "@/components/PaddedView";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function DashboardLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaddedView>
        <DashboardStackScreens />
      </PaddedView>
    </SafeAreaView>
  );
}
