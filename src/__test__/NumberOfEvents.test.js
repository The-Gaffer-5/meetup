import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents />, component', () => {
    let NumberWrapper;
    beforeAll(() => {
        NumberWrapper = shallow(<NumberOfEvents />)
    })
    test('textbox renders', () => {
        expect(NumberWrapper.find('.numberOfEventsClass')).toHaveLength(1);
    })
    test('number of requests is generated', () => {
        expect(NumberWrapper.find('.numberOfEvents_entered')).toHaveLength(1);
    })
    test('render input to state', () => {
        const inputNumber = NumberWrapper.state('numberOfEvents');
        expect(NumberWrapper.find('.numberOfEvents_entered').prop('value')).toBe(inputNumber)
    })
})