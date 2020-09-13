import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';
import questionData from './QuestionData';

class AnswerButtons extends Component {
    render(){
        return(
            <View>
                <View style={styles.answerButtonContainer}>
                {
                    questionData[this.props.index].buttons.map((button, index) => {
                       return (
                            <Button key={index} color={styles.buttonStyle.color} title={button}
                            onPress={(evt) => this.props.checkAnswer(button, evt)}>
                                
                           </Button>
                       )
                    })
                }
                </View>
            </View>
        )
    }

}

export default AnswerButtons;