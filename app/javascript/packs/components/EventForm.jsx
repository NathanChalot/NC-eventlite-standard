import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class EventForm extends React.Component {
  /*
  ** I prefer, for now, to set state property like that instead of in the
  ** constructor.
  ** TODO -> check what is the best practice
  */
  state = {
    title: "",
    start_datetime: "",
    location: ""
  }

  static propTypes = {
    addNewEvent: PropTypes.func.isRequired
  }

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
    axios({
      method: 'POST',
      url: '/events',
      data: {
        event: this.state
      },
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    }).then((response) => {
      this.props.addNewEvent(response.data);
    }).catch((error) => {
      console.log(error)
    });
  };

  render() {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form onSubmit={this.createNewEvent}>
          <input
            type="text"
            name="title"
            placeholder="Hello world"
            value={this.state.title}
            onChange={this.handleInput}/>
          <input
            type="text"
            name="start_datetime"
            placeholder="Date"
            value={this.state.start_datetime}
            onChange={this.handleInput}/>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleInput}/>
          <button type="submit">Create Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
