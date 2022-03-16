import './EventStarButton.css'
import {useEffect, useCallback, useMemo} from "react";

const EventStarButton = (props) => {
    const { tossedOverIsStarred, handMeDownSetStarStateFunction, title, updateStarredEvents } = props;

    const starButtonHandler = (e) => {
        handMeDownSetStarStateFunction((previousIsStarred) => {
            updateStarredEvents((previousList) => {
                // If the previous value was true, we're removing
                // the item
                if (previousIsStarred) {
                    // Use array filter to remove anything matching the title.
                    return previousList.filter((value) => value !== title);
                } else {
                    // You could also
                    // previousList.push(description)
                    // return previousIsStarred;
                    return [...previousList, title]
                }
            });
            return !previousIsStarred;
        });
    }

    const getStarMessage = () => {
        if (tossedOverIsStarred) {
            return 'U GOT STAR' + Date.now();
        } else {
            return 'add star' + Date.now();
        }
    }

    // useMemo is advanced... you won't need to know this for anything
    // you're graded on. This is a way to prevent React from rendering
    // when it doesn't have to
    const theStarMessage = useMemo(() => {
        if (tossedOverIsStarred) {
            return 'U GOT STAR' + Date.now();
        } else {
            return 'add star' + Date.now();
        }
    }, [tossedOverIsStarred])

    return (
      <button onClick={starButtonHandler} className={tossedOverIsStarred ? 'starred' : ''}>
          ⭐<div>️{getStarMessage()}</div>
      </button>
    );
}

export default EventStarButton;