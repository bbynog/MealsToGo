import React from 'react';
import { Text } from '../../../components/typography/text.component';
import { View, Platform } from 'react-native';
import { SafeArea } from '../../../components/utils/safe-area';

export const SettingsScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};
