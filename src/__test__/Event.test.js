import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    test('click on details should reveal details', () => {
        let EventWrapper = shallow(<Event />);
        EventWrapper.setState({
            showDetails: false
        });
        EventWrapper.find('.details').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })
})