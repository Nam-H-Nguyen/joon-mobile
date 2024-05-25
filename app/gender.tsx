import Alert from "@/components/Alert";
import PaddedView from "@/components/PaddedView";
import RadioButton from "@/components/RadioButton";
import { useUserContext } from "@/context/UserContext";
import { UserGenderSchema, UserGenderSchemaType } from "@/schema/userSchema";
import {
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  Heading,
  VStack,
  View,
  Text,
} from "@gluestack-ui/themed";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function Gender() {
  const { setUser } = useUserContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserGenderSchemaType>({
    resolver: zodResolver(UserGenderSchema),
  });
  const [selected, setSelected] = useState<string | null>(null);

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
        <Center>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <ButtonGroup space='md'>
                <RadioButton
                  label="Male"
                  value="male"
                  selectedValue={value}
                  onSelect={(val) => {
                    setSelected(val);
                    onChange(val);
                  }}
                />
                <RadioButton
                  label="Female"
                  value="female"
                  selectedValue={value}
                  onSelect={(val) => {
                    setSelected(val);
                    onChange(val);
                  }}
                />
                <RadioButton
                  label="Other"
                  value="other"
                  selectedValue={value}
                  onSelect={(val) => {
                    setSelected(val);
                    onChange(val);
                  }}
                />
              </ButtonGroup>
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
      </VStack>
    </PaddedView>
  );
}
