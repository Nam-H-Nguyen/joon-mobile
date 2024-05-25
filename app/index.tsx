import {
  Button,
  ButtonText,
  Center,
  Heading,
  Input,
  InputField,
  KeyboardAvoidingView,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function Index() {
  return (
    <KeyboardAvoidingView>
      <VStack space="md" pt={500}>
        <Center>
          <Heading size={"2xl"}>What is your name?</Heading>
        </Center>
        <Input variant="rounded" size="md" bg='$trueGray200'>
          <InputField placeholder="Eg Nam" />
        </Input>
      </VStack>
      <View pt="$10">
        <Button
          size="xl"
          variant="solid"
          action="primary"
          rounded='$full'
          onPress={() => router.push("/test")}
        >
          <ButtonText>Next</ButtonText>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
