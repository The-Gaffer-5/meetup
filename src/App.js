import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert'
import moment from 'moment';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


class App extends Component {

  componentDidMount(){
    getEvents().then(response => this.setState({ events: response }));
    window.addEventListener('online', this.connectAlert());
  }

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    onlineStatus:''
  }


  connectAlert = () => {
    if(navigator.onLine === false) {
      this.setState({onlineStatus: 'You\'re currently offline!'});
    } else {
      this.setState({
        onlineStatus: '',
      })
    }
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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }
  
  render() {
    return (
        <div className="App">
          <h1>FIND AN EVENT!!!</h1>
          <OfflineAlert text={this.state.onlineStatus}/>
            <CitySearch updateEvents={this.updateEvents}/>
            <NumberOfEvents updateEvents={this.updateEvents}/>
            <ResponsiveContainer height={400}>
            <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="date" name="date"/>
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
