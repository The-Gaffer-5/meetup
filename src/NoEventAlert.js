import React, { Component } from 'react'


class NoEventAlert extends Component {

        render() {
            if(this.props.events.length === 0 && this.props.search.length !== 0 && this.props.city.length > 0) {
                return(
                    <div>
                        <div className='no-event-warning'>
                            <h1>Sorry, there aren't any groups matching "{this.props.search}" in {this.props.city.city}.</h1>
                            <h2>Maybe widen the mile range.</h2>
                        </div>
                    </div>
                )
            } else if (this.props.events.length === 0 && this.props.search.length === 0 && this.props.city.length > 0){
                return(
                    <div>
                        <div className='no-event-warning'>
                            <h1>Sorry, there aren't any groups within {this.props.miles} miles of {this.props.city.city}.</h1>
                            <h2>Maybe widen the mile range.</h2>
                        </div>
                    </div>
                )
            } 
            else if (this.props.city.length === 0) {
                return(
                    <div>
                        <div className='no-event-warning'>
                            <h1>Loading Events...</h1>
                        </div>
                    </div> 
                )
           } 
            else {
                return null
            }

        }


}


export default NoEventAlert