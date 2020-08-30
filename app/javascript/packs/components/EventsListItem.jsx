import React from 'react';
import PropTypes from 'prop-types';

class EventsListItem extends React.Component {
  propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      start_datetime: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    })
  };

  render() {
    const formattedDate = new Date(this.props.event.start_datetime);

    return (
      <div className="event">
        <h2 className="event-title">{this.props.event.title}</h2>
        <div className="event-datetime">{formattedDate.toLocaleString()}</div>
        <div className="event-location">{this.props.event.location}</div>
      </div>
    );
  }
}

export default EventsListItem;
