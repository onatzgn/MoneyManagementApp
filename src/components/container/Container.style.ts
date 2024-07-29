import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    contentContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderBottomWidth: 6,
        marginVertical: '2%',
        width: '90%',
        paddingVertical: verticalScale(40),
        paddingHorizontal: verticalScale(10),
        borderRadius: 15,
        alignSelf: 'center',
        alignContent: 'center',
      },
    
})