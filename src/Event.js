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
    render(){
        return(
            <div>
                <button className="details" onClick = {() => this.detailShow()} />
            </div>
        )
    }
}
export default Event;
