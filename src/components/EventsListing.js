import './EventsListing.css';
import EventInstance from "./EventInstance";
import EventDateTime from "./EventDateTime";
import EventInfo from "./EventInfo";
import {useState} from "react";
import StarredEvents from "./StarredEvents";

const EventsListing = (props) => {
    // This will store the names of the events that have been starred.
    const [starredEvents, setStarredEvents] = useState([]);

    if (!props.events.length) {
        return <div className='events--loading'>Loading....</div>;
    } else {
        return (
            <>
                <StarredEvents starredList={starredEvents} />
                <div className='events'>
                    {props.events.map((eventInstance, index) => (
                        <EventInstance
                            key={index}
                            title={eventInstance.event_title}
                            updateStarredEvents={setStarredEvents}
                        >
                            <EventDateTime
                                dateStart={eventInstance.date_start}
                                timeStart={eventInstance.time_start}
                                timeEnd={eventInstance.time_end}
                            />
                            <EventInfo title={eventInstance.event_title} description={eventInstance.description} />
                        </EventInstance>
                    ))}
                </div>
            </>
        );
    }

}

export default EventsListing;

