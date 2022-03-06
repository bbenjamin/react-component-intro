import './App.css';
import EventsListing from "./components/EventsListing";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  fetch('https://events.umich.edu/day/json')
      .then((response) => response.json())
      .then((json) => setEvents(Object.values(json)));
  return (
      <main>
        <h1>Events at University of Michigan</h1>
        <EventsListing events={events} />
      </main>
  );
}

export default App;
