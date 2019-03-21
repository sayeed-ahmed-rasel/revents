import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Nav from "../../features/Nav/Navbar/NavBar";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Container className="main">
          <h1>Event List </h1>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
