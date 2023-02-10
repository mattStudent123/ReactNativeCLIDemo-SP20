import {StyleSheet} from 'react-native';
import COLORS from '../consts/colors';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 110,
  },
  formView: {
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  headerOne: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    fontFamily: 'Inter',
    // letterSpacing: ,
  },
  fieldsContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  fieldsTitle: {
    color: 'black',
  },
  forgotPasswordText: {
    marginBottom: 10,
    color: COLORS.darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  noAccountText: {
    textAlign: 'center',
    fontSize: 16,
  },
  signUpText: {
    color: COLORS.darkGreen,
    fontWeight: 'bold',
  },
  default: {},
});
