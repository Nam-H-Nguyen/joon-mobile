import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Children() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Children 👋</Text>
      <Link href='/account'>Next</Link>
    </View>
  );
}
