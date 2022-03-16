import './EventStarButton.css'
import {useEffect, useCallback, useMemo} from "react";

const EventStarButton = (props) => {
    const { tossedOverIsStarred, handMeDownSetStarStateFunction, title, updateStarredEvents } = props;

    const starButtonHandler = (e) => {
        updateStarredEvents((previousList) => {
            // If starred is currently true, that means we are switching it to
            // false and should remove the item.
            if (tossedOverIsStarred) {
                // Use array filter to remove anything matching the title.
                return previousList.filter((value) => value !== title);
            } else {
                // You could also
                // previousList.push(description)
                // return previousIsStarred;
                return [...previousList, title]
            }
        });
        handMeDownSetStarStateFunction((previousIsStarred) => {

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
          ⭐<div>️{theStarMessage}</div>
      </button>
    );
}

export default EventStarButton;