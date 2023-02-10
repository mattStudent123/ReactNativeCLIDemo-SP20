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

const LikedScreen = ({navigation}) => {
  const DATA = [
    {
      title: 'Liked recipes',
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
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        sections={DATA}
        renderSectionHeader={({section}) => (
          <Text style={jadenStyles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({item}) => <VerticalCard item={item} nav={navigation} />}
      />
    </View>
  );
};

export default LikedScreen;
