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
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      width: 200,
      fontSize: 20,
      textAlign: 'center'
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      backgroundColor: '#30343A',
      color: 'white',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      width: 200,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20,
      margin: 5,
    }
  });