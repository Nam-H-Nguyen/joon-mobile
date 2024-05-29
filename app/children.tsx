import { useUserContext } from "@/context/UserContext";
import {
  Button,
  ButtonText,
  Center,
  Heading,
  Input,
  InputField,
  InputSlot,
  VStack,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  Pressable,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserChildrenSchema,
  UserChildrenSchemaType,
} from "@/schema/userSchema";
import PaddedView from "@/components/PaddedView";
import { Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Alert from "@/components/Alert";

export default function Children() {
  const { user, setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserChildrenSchemaType>({
    resolver: zodResolver(UserChildrenSchema),
    defaultValues: { children: user.children },
  });

  const { fields, append, remove } = useFieldArray({
    name: "children",
    control,
  });

  const onSave: SubmitHandler<UserChildrenSchemaType> = (data) => {
    setUser((prev) => ({ ...prev, children: data.children }));
    router.push("/account");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <PaddedView>
          <Center mb="$5">
            <Heading size={"2xl"}>Add your children</Heading>
          </Center>
          <FormControl>
            <VStack space="md">
              {fields.map((field, index) => (
                <Controller
                  key={field.id}
                  control={control}
                  name={`children.${index}.name` as const}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <>
                      <FormControlLabel mt="$3">
                        <FormControlLabelText>Child #{index + 1} name</FormControlLabelText>
                      </FormControlLabel>
                      <Input variant="rounded" size="md" bg="$trueGray200">
                        <InputField
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                        <InputSlot
                          borderRadius="$full"
                          h="$7"
                          w="$7"
                          m="$1.5"
                          bg="$violet400"
                        >
                          <Feather name="edit" size={16} color="white" />
                        </InputSlot>
                      </Input>
                      <Pressable onPress={() => remove(index)} pt="$2">
                        <Text color="red">
                          <FontAwesome5
                            name="trash-alt"
                            size={16}
                            color="red"
                          />{" "}
                          Remove
                        </Text>
                      </Pressable>
                      {errors.children?.root ? (
                        <Alert text={errors.children.root.message} />
                      ) : null}
                    </>
                  )}
                />
              ))}
            </VStack>
            <Center pt="$10">
              <Button
                size="md"
                variant="outline"
                action="primary"
                rounded="$full"
                w={200}
                onPress={() => append({ name: "" })}
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
                onPress={handleSubmit(onSave)}
              >
                <ButtonText>Done</ButtonText>
              </Button>
            </View>
          </FormControl>
        </PaddedView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
