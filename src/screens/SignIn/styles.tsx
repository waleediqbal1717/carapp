import theme from '../../theme';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.containerBackground,
  },
  logo: {
    height: responsiveHeight(2),
    width: 96,
    top: 65,
    left: 32,
  },
  title: {
    color: theme.colors.textColor,
    fontSize: responsiveFontSize(3),
    marginTop: 10,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  subTitle: {
    color: theme.colors.textSubtitleColor,
    fontSize: responsiveFontSize(1.9),
    marginTop: 10,
    fontFamily: 'Inter-Regular',
    width: responsiveWidth(90),
  },
  Header: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  BackButton: {
    height: responsiveHeight(5),
    width: responsiveWidth(5),
    left: 15,
  },
  HeaderTitle: {
    color: theme.colors.primary,
    width: 128,
    fontSize: 16,
    left: 30,
    fontFamily: 'Inter-Bold',
  },
  BottomButton: {
    width: responsiveWidth(90),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    height: responsiveHeight(6),
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(3),
  },
  buttonTextBottom: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Inter-Bold',
  },
  Status: {
    backgroundColor: '#E5E5E5',
  },
  Body: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  FormTitle1: {
    marginTop: 20,
  },
  Input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: responsiveHeight(6),
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  CountryLogo: {
    height: 35,
    width: 28,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
    elevation: 5,
  },
  MobileInput: {
    width: '80%',
    color: '#000',
  },
  ErrorMessage: {
    color: 'red',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'Inter-Regular',
    marginVertical: 5,
  },
  ConfirmModal: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    padding: 20,
  },
  ModalHeader: {
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
  ModalText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Inter-Bold',
    marginTop: 20,
  },
  ModalBody: {
    flexDirection: 'row',
    marginTop: 40,
    alignSelf: 'flex-end',
  },
  ModalEditButton: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Inter-Regular',
  },
  ModalConfirmButton: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Inter-Regular',
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
