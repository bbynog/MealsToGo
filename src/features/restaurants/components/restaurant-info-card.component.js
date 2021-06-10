import React from 'react';
import styled from 'styled-components/native';
import { Image, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import open from '../../../../assets/open';
import star from '../../../../assets/star';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Foodz',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = 'Epitácio Avenue',
    isOpen = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="medium">
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </Spacer>
            <Spacer position="right" size="medium">
              {isOpen && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
