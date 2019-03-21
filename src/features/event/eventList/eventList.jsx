import React, { Component } from "react";
import EventListItem from "./eventListItem";

export class eventList extends Component {
  render() {
    return (
      <div>
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    );
  }
}

export default eventList;
