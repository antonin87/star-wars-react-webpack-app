import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import mockVehicule from '../../dist/mocks/vehicule.json'
import VehiculeItem from './VehiculeItem';
configure({ adapter: new Adapter() });

test('Vehicule DOM rendering', () => {
  const vehicule = shallow(<VehiculeItem vehicule={mockVehicule} cardVehicules={[]} />);
  expect(vehicule.find("img")).toHaveLength(1);

});