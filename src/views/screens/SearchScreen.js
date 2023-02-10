import React, {useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useScrollToTop} from '@react-navigation/native';

import COLORS from '../../consts/colors';
import FilterSuggBtn from '../components/buttons/filterSuggBtn';

// import HorizontalCard from '../components/horizontalCard';
import VerticalCard from '../components/cards/verticalCard';

import {
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
} from 'react-native';

// Before rendering any navigation stack
import {enableScreens, enableFreeze} from 'react-native-screens';
import SearchFilterBtn from '../components/buttons/searchFilterBtn';
import {jadenStyles} from '../../styles/jadenStyles';
import RoundButton from '../components/buttons/roundButton';

const validate = () => {
  console.log('Your mim');
};

const SearchScreen = ({navigation}) => {
  const DATA = [
    {
      title: 'Popular',
      horizontal: true,
      data: [
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 1000,
          title: 'Cabbage',
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 910,
          title: 'Carrot',
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 451,
          title: 'Tomato',
        },
      ],
    },
    {
      title: 'Recipes found',
      horizontal: false,
      data: [
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 10,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 91,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 51,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 3,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 10,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 155,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 555,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 655,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 45,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 445,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 565,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 955,
        },
      ],
    },
  ];

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <View style={jadenStyles.body}>
      <View
        style={{
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
        }}>
        <Text style={styles.clickTitle}>
          {'Click + to add a search ingredient (max. 3 vegetables)'}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <RoundButton />

          <SectionList
            ref={ref}
            contentContainerStyle={jadenStyles.container}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={true}
            sections={DATA}
            renderSectionHeader={({section}) => (
              <>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({item}) => (
                      <View style={[styles.horizontalBtn, styles.btnCard]}>
                        <FilterSuggBtn
                          btn="rgb(220,220, 220)"
                          txtColor="#777986"
                          title={item.title}
                          onPress={validate}
                        />
                      </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({item, section}) => {
              if (section.horizontal) return null;
              // else return <VerticalCard item={item} />;
            }}
          />
        </View>
      </View>

      <View>
        <SectionList
          ref={ref}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={DATA}
          renderSectionHeader={({section}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={jadenStyles.sectionTitle}>{'Recipes found'}</Text>
              <SearchFilterBtn
                text={'Filter'}
                onPress={() => navigation.navigate('Filter')}
              />
            </View>
          )}
          renderItem={({item}) => <VerticalCard item={item} nav={navigation} />}
          ListFooterComponent={<View style={{height: 250}} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCard: {
    position: 'relative',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#b3b5bd',
    shadowOpacity: 0.2,
    overflow: 'hidden',
  },
  horizontalBtn: {
    marginStart: 15,
    marginBottom: 10,
  },

  clickTitle: {
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#9496A1',
    marginBottom: 10,
    marginTop: 20,
  },
});

export default SearchScreen;
