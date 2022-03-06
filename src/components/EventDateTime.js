import './EventDateTime.css';
import { DateTime }  from "luxon";

const EventDateTime = (props) => {
    function convert(input) {
        return DateTime.fromFormat(input, 'HH:mm:ss').toLocaleString(DateTime.TIME_SIMPLE);
    }
    return (<div className='event__datetime'>
        <div className='event__date'>
            {new Date(props.dateStart).toLocaleDateString()}
        </div>
        <div className='event__start-end'>
            {convert(props.timeStart)}-{convert(props.timeEnd)}
        </div>
    </div>);
}

export default EventDateTime;