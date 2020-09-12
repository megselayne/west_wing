import React, {Component} from 'react';
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';

class SecondPage extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Hello Second Page</Text>
                <Button
                    title="Home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        )
    }
}

export default SecondPage