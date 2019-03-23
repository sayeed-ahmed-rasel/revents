import React, { Component } from "react";
import EventListItem from "./eventListItem";

export class eventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {events.map((event) => {
          return <EventListItem key={event.id} event={event} />;
        })}
      </div>
    );
  }
}

export default eventList;
