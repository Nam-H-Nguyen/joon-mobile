import { View } from "@gluestack-ui/themed";

type props = {
  children: React.ReactNode;
};

const PaddedView = ({ children }: props) => {
  return (
    <View flex={1} p="$6" bgColor="white">
      {children}
    </View>
  );
};

export default PaddedView;
