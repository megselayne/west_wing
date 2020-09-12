import React, {Component} from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import styles from './Styles';
import questionData from './QuestionData';

class AnswerButtons extends Component {
    render(){
        return(
            <View style={styles.answerButtonContainer}>
                {(this.props.validity) && <Text style={styles.subTitle}>Correct!</Text>}
                {
                    questionData[this.props.index].buttons.map((button, index) => {
                       return  <Button key={index} title={button} color='red'
                            onPress={() => this.props.checkAnswer(button)}
                       />

                    })
                }
            </View>
        )
    }

}

export default AnswerButtons;