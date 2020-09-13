import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 80,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'white',
      fontSize: 20,
    },
    logo: {
      height: 100,
      width: 200,
    },
    answerButtonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    buttonStyle: {
      color: 'white'
    },
    buttonStyleWrong: {
      color: 'red'
    },
    buttonStyleRight: {
      color: 'green'
    },
    nav: {
      backgroundColor: '#000'
    }
  });