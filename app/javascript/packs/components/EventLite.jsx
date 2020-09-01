import React from 'react';
import ReactDOM from 'react-dom';

import EventsList from './EventsList';
import EventForm from './EventForm';

class EventLite extends React.Component {
  /*
  ** To me loading events in state after getting them through
  ** props is weird : either a bad practice or simply ugly ?
  ** TODO => findout && do it another way
  */
  state = {
    events: this.props.events
  };

  addNewEvent = (event) => {
    const events = [event, ...this.state.events].sort( (a,b) => {
      return (new Date(a.start_datetime) - new Date(b.start_datetime));
    });

    this.setState({events: events});
  }

  render() {
    return (
      <div>
        <EventForm addNewEvent={this.addNewEvent}/>
        <EventsList events={this.state.events}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dataNode = document.getElementById('events-data');
  const events = JSON.parse(dataNode.getAttribute('data-events'));
  ReactDOM.render(
    <EventLite events={events}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
