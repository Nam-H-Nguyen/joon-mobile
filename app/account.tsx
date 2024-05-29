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
  FormControlLabel,
  FormControlLabelText,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserAccountCreateSchema,
  UserAccountCreateSchemaType,
} from "@/schema/userSchema";
import { useUserContext } from "@/context/UserContext";
import { router } from "expo-router";
import Alert from "@/components/Alert";
import Feather from '@expo/vector-icons/Feather';
import { color } from "@/style/color";

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserAccountCreateSchemaType>({
    resolver: zodResolver(UserAccountCreateSchema),
    defaultValues: {
      email: user.email,
      password: user.password,
      accepted: user.accepted,
    },
  });

  const watched = watch(["email", "password", "accepted"]);
  const onSave: SubmitHandler<UserAccountCreateSchemaType> = (data) => {
    console.log("data:", JSON.stringify(data));
    setUser((prev) => ({
      ...prev,
      email: data.email,
      password: data.password,
      accepted: data.accepted,
    }));
    // router.push("/gender");
  };

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
        <Text color="$text900" lineHeight="$md">
          {watched}
        </Text>
        <Heading color="$text900" lineHeight="$md">
          Login
        </Heading>
        <VStack space="xs">
          <FormControlLabel mb="$2">
            <FormControlLabelText color="$text500" lineHeight="$xs">
              Email
            </FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onBlur, onChange } }) => (
              <Input>
                <InputField
                  type="text"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              </Input>
            )}
          />
          {errors.email ? (
              <Alert text={errors.email.message} />
          ) : null}
        </VStack>
        <VStack space="xs">
          <FormControlLabel mb="$2">
            <FormControlLabelText color="$text500" lineHeight="$xs">
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onBlur, onChange } }) => (
              <Input alignContent="center">
                <InputField
                  type={showPassword ? "text" : "password"}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
                <InputSlot
                  pr="$3"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Feather name="eye" size={16} color={color.accent} /> : <Feather name="eye-off" size={16} color={color.accent} />}
                </InputSlot>
              </Input>
            )}
          />
          {errors.password ? (
              <Alert text={errors.password.message} />
          ) : null}
        </VStack>
        <Controller
          control={control}
          name="accepted"
          render={({ field: { value, onChange } }) => (
            <label style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" value={value === true ? "yes" : "no"} onChange={(e) => {
                onChange(e.target.checked);

              }} />
              <Text>Accept Terms & Conditions</Text>
            </label>
          )}
        />
        {errors.accepted ? (
            <Alert text={errors.accepted.message} />
        ) : null}
        <Button ml="auto" onPress={handleSubmit(onSave)}>
          <ButtonText color="$white">Save</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
