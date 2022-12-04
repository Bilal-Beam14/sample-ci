import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>{props.lol}</Text>
      </View>
      <View style={styles.container3}>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

export default Home;
