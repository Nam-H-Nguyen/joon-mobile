import {
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  Heading,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function Gender() {
  return (
    <View p="$4">
      <VStack space="md">
        <Center>
          <Heading size={"2xl"}>What is your gender?</Heading>
        </Center>
        <Center>
          <ButtonGroup space="md">
            <Button
              variant="solid"
              py="$1.5"
              px="$10"
              action="secondary"
              rounded="$full"
            >
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Male
              </ButtonText>
            </Button>
            <Button
              variant="solid"
              py="$1.5"
              px="$10"
              action="secondary"
              rounded="$full"
            >
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Female
              </ButtonText>
            </Button>
            <Button
              variant="solid"
              py="$1.5"
              px="$10"
              action="secondary"
              rounded="$full"
            >
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Other
              </ButtonText>
            </Button>
          </ButtonGroup>
        </Center>
      </VStack>
      <View pt="$10">
        <Button
          size="xl"
          variant="solid"
          action="primary"
          rounded="$full"
          onPress={() => router.push("/children")}
        >
          <ButtonText>Next</ButtonText>
        </Button>
      </View>
    </View>
  );
}
