import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Gender() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Gender 👋</Text>
      <Link href='/children'>Next</Link>
    </View>
  );
}
