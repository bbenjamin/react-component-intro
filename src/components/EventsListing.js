import './EventsListing.css';
import EventInstance from "./EventInstance";
import EventDateTime from "./EventDateTime";
import EventInfo from "./EventInfo";

const EventsListing = (props) => {
    if (!props.events.length) {
        return <div className='events--loading'>Loading....</div>;
    } else {
        return (<div className='events'>
                {props.events.map((eventInstance, index) => (
                    <EventInstance key={index}>
                        <EventDateTime
                            dateStart={eventInstance.date_start}
                            timeStart={eventInstance.time_start}
                            timeEnd={eventInstance.time_end}
                        />
                        <EventInfo title={eventInstance.event_title} description={eventInstance.description} />
                    </EventInstance>
                ))}
            </div>
        );
    }

}

export default EventsListing;

