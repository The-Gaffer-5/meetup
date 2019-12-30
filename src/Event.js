import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredevents: [],
            showDetails: false,
            backgroundNum: ''
        }
    }
    componentDidMount() {
        this.generateBkgd()
    } 
    detailHide() {
        this.setState({ showDetails:false })
    }
    generateBkgd = () => {
        const ranNum = Math.floor(Math.random() * 12) + 1
        this.setState({backgroundNum: ranNum})
    }

    getData = () => {
        const rsvped = this.props.event.yes_rsvp_count;
        const max = this.props.event.rsvp_limit;
        const openings = max - rsvped

        return (
            [
                {"name": "Reserved", "value": rsvped},
                {"name": "Spots Left", "value": openings}
            ]
        )
    }
    makeModal(theId, ranNum) {
        this.props.logFunc(theId, ranNum)
    }
    render(){
        return(
            <div className="event" style={{backgroundImage: 'url(default' + this.state.backgroundNum + '.jpg)'}} onClick = {() => this.makeModal(this.props.event.id, this.state.backgroundNum)}>
                <div className="name-area">
                    <h2 className="event-name">{this.props.event.name}</h2>
                </div>              
            </div>
        )
    }
}
export default Event;