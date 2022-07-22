import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../const/utilConst';

const LoaderStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      position: 'absolute',
      alignSelf: 'center',
      top: 0,
      bottom: 0,
    },
    whiteBg: {
      backgroundColor: 'white',
    },
    gradientLayout: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      // backgroundColor: 'black',
      // opacity: 0.5,
      // height: SCREEN_HEIGHT,
      // width: SCREEN_WIDTH,
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  });

export default LoaderStyles;
