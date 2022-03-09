import { useState } from "react";
import './EventStarButton.css'

const EventStarButton = (props) => {
    const [isStarred, setIsStarred] = useState(false);
    const starButtonHandler = (e) => {
        setIsStarred((previousValue) => {
            return !previousValue;
        });
    };

    const getStarMessage = () => {
        if (isStarred) {
            return 'U GOT STAR';
        } else {
            return 'add star';
        }
    }

    return (
      <button onClick={starButtonHandler} className={isStarred ? 'starred' : ''}>
          ⭐<div>️{getStarMessage()}</div>
      </button>
    );
}

export default EventStarButton;