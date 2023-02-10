import React, {useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useScrollToTop} from '@react-navigation/native';
// import BottomNav from '../components/bottomNav';

import {
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
} from 'react-native';

// Before rendering any navigation stack
import {enableScreens, enableFreeze} from 'react-native-screens';

const VerticalCard = ({item, navigation, nav, press}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#F3F4F8"
      onPress={() => nav.navigate('RecipeDetails')}>
      <View style={[styles.verticalCard, styles.vertcard]}>
        <Image
          style={styles.verticalCard.verticalCardImg}
          source={{uri: item.image}}
        />
        <View style={[styles.recipeDetails, styles.recipeDetails.vertical]}>
          <View>
            <Text numberOfLines={1} style={styles.recipeName}>
              {item.name}
            </Text>
            <Text numberOfLines={3} style={styles.recipeDescription}>
              {item.description}
            </Text>
          </View>
          <View style={styles.recipeLikeContainer}>
            <Text style={styles.likeCount}>{item.likes}</Text>
            <SvgXml
              width="15"
              height="15"
              xml={
                '<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path fill="#ff2222" d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/></svg>'
              }
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
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
  vertcard: {
    // alignItems: 'center',
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
});

export default VerticalCard;
