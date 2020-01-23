import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    // constructor(props) {
    //     super(props);

    // }

    onChangeSelectedEvent(theId, ranNum) {
        this.props.changeSelEv(theId, ranNum)
    };


    render() {    
        return(
            <div className="EventList" >
                {this.props.events.map(event =>
                <div className="large-event-holder" key={event.id} >
                    <div className="event-holder" key={event.id}>
                        <Event 
                            event={event} 
                            logFunc={(theId, ranNum) => this.onChangeSelectedEvent(theId, ranNum)}
                        />
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default EventList;
