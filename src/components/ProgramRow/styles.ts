import { StyleSheet } from "react-native";
import { BORDER_COLOR, DARK_TEXT_COLOR, LIGHT_TEXT_COLOR, PROGRAM_BG_COLOR } from "../../constants";

export const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    program: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 0,
      padding: 10,
      borderWidth:.5,
      borderColor: BORDER_COLOR,
      backgroundColor: PROGRAM_BG_COLOR,
    },
    programTitle: {
      color: LIGHT_TEXT_COLOR,
      fontWeight: '500',
      fontSize: 16
    },
    programText: {
      fontSize: 13,
      color: DARK_TEXT_COLOR,
    },
  });