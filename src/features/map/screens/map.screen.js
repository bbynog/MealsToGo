import React from 'react';
import { Text } from '../../../components/typography/text.component';
import { View } from 'react-native';
import { SafeArea } from '../../../components/utils/safe-area';

export const MapScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map integration!</Text>
      </View>
    </SafeArea>
  );
};
