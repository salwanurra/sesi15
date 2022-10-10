/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch('https://randomuser.me/api/?results=20');
        let {results} = await response.json();
        setData(results);
        return results;
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <ScrollView style={styles.sectionContainer}>
      <Text>List Data</Text>
      {data?.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.picture.thumbnail} style={styles.image} />
          <View>
            <Text style={styles.sectionTitle}>{item.name.title}. {item.name.first} {item.name.last}</Text>
            <Text>{item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}</Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    height: 40,
    width: 50,
  },
  card: {
    backgroundColor: '#70afce',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 7,
  },
});

export default App;
