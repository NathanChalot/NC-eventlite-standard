import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EventsList from './EventsList';
import EventForm from './EventForm';

class EventLite extends React.Component {
  /*
  ** To me loading events in state after getting them through
  ** props is weird : either a bad practice or simply ugly ?
  ** TODO => findout && do it another way
  */
  state = {
    events: this.props.events,
    title: "",
    start_datetime: "",
    location: ""
  };


  /*
  ** here we use computed property name
  ** see -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  ** otherwise we should do something like:
  ** const newState = {};
  ** newState[name] = value;
  ** this.setState(newState);
  */
  handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  createNewEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      title: this.state.title,
      start_datetime: this.state.start_datetime,
      location: this.state.location,
    }
    axios({
      method: 'POST',
      url: '/events',
      data: {
        event: newEvent
      },
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    }).then((response) => {
      this.addNewEvent(response.data);
    }).catch((error) => {
      console.log(error)
    });
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
        <EventForm
          title={this.state.title}
          start_datetime={this.state.start_datetime}
          location={this.state.location}
          handleInput={this.handleInput}
          createNewEvent={this.createNewEvent}/>
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
