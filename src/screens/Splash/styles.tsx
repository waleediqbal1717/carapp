import theme from '../../theme';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.containerBackground,
    alignItems: 'center',
  },
  box: {
    height: 146,
    width: 145,
    borderWidth: 5,
    borderColor: '#fff',
  },
  Status: {
    backgroundColor: theme.colors.primary,
  },
  image: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(50),
    resizeMode: 'contain',
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    color: theme.colors.titletextColor,
    fontFamily: 'Inter-Bold',
    marginTop: 5,
    textAlign: 'center',
  },
});
export default styles;
