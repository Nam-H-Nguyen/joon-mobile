import Alert from "@/components/Alert";
import PaddedView from "@/components/PaddedView";
import { useUserContext } from "@/context/UserContext";
import { UserGenderSchema, UserGenderSchemaType } from "@/schema/userSchema";
import {
  Button,
  ButtonText,
  Center,
  Heading,
  VStack,
  RadioGroup,
  HStack,
  Radio,
  RadioLabel,
  FormControl,
} from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { color } from "@/style/color";

const genderOptions = ["male", "female", "other"] as const;

export default function Gender() {
  const { user, setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserGenderSchemaType>({
    resolver: zodResolver(UserGenderSchema),
    defaultValues: {
      gender: user.gender,
    },
  });

  const onSave: SubmitHandler<UserGenderSchemaType> = (data) => {
    setUser((prev) => ({ ...prev, gender: data.gender }));
    router.push("/children");
  };

  return (
    <PaddedView>
      <VStack space="md">
        <Center>
          <Heading size={"2xl"}>What is your gender?</Heading>
        </Center>
        <FormControl>
          <Center>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange, value } }) => (
                <RadioGroup value={value || user.name} onChange={onChange}>
                  <HStack space="md">
                    {genderOptions.map((option) => {
                      return (
                        <Radio
                          key={option}
                          bgColor={value === option ? color.accent : color.gray}
                          p="$4"
                          borderRadius="$full"
                          value={option}
                        >
                          <RadioLabel
                            color={value === option ? color.white : color.black}
                          >
                            {option.toUpperCase()}
                          </RadioLabel>
                        </Radio>
                      );
                    })}
                  </HStack>
                </RadioGroup>
              )}
            />
          </Center>
          {errors.gender ? <Alert text={errors.gender.message} /> : null}
          <Center mt="$10">
            <Button
              size="xl"
              variant="solid"
              action="primary"
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
  );
}
