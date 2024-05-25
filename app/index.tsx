import { useUserContext } from "@/context/UserContext";
import {
  Alert,
  AlertCircleIcon,
  AlertIcon,
  AlertText,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  InfoIcon,
  Input,
  InputField,
  KeyboardAvoidingView,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { useRef, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserNameSchema, UserNameSchemaType } from "@/schema/userSchema";
import { TextInput } from "react-native";
import { style } from "@/style/textinput";

export default function Index() {
  const { setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserNameSchemaType>({
    resolver: zodResolver(UserNameSchema),
  });

  const onSave: SubmitHandler<UserNameSchemaType> = (data) => {
    setUser((prev) => ({ ...prev, name: data.name }));
    router.push("/gender");
  };

  return (
    <KeyboardAvoidingView>
      <VStack space="md">
        <Center>
          <Heading size={"2xl"}>What is your name?</Heading>
        </Center>
          <FormControl>
            <Controller
              control={control}
              render={({ field: { value, onBlur, onChange } }) => (
                <TextInput
                  placeholder="First and last name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={style.textInput}
                />
              )}
              name="name"
            />
            {errors.name ? (
              <Alert mt="$5" action="error" variant="solid">
                <AlertIcon as={InfoIcon} mr="$3" />
                <AlertText>{errors.name.message}</AlertText>
              </Alert>
            ) : null}
            <View mt="$10">
              <Button
                size="xl"
                variant="solid"
                action="primary"
                rounded="$full"
                width="$full"
                onPress={handleSubmit(onSave)}
              >
                <ButtonText>Next</ButtonText>
              </Button>
            </View>
          </FormControl>
      </VStack>
    </KeyboardAvoidingView>
  );
}
