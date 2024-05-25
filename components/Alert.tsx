import {
    Alert as GlueAlert,
    AlertIcon,
    AlertText,
    InfoIcon
  } from "@gluestack-ui/themed";
import React from "react";

type props = {
    text: string | undefined
}

const Alert = ({ text }: props) => {
  return (
    <GlueAlert w='$full' maxWidth={500} mt="$5" action="error" variant="solid">
      <AlertText>{text}</AlertText>
    </GlueAlert>
  );
};

export default Alert;
