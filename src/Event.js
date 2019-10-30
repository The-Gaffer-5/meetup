import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            showDetails: false
        }
    }
    detailShow() {
        this.setState({ showDetails: true })
    }
    detailHide() {
        this.setState({ showDetails:false })
    }
    render(){
        return(
            <div className="event">
                <h2>{this.props.event.name}</h2>
                <button className="details" onClick = {() => this.detailShow()}>Show Details</button>
                {this.state.showDetails && (
                    <div className="the-details">{this.props.event.local_date}
                    <button className="noDetails" onClick = {() => this.detailHide()}>Hide</button>
                    </div>
                )}
            </div>
        )
    }
}
export default Event;
