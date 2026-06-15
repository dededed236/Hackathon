import React from 'react';
import { View, Image } from 'react-native';

export default function TestImage() {
  return (
    <View>
      <Image source={require('../../assets/images/statgraph2.png')} style={{ width: 200, height: 100 }} />
    </View>
  );
}