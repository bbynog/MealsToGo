import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { SearchContainer, RestaurantList } from './restaurants.screen.styles';
import { SafeArea } from '../../../components/utils/safe-area';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [counter, setCounter] = useState(0);

  const onChangeSearch = query => setSearchQuery(query);

  const increment = () => {
    setCounter(counter + 1);
  };
  console.log(counter);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: '1' },
          { name: '2' },
          { name: '3' },
          { name: '4' },
          { name: '5' },
          { name: '6' },
          { name: '7' },
          { name: '8' },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
      />
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>Click Me: {counter}</Text>
      </TouchableOpacity>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
