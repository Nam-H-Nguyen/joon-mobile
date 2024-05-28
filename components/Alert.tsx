import {
  Alert as GlueAlert,
  AlertText,
  View,
} from "@gluestack-ui/themed";
import { Foundation } from "@expo/vector-icons";
import React from "react";

type props = {
  text: string | undefined;
};

const Alert = ({ text }: props) => {
  return (
    <GlueAlert w="$full" maxWidth={500} mt="$5" action="error" variant="solid">
      <View mr="$2">
        <Foundation name="info" size={24} color="red" />
      </View>
      <AlertText>{text}</AlertText>
    </GlueAlert>
  );
};

export default Alert;
