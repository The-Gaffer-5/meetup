import React, { Component } from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer, Legend, Line, Tooltip } from 'recharts';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            showDetails: false,
            selectedEvent:''
        }
    }

    getData = () => {
        const rsvped = this.props.selectedModalEvent.yes_rsvp_count;
        const max = this.props.selectedModalEvent.rsvp_limit;
        const openings = max - rsvped

        return (
            [
                {"name": "Reserved", "value": rsvped},
                {"name": "Spots Left", "value": openings}
            ]
        )
    }
    closeIt = (e) => {
        if(e.target.className === 'modal'){
            this.props.close()
        }   
    }
    insertingHTML() {
        const desc = this.props.selectedModalEvent.description
        const notAvailable = '<p>n/a</p>'
        if(desc !== undefined){
            return {__html: desc}
        } else {
            return {__html: notAvailable}
        }
        
    }

    render(){
        const { selectedModalEvent } = this.props;
        let colors = ['#00465d', '#207996']
        if( selectedModalEvent.length !== 0 ) {
            return(
                <div className="modal" onClick = {(e) => this.closeIt(e)}>
                    <div className="modal-content">
                        <div className="the-x" onClick = {() => this.props.close()}>X</div>
                        <div className="modal-top-half">
                            <div className="modal-img" style={{backgroundImage: 'url(default' + this.props.selectedModalEvent.backgroundImg + '.jpg)'}}></div>
                            <div className="modal-event-info">
                                <h1 className="modal-event-name">{this.props.selectedModalEvent.name}</h1>
                                <div className="modal-event-location">{this.props.selectedModalEvent.group.localized_location}</div>
                                <div className="modal-event-date">{this.props.selectedModalEvent.local_date}</div>
                                <a className="modal-event-link" href={this.props.selectedModalEvent.link} rel="noopener noreferrer" target='_blank'>Learn More...</a>
                            </div>
                        <div className="modal-bottom-half">
                            <div className="the-details">
                            {selectedModalEvent.yes_rsvp_count && selectedModalEvent.rsvp_limit ?
                            <ResponsiveContainer className="pie-container" height={250}>
                            <PieChart width={200} height={200}>
                              <Pie data={this.getData()} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                                {
                                  this.getData().map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                                  ))
                                }
                              </Pie>                            
                              <Tooltip />                            
                              <Legend className="the-legend" verticalAlign="top" height={36}>
                              <Line name="Attending" type="monotone" dataKey="rsvped" stroke="#8884d8" />
                              <Line name="Spots Open" type="monotone" dataKey="openings" stroke="#82ca9d" />
                              </Legend>                            
                            </PieChart>                        
                            </ResponsiveContainer>
                            : null}
                        </div>                        
                    </div>
                    <div className="modal-event-description">
                        <h3>Description</h3>
                        <div className="modal-the-description" dangerouslySetInnerHTML={this.insertingHTML()} />
                    </div>
                    </div>
                </div>
            </div>
            )
        } 
        else {
            return null
        }  
    }
}
export default Modal;