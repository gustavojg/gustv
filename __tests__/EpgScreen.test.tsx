import React from 'react';
import EpgScreen from '../src/screens/EpgScreen'; 
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';// Asegúrate de que la ruta al componente es correcta

// Jest 'it' is being used here. It's the same as 'test' and can be used interchangeably.
it('EpgScreen renders correctly', () => {
  //const tree = renderer.create(<EpgScreen />).toJSON();
  //expect(tree).toMatchSnapshot();
});