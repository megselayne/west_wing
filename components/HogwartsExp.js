import React, {Component} from 'react';
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';

class SecondPage extends Component {
    constructor(props) {
        super(props)
        this.state=({
            house: null,
        })
    }

    getSorted = () => {
        fetch('https://www.potterapi.com/v1/sortingHat')
        .then(res => res.json())
        .then((res) => {
            this.setState({
                house: res,
            })
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Find Your Hogwarts House!</Text>
                {
                    (this.state.house) && <Text style={styles.title}>You're a {this.state.house}!</Text>
                }
                <Button
                    title="Sort Me!"
                    onPress={() =>
                        this.getSorted()
                    }
                />
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