import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';
import questionData from './QuestionData';
import AnswerButtons from './AnswerButtons';

class Questions extends Component {
    constructor(props){
        super(props)
        this.state=({
            validity: null,
            counter: 1,
            index: 0,
            buttonStyle: null,
        })
    }

    incrementUp = () => {
        console.log('hear your tap')
        this.setState({
            counter: this.state.counter +1,
            index: this.state.index +1,
            validity: null,
        })
    }

    checkAnswer = (userAnswer, evt) => {
        console.log('hear you tapped an answer')
        if(userAnswer === questionData[this.state.index].answer){
            this.setState({
                validity: 'Correct!',
            })
        }
        else{
            console.log('i hear it is wrong')
            this.setState({
                validity: 'Nope!',
            })
        }

    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://hyperpix.net/wp-content/uploads/2020/04/the-west-wing-logo-font-free-download-1200x679.jpg',}} />
                {(this.state.validity) && <Text style={styles.subTitle}>{this.state.validity}</Text>}
                <Text style={styles.title}>Question {this.state.counter}!</Text>
                <Text style={styles.subTitle}>{questionData[this.state.index].question}</Text>
                <AnswerButtons index={this.state.index} validity={this.state.validity} checkAnswer={this.checkAnswer}/>
                {(this.state.validity) && <Button title="Next" onPress={this.incrementUp}/>}
            </View>
        )
    }
}

export default Questions