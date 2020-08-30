import React from 'react';
import ReactDOM from 'react-dom';

class EventLite extends React.Component {
  render() {
    return (
      <h2>COUCOU!</h2>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EventLite />,
    document.body.appendChild(document.createElement('div')),
  )
})
