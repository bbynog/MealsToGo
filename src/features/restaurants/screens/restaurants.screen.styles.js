import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.secondary};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
