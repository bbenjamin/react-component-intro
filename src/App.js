import './App.css';
import EventsListing from "./components/EventsListing";
import { useState, useEffect } from "react";

function App() {
    const [umichEvents, setUmichEvents] = useState([]);

    // useEffect is something called each time a component updates. You can make it run
    // only once (on page load) instead of EVERY update my making the second
    // argument an empty array. We do this so we only get the Umich events data
    // once.
    // @see https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        fetch('https://events.umich.edu/day/json')
            .then((response) => response.json())
            .then((json) => setUmichEvents(Object.values(json)));
        // Notice below that the second argument is an array, which effectively says
        // "only do this on initial load".
        //  - Were there no second argument, this useEffect would be called on every
        // component update.
        // - If you add items to the array, it's effectively saying
        //   "only call this useEffect" if this (item in array) changes.
    }, []);

  return (
      <main>
        <h1>Events at University of Michigan</h1>
        <EventsListing events={umichEvents} />
      </main>
  );
}

export default App;
