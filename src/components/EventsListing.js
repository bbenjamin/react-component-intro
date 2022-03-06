import './EventsListing.css';

const EventsListing = (props) => {
    return (<div className='events'>
            {props.events.map((eventInstance, index) => (
                <div className='event' key={index}>
                    <div className='event__datetime'>
                        <div className='event__date'>
                            {new Date(eventInstance.date_start).toLocaleDateString()}
                        </div>
                        <div className='event__start-end'>
                            {eventInstance.time_start}-{eventInstance.time_end}
                        </div>
                    </div>
                    <div className='event__info'>
                        <h2>{eventInstance.event_title}</h2>
                        <div className='event__description'>
                            {eventInstance.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventsListing;

