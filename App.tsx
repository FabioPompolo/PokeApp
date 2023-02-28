/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import styled from 'styled-components/native';

export function App(): JSX.Element {

  return (
    <SafeAreaView>
      <TextStyled>
        Boa tarde pessoal
      </TextStyled>
    </SafeAreaView>
  );
}

const TextStyled = styled.Text`
  color: red;
`;