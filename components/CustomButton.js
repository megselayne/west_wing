import React, {Component} from 'react'
import { TouchableOpacity, View, Text, TextInput, Keyboard } from 'react-native';
import styles from './Styles';

class CustomButton extends Component {
    render(){
        return(
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CustomButton;