import './EventInstance.css';
import EventStarButton from "./EventStarButton";

const EventInstance = (props) => {
    return <div className='event'>
        {props.children}
        <EventStarButton />
    </div>;
}

export default EventInstance;