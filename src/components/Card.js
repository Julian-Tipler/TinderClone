import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Card(props) {
  const {name, image, bio} = props
    return (
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: `${image}`,
          }}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>
              {bio}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 15,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});