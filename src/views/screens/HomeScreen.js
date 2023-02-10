import React, {useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useScrollToTop} from '@react-navigation/native';
// import HorizontalCard from '../components/cards/horizontalCard';
// import VerticalCard from '../components/cards/verticalCard';
import HorizontalCard from '../components/cards/horizontalCard';
import VerticalCard from '../components/cards/verticalCard';

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
import {jadenStyles} from '../../styles/jadenStyles';

const HomeScreen = ({navigation}) => {
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
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 910,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 451,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 300,
        },
        {
          name: 'Recipe name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image:
            'https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg',
          likes: 100,
        },
      ],
    },
    {
      title: 'All recipes',
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
      ],
    },
  ];

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <View style={jadenStyles.body}>
      <SectionList
        ref={ref}
        contentContainerStyle={jadenStyles.container}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        sections={DATA}
        renderSectionHeader={({section}) => (
          <>
            <Text style={jadenStyles.sectionTitle}>{section.title}</Text>
            {section.horizontal ? (
              <FlatList
                horizontal
                data={section.data}
                renderItem={({item}) => (
                  <HorizontalCard item={item} nav={navigation} />
                )}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) return null;
          else return <VerticalCard item={item} nav={navigation} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
