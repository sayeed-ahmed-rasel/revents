import React, { Component } from "react";
import { Image, List } from "semantic-ui-react";
export class eventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image
          as="a"
          circular
          size="mini"
          src="https://randomuser.me/api/portraits/thumb/men/11.jpg"
        />
      </List.Item>
    );
  }
}

export default eventListAttendee;
