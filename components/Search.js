import React, {Component} from 'react'
import { TouchableWithoutFeedback, View, Image, Text, TextInput, Keyboard } from 'react-native';
import styles from './Styles';
import CustomButton from './CustomButton';

class Search extends Component {
    render(){
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Hello Search</Text>
                <TextInput style={styles.textInput} placeholder="Search"
                />
                <CustomButton />
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Search;