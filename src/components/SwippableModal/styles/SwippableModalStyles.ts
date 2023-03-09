import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.modalColor,
  },
  inputContainerBackgroundColor: {
    marginTop: verticalScale(100),
    backgroundColor: Colors.modalDisableBackgroundColor,
  },
  keyboardAvoidingStyle: {
    backgroundColor: Colors.modalBackgroundColor,
    width: '100%',
    borderTopStartRadius: verticalScale(24),
    borderTopEndRadius: verticalScale(24),
    marginTop: verticalScale(60),
  },
  bodyContainer: {
    paddingTop: moderateScale(10),
    paddingBottom: verticalScale(40),
    marginHorizontal: horizontalScale(20),
  },
  bodyContainerHeader: {
    marginTop: verticalScale(50),
  },
  bodyContainerHeaderDisable: {
    marginTop: verticalScale(2),
  },
  bodyTimerContainerHeader: {
    marginTop: verticalScale(25),
  },
  modalLineStyle: {
    height: verticalScale(4),
    width: horizontalScale(36),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(2),
    alignSelf: 'center',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    marginTop: verticalScale(38),
    borderTopStartRadius: verticalScale(24),
    borderTopEndRadius: verticalScale(24),
  },
  touchableOpacityStyle: {
    flex: 1,
  },
  scrollViewStyle: { flexGrow: 1 },
});

export default styles;
