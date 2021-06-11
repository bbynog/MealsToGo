import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import { Text } from '../../../components/typography/text.component';

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;
export const Info = styled.View`
  padding: ${props => props.theme.space[2]};
  margin-left: ${props => props.theme.space[2]};
`;
export const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.caption};
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Star = styled(SvgXml)`
  width: 20px;
  height: 20px;
`;

export const Open = styled(SvgXml)`
  width: 20px;
  height: 20px;
`;
