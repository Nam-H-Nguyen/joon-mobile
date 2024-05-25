import {
  Button,
  ButtonText,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  VStack,
  EyeIcon,
  EyeOffIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserAccountCreateSchema } from "@/schema/userSchema";

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserAccountCreateSchema),
  });

  return (
    <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      $dark-borderWidth="$1"
      $dark-borderRadius="$lg"
      $dark-borderColor="$borderDark800"
    >
      <VStack space="xl">
        <Heading color="$text900" lineHeight="$md">
          Login
        </Heading>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Email
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Password
          </Text>
          <Input alignContent="center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot pr="$3" onPress={() => setShowPassword(!showPassword)}>
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                color="$darkBlue500"
              />
            </InputSlot>
          </Input>
        </VStack>
        <Button
          ml="auto"
          onPress={() => {
            () => console.log("hi");
          }}
        >
          <ButtonText color="$white">Save</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
