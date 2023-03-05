/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView, View, StyleSheet, Text
} from 'react-native';

import styled from 'styled-components/native';
import { PokemonCard } from './pokemon-card';

export function App(): JSX.Element {

  return (
    <View style={{ flex: 1, padding: 8, backgroundColor: "#303943" }}>
      <FlatList
        data={pokedex}
        renderItem={({ item, index }) => (
          <PokemonCard 
            name="bulbassaur" 
            imageUrl='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' 
            types={["grass", "poison"]} 
            withMarginRight={index % 2 === 0}
          />
        )}
        numColumns={2}
        ItemSeparatorComponent={PokemonCardSeparator}
      />
    </View>
  );
}



const PokemonCardSeparator = styled.View`
  height: 16px;
`;

interface PokedexItem {
  id: string;
  title: string;
}
const pokedex: PokedexItem[] = [
  {
    id: "0001",
    title: "Bulbasaur"
  },
  {
    id: "0002",
    title: "Ivysaur"
  },
  {
    id: "0003",
    title: "Venusaur"
  },
  {
    id: "0004",
    title: "Charmander"
  },
  {
    id: "0005",
    title: "Charmeleon"
  },
  {
    id: "0006",
    title: "Charizard"
  },
];
