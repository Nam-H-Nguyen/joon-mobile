import { useUserContext } from "@/context/UserContext";
import {
  Button,
  ButtonText,
  Center,
  FormControl,
  Heading,
  KeyboardAvoidingView,
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserNameSchema, UserNameSchemaType } from "@/schema/userSchema";
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { style } from "@/style/textinput";
import Alert from "@/components/Alert";
import PaddedView from "@/components/PaddedView";
import { color } from "@/style/color";

export default function Index() {
  const { user, setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserNameSchemaType>({
    resolver: zodResolver(UserNameSchema),
    defaultValues: {
      name: user.name,
    },
  });

  const onSave: SubmitHandler<UserNameSchemaType> = (data) => {
    setUser((prev) => ({ ...prev, name: data.name }));
    router.push("/gender");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <PaddedView>
          <VStack space="md">
            <Center>
              <Heading size={"2xl"}>What is your name?</Heading>
            </Center>
            <FormControl>
              <Center>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { value, onBlur, onChange } }) => (
                    <TextInput
                      placeholder="First and last name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={style.textInput}
                    />
                  )}
                />
              </Center>
              {errors.name ? (
                <Center>
                  <Alert text={errors.name.message} />
                </Center>
              ) : null}
              <Center mt="$10">
                <Button
                  size="xl"
                  variant="solid"
                  action="primary"
                  bgColor={color.primary}
                  rounded="$full"
                  width="$full"
                  maxWidth={500}
                  onPress={handleSubmit(onSave)}
                >
                  <ButtonText>Next</ButtonText>
                </Button>
              </Center>
            </FormControl>
          </VStack>
        </PaddedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
