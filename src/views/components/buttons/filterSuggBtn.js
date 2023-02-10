import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';
import Icons from 'react-native-vector-icons/Entypo';

const FilterSuggBtn = ({btn, txtColor, btnSize, title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        height: 35,
        width: 150,
        borderRadius: 100,
        backgroundColor: btn,
        marginVertical: 5,
        paddingLeft: 34,
        alignItems: 'center',
        // paddingHorizontal: 20,
        // rowGap: 15,
      }}>
      <Text style={{color: txtColor, fontSize: 16}}>{title}</Text>
      <Icons
        name={'cross'}
        color={'#777986'}
        size={20}
        style={{position: 'absolute', right: 12}}
        // style={{marginRight: 10}}
        // style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    padding: 6,
    borderRadius: 18,
  },
  body: {
    backgroundColor: '#f3f4f8',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    backgroundColor: '#f3f4f8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {},
  showTopButton: {
    opacity: 1,
    right: 10,
    bottom: 60,
    position: 'absolute',
    zIndex: 10,
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#b3b5bd',
    shadowOpacity: 0.2,
    overflow: 'hidden',
  },
  horizontalCard: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    marginStart: 15,
    marginBottom: 10,
    height: 200,
    width: 180,
    elevation: 4,
    horizontalCardImg: {
      width: '100%',
      height: '50%',
    },
  },
  verticalCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    height: 120,
    marginHorizontal: 15,
    width: 'auto',
    minWidth: '90%',
    elevation: 3,
    verticalCardImg: {
      width: '33%',
      height: '100%',
    },
  },
  recipeDescription: {
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#313639',
  },
  likeCount: {
    fontSize: 12,
    color: '#b3b5bd',
    textAlign: 'justify',
    fontFamily: 'Inter-ExtraBold',
    paddingRight: 5,
  },
  recipeName: {
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#101223',
  },
  recipeDetails: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    horizontal: {
      width: '100%',
      height: '50%',
    },
    vertical: {
      width: '67%',
      height: '100%',
    },
  },
  recipeLikeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sectionTitle: {
    marginStart: 15,
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#101223',
    marginTop: 20,
    marginBottom: 10,
  },
  clickTitle: {
    marginStart: 15,
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#9496A1',
    marginTop: 20,
  },
});
export default FilterSuggBtn;
