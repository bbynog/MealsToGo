import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

// Styles
const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  padding: ${props => props.theme.space[2]};
  margin-left: ${props => props.theme.space[2]};
`;
const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Foodz',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = 'Epitácio Avenue',
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
