import { Stack } from "expo-router";

export default function WelcomeStackScreens() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gender" />
      <Stack.Screen name="children" />
      <Stack.Screen name="account" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
