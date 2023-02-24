import theme from '../../theme';
import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.containerBackground,
  },
  Status: {
    backgroundColor: theme.colors.primary,
  },
  Header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ArrowBack: {
    height: 24,
    width: 24,
  },
  BackButton: {
    height: 30,
    width: 30,
    left: 15,
  },
  HeaderTitle: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2.5),
    left: 30,
    fontFamily: 'Inter-Bold',
  },
  Body: {
    width: '95%',
    alignSelf: 'center',
  },
  logo: {
    height: 96,
    width: 96,
    top: 65,
  },
  MenuButton: {
    height: 30,
    width: 30,
    left: 15,
  },

  BellButton: {
    height: 30,
    width: 30,
    right: 10,
    position: 'absolute',
  },
  CarBox: {
    width: windowWidth / 2 - 40,
    height: 153,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 7.29,
    padding: 10,
    marginBottom: 15,
    marginTop: 10,
  },
  InfoBox: {
    height: '17%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  CarTitle: {
    color: theme.colors.textSubtitleColor,
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    lineHeight: 18,
    marginTop: 5,
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarImage: {
    height: '100%',
    width: '100%',
    borderRadius: 7.29,
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: theme.colors.placeholder,
  },
  CarImageLoader: {
    height: '30%',
    width: '30%',
    resizeMode: 'contain',
  },
  Vehicle: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Inter-Bold',
    width: '85%',
    alignSelf: 'center',
    color: 'black',
  },
  ViewAll: {
    fontSize: responsiveFontSize(1.6),
    marginTop: 22,
    position: 'absolute',
    right: 0,
    fontFamily: 'Inter-Regular',
  },
  Add: {
    color: '#fff',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Inter-Regular',
    lineHeight: 15,
  },
  BookingCarTitle: {
    width: '90%',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Inter-Bold',
    color: '#000',
  },
  BookingDate: {
    width: '90%',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  BookingCarImage: {
    height: '100%',
    width: '100%',
  },
  BookingLeft: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookingMiddle: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
  },
  BookingRight: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarImageBox: {
    backgroundColor: '#333333',
    height: 50,
    width: 50,
    borderRadius: 4,
    overflow: 'hidden',
  },
  Bookings: {
    marginTop: 20,
    width: '90%',
    height: 64,
    backgroundColor: '#BDBDBD',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  BookingButton: {
    backgroundColor: theme.colors.primary,
    height: 32,
    width: '80%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarBottom: {
    height: '22%',
    width: '100%',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarBottomRed: {
    height: 48,
    width: '100%',
    backgroundColor: '#FF3A3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  },
  SubTitle: {
    fontFamily: 'Inter-Bold',
    color: '#000',
    marginTop: -40,
  },

  subTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: responsiveFontSize(2.2),
    width: 200,
    textAlign: 'center',
  },

  selectionContainer: {
    width: '100%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  selectionContainerButton: {
    width: '50%',
    height: '100%',
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },

  selectionContainerButtonText: {
    fontSize: responsiveFontSize(2),

    fontFamily: 'Inter-Regular',
    textTransform: 'capitalize',
  },
});

export default styles;
