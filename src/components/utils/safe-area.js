import styled from 'styled-components/native/dist/styled-components.native.esm';
import { Platform, StatusBar } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
