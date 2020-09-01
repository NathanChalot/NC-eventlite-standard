import React from 'react';

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

  render() {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form>
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
