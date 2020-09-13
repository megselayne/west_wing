import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';

class Search extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello Search</Text>
            </View>
        )
    }
}

export default Search;