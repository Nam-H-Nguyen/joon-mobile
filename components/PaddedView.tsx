import { View } from "@gluestack-ui/themed";
import { forwardRef } from "react";

type props = {
  children: React.ReactNode;
};

type ViewRef = React.RefObject<typeof View>;

const PaddedView = forwardRef<ViewRef, props>(({ children }: props, ref) => {
  return (
    <View flex={1} p="$6" bgColor="white">
      {children}
    </View>
  );
});

export default PaddedView;
