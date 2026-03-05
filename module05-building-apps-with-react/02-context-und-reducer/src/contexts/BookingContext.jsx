import { createContext, use, useReducer } from 'react';

export const BookingContext = createContext();

const initialState = {
  destinations: [],
  premium: false,
};

function reducer(bookingState, action) {
  console.log('reducer func: ', { bookingState, action });

  switch (action.type) {
    case 'ADD_BOOKING': {
      const newDestinations = [...bookingState.destinations, action.payload];
      const premium = newDestinations.length >= 3;
      return {
        ...bookingState,
        destinations: newDestinations,
        premium,
      };
    }
    case 'REMOVE_DESTINATION': {
      const newDestinations = bookingState.destinations.filter((d) => d !== action.payload);
      const premium = newDestinations.length >= 3;

      return { ...bookingState, destinations: newDestinations, premium };
    }
    default:
      throw new Error(`Unkown action type: ${action.type}`);
  }
}

export default function BookingContextProvider({ children }) {
  const [bookingState, dispatch] = useReducer(reducer, initialState);

  console.log('current bookingState: ', bookingState);

  function addDestination(destinationSlug) {
    dispatch({ type: 'ADD_BOOKING', payload: destinationSlug });
  }

  function removeDestination(destinationSlug) {
    dispatch({ type: 'REMOVE_DESTINATION', payload: destinationSlug });
  }

  return (
    <BookingContext value={{ bookingState, addDestination, removeDestination }}>
      {children}
    </BookingContext>
  );
}

export function useBooking() {
  return use(BookingContext);
}

// // useState
// setItems(...)
// setIsFull(...)
// setIsLoading(...)
// setError(...)
// // or useState with an Object state {}
// setState(prev=> ({...prev, loading: true}))
// setState(prev=> ({...prev, items: data}))
// setState(prev=> ({...prev, loading: false}))

// // useReducer
// dispatch({type: "fetch_start"})
// dispatch({type: "fetch_success", payload: data})
// dispatch({type: "fetch_error", payload: error})
// all logic lives in the reducer / event driven development
