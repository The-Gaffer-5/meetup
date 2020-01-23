import React, { Component } from 'react'

class EventSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleInputChanged = (e) => {
        const inBox = e.target.value
        this.setState({query: e.target.value})
        this.props.setSearchState(inBox)
        this.props.searchEvents(inBox)
        if(document.getElementById('event-searchbar').value === '') {
            this.props.resetSearch()
        }
    }

    render(){
        return (
            <div className="EventSearch">
                <input
                    type="text"
                    id="event-searchbar"
                    className="event-searchbar"
                    placeholder="Search Events..."
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}

export default EventSearch;