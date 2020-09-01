import React from 'react';
import PropTypes from 'prop-types';


/* TODO : Convert that into a SFC (Stateless Functional Component) */
class EventForm extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    start_datetime: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    createNewEvent: PropTypes.func.isRequired,
  }


  render() {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form onSubmit={this.props.createNewEvent}>
          <input
            type="text"
            name="title"
            placeholder="Hello world"
            value={this.props.title}
            onChange={this.props.handleInput}/>
          <input
            type="text"
            name="start_datetime"
            placeholder="Date"
            value={this.props.start_datetime}
            onChange={this.props.handleInput}/>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={this.props.location}
            onChange={this.props.handleInput}/>
          <button type="submit">Create Event</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
