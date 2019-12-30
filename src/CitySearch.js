import React, {Component} from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        infoText: ''
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        getSuggestions(value).then(suggestions => {
            this.setState({ suggestions });

            if (value && suggestions.length === 0) {
                this.setState({
                    infoText: 'We cannot find the city you are looking for!'
                });
            } else {
                this.setState({
                    infoText: '',
                });
            }
        })
    
    }
    handleItemClicked = (value, lat, lon) => {
        this.setState({ query: value, suggestions: [] });
        this.props.updateEvents(lat, lon);
        document.getElementById('search-popup-container').style.display = 'none';
        document.getElementById('city-searchbar').value = ''      
    }
    render() {
        return(
            <div>
                <div className="CitySearch" id="CitySearch">
                    <input
                        type="text"
                        id="city-searchbar"
                        className="city-searchbar"
                        placeholder="City"
                        // value={this.state.query}
                        onChange={this.handleInputChanged}
                    />
                    <ul className="suggestions">
                        <InfoAlert className="city-info-alert" text={this.state.infoText} />
                        {this.state.suggestions.map(item => 
                            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>    
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CitySearch;