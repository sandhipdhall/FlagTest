import { StyleSheet } from 'react-native';

export const BottomModalStyles = theme =>
  StyleSheet.create({
    modalContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      flex: 1,
    },
    opacityViewStyle: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.blackBG,
      opacity: 0.5,
    },
    modalStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: theme.whiteBG,
      paddingTop: 10,
      maxHeight: '85%',
      // height: '30%',
    },
    flexStyle: {
      flex: 1,
    },
  });
