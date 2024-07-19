import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight:'bold',
        width: '40%',
        textAlign: 'center'
    },
    context: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    textContainer: {
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '5%',
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor: '#61E4C5',
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'black',
        borderBottomWidth: 5,
    },
    getStartedText: {
        fontWeight: 'bold',
        color: '#433D3C'
    },
    paginationStyle: {
        position:"absolute",
        bottom: '20%',
    },
    dotStyle: {
        borderWidth:1,
        borderBottomWidth:2
    },
    activeDotStyle: {
        width:20,
        height:8,
        borderWidth:1, 
        borderBottomWidth:2
    },
    skipText: {
        fontSize:18,
        color:'grey'
    },
    viewStyle: {
        flex:1
    }

});