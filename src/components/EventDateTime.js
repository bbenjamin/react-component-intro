import './EventDateTime.css';

const EventDateTime = (props) => {
    return (<div className='event__datetime'>
        <div className='event__date'>
            {new Date(props.dateStart).toLocaleDateString()}
        </div>
        <div className='event__start-end'>
            {props.timeStart}-{props.timeEnd}
        </div>
    </div>);
}

export default EventDateTime;