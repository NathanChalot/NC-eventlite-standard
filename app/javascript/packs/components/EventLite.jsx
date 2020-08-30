import React from 'react';
import ReactDOM from 'react-dom';

class EventLite extends React.Component {
  /*
  ** To me loading events in state after getting them through
  ** props is weird : either a bad practice or simply ugly ?
  ** TODO => findout && do it another way
  */
  state = {
    events: this.props.events
  };

  render() {
    return (
      <div>
        { this.state.events.map((event) => {
          return (
            <p>{event.title}</p>
          );
        })}
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
