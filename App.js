import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import Card from './src/components/Card';
import userData from './assets/data/users.js';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler'

export default function App() {

  const { width: screenWidth} = useWindowDimensions()

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(
    translateX.value,
    [0, width],
    [0, 60]) + 'deg')

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,

      },
      {
        rotate: 'rotate.value',
      }
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value
    },    
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX
    },
    onEnd: () => {
      console.warn('Touuch ended')
    }
  })

  const user = userData[1];

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <Card
            key={Math.floor(Math.random(1) * 1000000000)}
            name={user.name}
            image={user.image}
            bio={user.bio}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
