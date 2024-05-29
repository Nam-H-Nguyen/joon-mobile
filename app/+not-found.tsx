import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import {
  Button,
  ButtonText,
  Heading,
  ArrowUpIcon,
  ButtonIcon,
  Center,
} from "@gluestack-ui/themed";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Center p="$5">
        <Heading>This screen doesn't exist.</Heading>
        <Link href='/'>
          <Button variant="link">
            <ButtonText fontWeight="$md" fontSize="$sm">
              Go back to home
            </ButtonText>
            <ButtonIcon as={ArrowUpIcon} h="$3" w="$3" ml="$1" />
          </Button>
        </Link>
      </Center>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
