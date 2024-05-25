import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

type RadioButtonProps = {
  label: string;
  value: string;
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

const RadioButton = ({
  label,
  value,
  selectedValue,
  onSelect,
}: RadioButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    onSelect(value);
  };

  return (
    <TouchableOpacity
      style={[
        styles.radioButton,
        value === selectedValue && styles.selectedRadioButton,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.radioButtonText,
          value === selectedValue && styles.selectedRadioButtonText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ececec",
    backgroundColor: "#ececec",
  },
  selectedRadioButton: {
    backgroundColor: "#7d84f5",
  },
  radioButtonText: {
    color: "black",
    textAlign: "center",
  },
  selectedRadioButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default RadioButton;
