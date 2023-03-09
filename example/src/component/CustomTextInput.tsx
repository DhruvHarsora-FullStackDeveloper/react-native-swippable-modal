import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles';

const CustomTextInput = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <View style={styles.textInputView}>
      <TextInput placeholder={placeHolder} style={styles.textInput} />
    </View>
  );
};

export default CustomTextInput;
