import React from 'react'
import { View, Text } from 'react-native'
import styles from './MainMapStyles.js'

import {RectangularButton} from '../../../components/Buttons'

export const ErrorMessage = (props) => (
  <View style={[styles.ErrorMessage]}>
    <View style={{backgroundColor: 'red', padding: 5, marginBottom: 10}}>
      <Text style={{color: 'white'}}>{props.error}</Text>
    </View>
    <RectangularButton
      onPress={props.fetchRoutes}
      underlayColor={'#e69500'}
      style={{backgroundColor:'orange'}}
      text='Try Again'
    />
  </View>
)

ErrorMessage.propTypes = {
  error: React.PropTypes.string,
  fetchRoutes: React.PropTypes.func.isRequired
}

export default ErrorMessage
