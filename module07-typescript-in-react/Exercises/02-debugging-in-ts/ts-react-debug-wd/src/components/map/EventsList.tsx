import type { Dispatch, SetStateAction } from 'react';
import type { ApiEvent } from '@/types';

type EventListProps = {
  events: ApiEvent[];
  setHighlightedEvent: Dispatch<SetStateAction<ApiEvent | null>>;
};

const EventsList = ({ events, setHighlightedEvent }: EventListProps) => {
  return events.map((event) => (
    <button
      key={event.id}
      className='card bg-base-100 shadow-xl cursor-pointer'
      onClick={() => setHighlightedEvent(event)}
    >
      <div className='card-body'>
        <h2 className='card-title'>{event.title}</h2>
        <p>{event.description}</p>
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </button>
  ));
};

export default EventsList;
