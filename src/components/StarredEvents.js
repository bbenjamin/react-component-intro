import './StarredEvents.css';

const StarredEvents = (props) => {
    const { starredList } = props;

    const starredEventsOutput = () => {
        if (starredList.length === 0) {
            return 'No starred events';
        } else {
            return starredList.join(', ');
        }
    }

    return <div className='starred-events event'>
        <h2>Starred Events</h2>
        <p>{starredEventsOutput()}</p>
    </div>
}

export default StarredEvents;