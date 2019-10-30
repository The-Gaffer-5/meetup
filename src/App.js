import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';


class App extends Component {

  componentDidMount(){
    getEvents().then(response => this.setState({ events: response }));

  }

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => 
        this.setState({ events, page})
        );
    } else {
      getEvents(this.state.lat, this.state.lon, page).then(events => 
        this.setState({events}))
    }
    //console.log(this.state.page)
    
  }
  
  render() {
    return (
        <div className="App">
          <h1>FIND AN EVENT!!!</h1>
            <CitySearch updateEvents={this.updateEvents}/>
            <NumberOfEvents updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
