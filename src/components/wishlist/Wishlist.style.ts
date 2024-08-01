import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'black',
        borderBottomWidth: 6,
        width: '100%',
        height:'70%',
        paddingVertical: verticalScale(45),
        paddingHorizontal: verticalScale(10),
        borderRadius: 15,
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor:'#D6FCF7',
        position:'relative'
    },
    title: {
        fontSize:25 ,
        color:'black',
        position:'absolute',
        fontWeight:'800',
        left: scale(20),
        top: verticalScale(20),
    },
    content: {
        left: scale(10),
        fontWeight:'600',
        marginVertical: verticalScale(3)
    },
    totalAmount: {

    },
    totalSaving: {

    },
    addMoneyBar: {

    },
    moneyButton: {
        left: scale(100),
        marginVertical: verticalScale(-20),
        marginBottom:10
    },
    saveButton: {

    },
    savingAmountText: {

    },
    otherButton: {

    },
    progressBar:{
        left: scale(10),
        top: verticalScale(0),
    }
})