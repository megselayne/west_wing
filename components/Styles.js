import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
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
      color: 'red'
    }
  });