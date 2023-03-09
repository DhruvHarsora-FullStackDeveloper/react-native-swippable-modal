import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from './theme';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  innerContainer: {
    flex: 1,
    marginTop: verticalScale(100),
    marginHorizontal: horizontalScale(20),
  },
  bannerContainer: {
    height: verticalScale(200),
    width: '100%',
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    borderColor: Colors.white,
    borderWidth: 2,
  },
  image: { width: '100%', height: '100%' },
  buttonStyle: {
    padding: moderateScale(15),
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderRadius: moderateScale(5),
    marginTop: verticalScale(10),
  },
  showModalText: {
    color: Colors.primary,
    fontSize: moderateScale(18),
  },
  textInputView: {
    padding: moderateScale(15),
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    marginVertical: verticalScale(5),
  },
  textInput: {
    fontSize: moderateScale(17),
    lineHeight: verticalScale(18),
    color: Colors.primary,
  },
  showFlatListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  checkedImage: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: Colors.primary,
  },
  textFlatList: {
    marginLeft: horizontalScale(5),
  },
  renderItemView: {
    height: verticalScale(100),
    width: horizontalScale(130),
    marginHorizontal: horizontalScale(5),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  renderVerticalItemView: {
    height: verticalScale(100),
    width: horizontalScale(130),
    marginVertical: horizontalScale(5),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  verticalFlatList: {
    height: horizontalScale(200),
  },
  verticalListText: {
    marginVertical: verticalScale(10),
  },
  submit: {
    padding: moderateScale(15),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: moderateScale(5),
    marginTop: verticalScale(10),
  },
  submitText: {
    color: Colors.white,
    fontSize: moderateScale(18),
  },
});

export default styles;
