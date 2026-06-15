import React from 'react';
import { View, Text, Button } from 'react-native';

function FirstScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>First Screen</Text>
            <Button title="Go to App" onPress={() => navigation.replace('MainTab')} />
        </View>
    );
}

export default FirstScreen;