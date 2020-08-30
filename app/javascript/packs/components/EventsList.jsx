import React from 'react';
import PropTypes from 'prop-types';

import EventsListItem from './EventsListItem';

class EventsList extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.shape({
          title: PropTypes.string.isRequired,
          start_datetime: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired
        })
      })
    )
  };

  render() {
    return (
      <div className="events-list">
        { this.props.events.map((event) => {
          return (<EventsListItem event={event}/>);
        })}
      </div>
    );
  }
}

export default EventsList;
