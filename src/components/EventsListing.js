import './EventsListing.css';

const EventsListing = () => {
    return (<div className='events'>
            <div className='event'>
                <div className='event__datetime'>
                    <div className='event__date'>
                        3/6/2022
                    </div>
                    <div className='event__start-end'>
                        12AM-8PM
                    </div>
                </div>
                <div className='event__info'>
                    <h2>2022 U.S. Synchronized Skating Championships</h2>

                    <div className='event__description'>
                        Nationals - March 2-5 2022
                    </div>
                </div>
            </div>
            <div className='event'>
                <div className='event__datetime'>
                    <div className='event__date'>
                        3/6/2022
                    </div>
                    <div className='event__start-end'>
                        12AM - 4PM
                    </div>
                </div>
                <div className='event__info'>
                    <h2>Spring Break Training 2022</h2>

                    <div className='event__description'>
                        Spring break training for development in Fort Lauderdale
                    </div>
                </div>
            </div>
            <div className='event'>
                <div className='event__datetime'>
                    <div className='event__date'>
                        3/6/2022
                    </div>
                    <div className='event__start-end'>
                        4PM-6PM
                    </div>
                </div>
                <div className='event__info'>
                    <h2> UMS Live Session: Nicholas Phan, tenor</h2>

                    <div className='event__description'>
                        "Recognized as “one of the world’s most remarkable singers” (Boston Globe), lyric tenor and University of Michigan School of Music, Theatre & Dance alumnus Nicholas Phan leads a digital-exclusive recital of songs written by women composers. Phan returns to his hometown and alma mater to perform alongside distinguished U-M professor of piano Martin Katz, and student ensemble Calista Quartet. This UMS Live Session was recorded at the University of Michigan’s Rackham Auditorium in December 2021."
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsListing;

