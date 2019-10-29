import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    const events = 
    {

            created: 1564129835000,
            duration: 7200000,
            id: 'qbmqfryznbjc',
            name: 'Shut Up & Write!™ Munich',
            rsvp_limit: 15,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1572075000000,
            local_date: '2019-10-26',
            local_time: '09:30',
            rsvp_open_offset: 'PT163H30M',
            updated: 1564129835000,
            utc_offset: 7200000,
            waitlist_count: 11,
            yes_rsvp_count: 15,
            venue: {
              id: 25966475,
              name: 'Bellevue München',
              lat: 48.160736083984375,
              lon: 11.563915252685547,
              repinned: false,
              address_1: 'Schleißheimer Str. 142a',
              city: 'München',
              country: 'de',
              localized_country_name: 'Germany'
            },
    }
    test('click on details should reveal details', () => {
        let EventWrapper = shallow(<Event event={events}/>);
        EventWrapper.setState({
            showDetails: false
        });
        EventWrapper.find('.details').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })
})