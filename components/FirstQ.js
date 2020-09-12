import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';

class FirstQ extends Component {
    constructor(props){
        super(props)
        this.state=({
            answer: null,
            validity: null,
            counter: 1,
            index: 0,
        })
    }

    incrementUp = () => {
        console.log('hear your tap')
        this.setState({
            counter: this.state.counter +1,
            index: this.state.index +1
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://hyperpix.net/wp-content/uploads/2020/04/the-west-wing-logo-font-free-download-1200x679.jpg',}} />
                <Text style={styles.title}>Question {this.state.counter}!</Text>
                <Text style={styles.subTitle}>Ready to Get Started?</Text>
                <Button
                title="Next"
                onPress={this.incrementUp}
                    />
            </View>
        )
    }
}

export default FirstQ