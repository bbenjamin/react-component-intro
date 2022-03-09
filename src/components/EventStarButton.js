import './EventStarButton.css'

const EventStarButton = (props) => {
    const { tossedOverIsStarred } = props;

    const starButtonHandler = (e) => {
        props.handMeDownSetStarStateFunction((previousValue) => {
            return !previousValue;
        });
    };

    const getStarMessage = () => {
        if (tossedOverIsStarred) {
            return 'U GOT STAR';
        } else {
            return 'add star';
        }
    }

    return (
      <button onClick={starButtonHandler} className={tossedOverIsStarred ? 'starred' : ''}>
          ⭐<div>️{getStarMessage()}</div>
      </button>
    );
}

export default EventStarButton;