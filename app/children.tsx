import {
  Button,
  ButtonText,
  Center,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
  View,
  EditIcon,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function Children() {
  return (
    <View p="$4">
      <VStack space="md">
        <Center>
          <Heading size={"2xl"}>Add your children</Heading>
        </Center>
        <Input variant="rounded" size="md" bg="$trueGray200">
          <InputField placeholder="First name and last name" />
          <InputSlot
            borderRadius="$full"
            h="$7"
            w="$7"
            m="$1.5"
            bg="$violet400"
          >
            <InputIcon as={EditIcon} color="white" size="sm" />
          </InputSlot>
        </Input>
      </VStack>
      <Center pt="$10">
        <Button
          size="md"
          variant="outline"
          action="primary"
          rounded="$full"
          w={200}
          onPress={() => console.log("add child")}
        >
          <ButtonText>+ Add Child</ButtonText>
        </Button>
      </Center>
      <View pt="$20">
        <Button
          size="xl"
          variant="solid"
          action="primary"
          rounded="$full"
          onPress={() => router.push("/account")}
        >
          <ButtonText>Done</ButtonText>
        </Button>
      </View>
    </View>
  );
}
