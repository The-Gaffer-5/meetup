import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import Modal from './Modal';
import CitySearch from './CitySearch';
import EventSearch from './EventSearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';
import NoEventAlert from './NoEventAlert';
import moment from 'moment';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


class App extends Component {

  componentDidMount(){
    getEvents().then((response) => {
      this.setState({ events: response.events, city: response.city, lat: response.city.lat, lon: response.city.lon})
      this.setDistance()
    });
    window.addEventListener('online', this.connectAlert());
  }

  state = {
    events: [],
    filteredEvents: [],
    allInRangeEvents: [],
    city: [],
    lat: null,
    lon: null,
    page: null,
    onlineStatus:'',
    selectedEventId: '',
    modalEvent: [],
    miles: 50,
    theSearch: ''
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
      getEvents(lat, lon, this.state.page).then((theResponse) => 
      {
        this.setState({ events: theResponse.events, city: theResponse.city, lat, lon})
        this.filterWithDistance(this.state.miles)
        this.searchTheEvents(this.state.theSearch)
      }
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((theResponse) => 
        {
          this.setState({ events: theResponse.events, city: theResponse.city, page})
          this.filterWithDistance(this.state.miles)
        }
        );
    } else {
      getEvents(this.state.lat, this.state.lon, page).then((theResponse) => 
        {
          this.setState({events: theResponse.events, city: theResponse.city})
          this.filterWithDistance(this.state.miles)
        }
        );
    }
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
  openPopup = (e) => {
    document.getElementById('popup-container').style.display = 'block'
  }
  closePopup = (e) => {
    if(e.target.id === 'popup-container' || e.target.className === "mile-list-item") {
      document.getElementById('popup-container').style.display = "none"
    }
  }
  openSearchPopup = (e) => {
    document.getElementById('search-popup-container').style.display = "block"
    document.getElementById('city-searchbar').focus()
  }
  closeSearchPopup = (e) => {
    if(e.target.id === 'search-popup-container') {
      document.getElementById('search-popup-container').style.display = 'none'
    }
  }
  setDistance = () => {
    this.setState({filteredEvents: []})
    const inRangeEvents = []
    this.state.events.forEach(event => {
      if((event.group.lat < this.state.lat + 0.72 && event.group.lat > this.state.lat - 0.72) && (event.group.lon < this.state.lon + 0.72 && event.group.lon > this.state.lon - 0.72) ) {
        inRangeEvents.push(event)
      }
    });
    this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
  }
  changeDistanceRadius = (e) => {
    const newDist = e.target.id
    this.setState({
      miles: newDist
    })
    this.filterWithDistance(newDist)
  }
  filterWithDistance = (radius) => {
    const numberRad = parseInt(radius)
    if (numberRad === 2) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 0.02 && event.group.lat > this.state.lat - 0.02) && (event.group.lon < this.state.lon + 0.02 && event.group.lon > this.state.lon - 0.02) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
      if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }    
    }
    if (numberRad === 5) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 0.07 && event.group.lat > this.state.lat - 0.07) && (event.group.lon < this.state.lon + 0.07 && event.group.lon > this.state.lon - 0.07) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
            if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }  
    }
    if (numberRad === 10) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 0.14 && event.group.lat > this.state.lat - 0.14) && (event.group.lon < this.state.lon + 0.14 && event.group.lon > this.state.lon - 0.14) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
            if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }  
    }
    if (numberRad === 25) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 0.36 && event.group.lat > this.state.lat - 0.36) && (event.group.lon < this.state.lon + 0.36 && event.group.lon > this.state.lon - 0.36) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
            if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }  
    }
    if (numberRad === 50) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 0.72 && event.group.lat > this.state.lat - 0.72) && (event.group.lon < this.state.lon + 0.72 && event.group.lon > this.state.lon - 0.72) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
            if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }  
    }
    if (numberRad === 100) {
      this.setState({filteredEvents: []})
      const inRangeEvents = []
      this.state.events.forEach(event => {
        if((event.group.lat < this.state.lat + 1.44 && event.group.lat > this.state.lat - 1.44) && (event.group.lon < this.state.lon + 1.44 && event.group.lon > this.state.lon - 1.44) ) {
          inRangeEvents.push(event)
        }
      });
      this.setState({filteredEvents: inRangeEvents, allInRangeEvents: inRangeEvents})
            if(this.state.theSearch !== '') {
        this.searchAfterMiles(this.state.theSearch, inRangeEvents)
      }  
    }
  }
  searchBarSetState = (query) => {
    this.setState({theSearch: query})
  }
  searchTheEvents = (inSearch) => {
    this.filterWithDistance(this.state.miles)
    let currentList = this.state.allInRangeEvents;
    let newList = [];
    newList = currentList.filter(event => {
      const lc = event.name.toString().toLowerCase();
      const filter = inSearch.toString().toLowerCase();
      return lc.includes(filter)
    })
      this.setState({filteredEvents: newList})
  }
  searchAfterMiles = (inSearch, theList) => {
    let currentList = theList;
    let newList = [];
    newList = currentList.filter(event => {
      const lc = event.name.toString().toLowerCase();
      const filter = inSearch.toString().toLowerCase();
      return lc.includes(filter)
    })
      this.setState({filteredEvents: newList})
  }
  changeSelectedEvent = (newId, ranNum) => {
    this.setState({
      selectedEventId: newId
    })
    const theEvents = this.state.events
    theEvents.forEach(theEvent => {
      if(newId === theEvent.id) {
        theEvent.backgroundImg = ranNum
        this.setState({
          modalEvent: theEvent })
      }
    });
  }
  eventSearchReset = () => {
    this.setState({theSearch: '', filteredEvents: this.state.allInRangeEvents})
  }
  closeModal = () => {
    this.setState({
      modalEvent:[]
    })
  }
  openChart = () => {
    document.getElementById('chart-modal-container').style.display = 'block'
  }
  closeChart = () => {
    document.getElementById('chart-modal-container').style.display = 'none'
  }
  closeChartModal = (e) => {
    if(e.target.id === 'chart-modal-container') {
      document.getElementById('chart-modal-container').style.display = 'none'
    }
  }  
  render() {
    return (
        <div className="App">         
          <header className='top-header'>
            <div className='meetup-logo'></div>
          </header>
          <h1 className="next-header">
            Find your next event
            <div className="offline-alert-div">
              <OfflineAlert className="offline-warning" text={this.state.onlineStatus}/>
            </div>
          </h1>
          <p className="how-many-events">{this.state.events.length} events near you</p>
          <div className="search-area-wrap">
            <div className="search-area">
              <EventSearch className="event-search" resetSearch={this.eventSearchReset} inSearch={this.state.theSearch} searchEvents={(inSearch) => this.searchTheEvents(inSearch)} setSearchState={(query) => this.searchBarSetState(query)}/>
              <div className="next-to-search">within <div className="miles" onClick={(e) => this.openPopup(e)}>{this.state.miles} miles</div> of <div className="city" onClick={(e) => this.openSearchPopup(e)}>{this.state.city.city}, {this.state.city.state === '' ? this.state.city.country : this.state.city.state}</div></div>
              <div className='chart-button' onClick={() => this.openChart()}>Chart of the week</div>
            </div>
          </div>
          <div className="popup-container" id="popup-container" onClick={(e) => this.closePopup(e)}>
            <div className="miles-popup" id="miles-popup">
              <div className="the-triangle"></div>
              <div id="2" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>2 miles</div>
              <div id="5" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>5 miles</div>
              <div id="10" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>10 miles</div>
              <div id="25" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>25 miles</div>
              <div id="50" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>50 miles</div>
              <div id="100" className="mile-list-item" onClick={(e) => this.changeDistanceRadius(e)}>100 miles</div>
            </div>
          </div>
          <div className="search-popup-container" id="search-popup-container" onClick={(e) => this.closeSearchPopup(e)}>
          <div className="search-the-triangle"></div>
            <div className="search-popup" id="search-popup">
              <CitySearch className="city-search-popup" updateEvents={this.updateEvents}/>
            </div>
          </div>
          <div className="chart-modal-container" id="chart-modal-container" onClick={(e) => this.closeChartModal(e)}>
            <div className="chart-modal">
              <div className="close-modal-x" onClick={() => this.closeChart()}>X</div>
              <h1 className="modal-title">Events per day</h1>
              <ResponsiveContainer height={400}>
                <ScatterChart className="the-chart" margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
                  <CartesianGrid />
                  <XAxis type="category" dataKey="date" name="date"/>
                  <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>   
          <NoEventAlert search={this.state.theSearch} events={this.state.filteredEvents} city={this.state.city} miles={this.state.miles}/>
          <EventList events={this.state.filteredEvents} changeSelEv={(theId, ranNum) => this.changeSelectedEvent(theId, ranNum)} />
          <Modal selectedModalEvent={this.state.modalEvent} selectedEventId={this.state.selectedEventId} close={() => this.closeModal()}/>    
          <NumberOfEvents updateEvents={this.updateEvents}/>  
        </div>
    );
  }
}
export default App;
