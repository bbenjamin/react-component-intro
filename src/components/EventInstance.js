import './EventInstance.css';
import EventStarButton from "./EventStarButton";
import { useState } from "react";


const EventInstance = (props) => {
    const [isStarred, setIsStarred] = useState(false);
    return <div className={`event  ${isStarred ? 'starred-event' : ''}`}>
        {props.children}
        <EventStarButton
            handMeDownSetStarStateFunction={setIsStarred}
            tossedOverIsStarred={isStarred}
            {...props}
        />
    </div>;
}

export default EventInstance;