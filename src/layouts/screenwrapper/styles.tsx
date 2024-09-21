import { useAppTheme } from "@contexts";
import { StyleSheet } from "react-native";

export const useStyles = () => {
    const {colors} = useAppTheme();
    const styles = StyleSheet.create({
      wrapper: {
        flex: 1,
        backgroundColor: colors.primarybackground,
      },
    });
  
    return {styles};
  };
  