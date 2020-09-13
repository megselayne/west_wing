import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';
import Two from './Two';

class Home extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://hyperpix.net/wp-content/uploads/2020/04/the-west-wing-logo-font-free-download-1200x679.jpg',}} />
                <Text style={styles.title}>Welcome to West Wing Trivia!</Text>
                <Text style={styles.subTitle}>Ready to Get Started?</Text>
                <Button title="Go to Two" onPress={() => this.props.navigation.navigate('Two')} />
            </View>
        )
    }
}

export default Home