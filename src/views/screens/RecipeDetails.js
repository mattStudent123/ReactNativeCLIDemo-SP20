import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../../styles/global';

// console.log(details.ingredients[0]);

export default function RecipeDetails({navigation}) {
  const copy = `

**Terms and Conditions:**
1. This application will not be responsible for any damaged experienced by the user itself.
2. This application should not be used to as a health plan.
3. This application is purely a guide for healthy eating and should not be fully relied.
4. Unauthorized distribution of this application is prohibited and consequences will be dire.


`;
  const [liked, setLiked] = useState(false);

  const [details, setPeople] = useState([
    {
      ingredients: [
        '500g macaroni',
        '1 garlic',
        '1 onion',
        '2000ml water',
        '1/2 tbsp salt',
        '3/4 tsp pepper',
      ],
      method: ['Frying'],
      directions: [
        'Delicious pasta with a tasty sauce complemented with organic garlic. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex',
      ],
      source: ['https://www.crowdedkitchen.com/vegan-mac-and-cheese/'],
      title: 'Vegan Macaroni',
      key: 0,
    },
    {
      ingredients: [
        '500g macaroni',
        '1 garlic',
        '1 onion',
        '2000ml water',
        '1/2 tbsp salt',
        '3/4 tsp pepper',
      ],
      method: ['Frying'],
      directions: [
        'Delicious pasta with a tasty sauce complemented with organic garlic. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex',
      ],
      source: ['https://www.crowdedkitchen.com/vegan-mac-and-cheese/'],
      title: 'Vegan Macaroni',
      key: 1,
    },
  ]);

  function displayIngredients(id) {
    return details[id].ingredients.map(ing => {
      return (
        <View>
          <Text style={styles.item}>{`\u2022 ${ing}`}</Text>
        </View>
      );
    });
  }

  function displayCookingMethod(id) {
    return details[id].method.map(method => {
      return (
        <View>
          <Text style={styles.item}>{`\u2022 ${method}`}</Text>
        </View>
      );
    });
  }

  function displayDirections(id) {
    return details[id].directions.map(direction => {
      return (
        <View>
          <Text style={styles.item}>{`${++i}. ${direction}`}</Text>
        </View>
      );
    });
  }

  function displaySource(id) {
    return details[id].source.map(src => {
      return (
        <View>
          <Text style={styles.item}>{`\u2022 ${src}`}</Text>
        </View>
      );
    });
  }

  let i = 0;
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Ionicons
          name="chevron-back-sharp"
          size={36}
          color="#96FF00"
          style={{margin: 10}}
          // onPress={() => navigation.navigate('Profile')}
          onPress={() => navigation.goBack(null)}></Ionicons>
        <Pressable onPress={() => setLiked(isLiked => !isLiked)}>
          <MaterialCommunityIcons
            name={liked ? 'heart' : 'heart-outline'}
            size={32}
            color={liked ? 'red' : 'black'}
            style={{marginRight: 10, marginTop: 10}}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/veganMacaroni.png')}
            style={styles.veganImg}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.headerOne}>{details[0].title}</Text>
          </View>

          <View>
            <Text style={styles.subTitle}>{'Ingredients'}</Text>

            <View style={styles.ingContainer}>{displayIngredients(0)}</View>
          </View>

          <View>
            <Text style={styles.subTitle}>{'Cooking method'}</Text>

            <View style={styles.ingContainer}>{displayCookingMethod(0)}</View>
          </View>

          <View>
            <Text style={styles.subTitle}>{'Directions'}</Text>

            <View style={styles.ingContainer}>{displayDirections(0)}</View>
          </View>
          <View>
            <Text style={styles.subTitle}>{'Source'}</Text>

            <View style={styles.ingContainer}>{displaySource(0)}</View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
  detailsContainer: {
    padding: 20,
    rowGap: 20,
    color: 'black',
  },
  imgContainer: {
    alignItems: 'center',
  },
  logoImg: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 24,
    width: 250,
    height: 250,
  },
  veganImg: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 24,
    width: '100%',
    height: 300,
  },
  ingContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  item: {
    // padding: 5,
    fontSize: 16,
    marginBottom: 2,
    color: 'black',
    // marginTop: 5,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  headerOne: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
    marginBottom: 10,
  },
});
