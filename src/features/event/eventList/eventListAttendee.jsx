import React, { Component } from "react";
import { Image, List } from "semantic-ui-react";
export class eventListAttendee extends Component {
  render() {
    const { attendees } = this.props;
    return (
      <List.Item>
        <Image as="a" circular size="mini" src={attendees.photoURL} />
      </List.Item>
    );
  }
}

export default eventListAttendee;
