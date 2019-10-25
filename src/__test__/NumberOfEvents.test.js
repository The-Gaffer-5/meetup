import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents />, component', () => {
    let NumberWrapper = shallow(<NumberOfEvents />);
    test('textbox renders', () => {
        expect(NumberWrapper.find('.textbox')).toHaveLength(1);
    })
})