import React, { Component } from 'react';
import { ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: ''
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
        this.props.updateEvents(null, null, value);

        if(value <= 0) {
            this.setState({infoText: 'Must show atleast 1 event'})
        } else {
            this.setState({infoText: ''})
        }
    }
    render(){
        return(
            
            <div className="numberOfEventsClass">
                <ErrorAlert text={this.state.infoText} />
                <h5>Number of Events Shown</h5>
                <input
                type="number"
                className="numberOfEvents_entered"
                value={this.state.numberOfEvents}
                onChange={this.handleInputChanged}
                placeholder="32" />
            </div>
        )
    }
}

export default NumberOfEvents