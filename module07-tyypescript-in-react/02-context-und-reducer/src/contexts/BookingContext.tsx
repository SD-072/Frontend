import { createContext, type ReactNode, use, useReducer } from 'react';

type BookingState = {
  destinations: string[];
  premium: boolean;
};

type BookingContextType = {
  bookingState: BookingState;
  addDestination: (destinationSlug: string) => void;
  removeDestination: (destinationSlug: string) => void;
};

type AddAction = {
  type: 'ADD_BOOKING';
  payload: string;
};

type RemoveAction = {
  type: 'REMOVE_DESTINATION';
  payload: string;
};

type BookingAction = AddAction | RemoveAction;

const BookingContext = createContext<BookingContextType | null>(null);

const initialState: BookingState = {
  destinations: [],
  premium: false,
};

function reducer(bookingState: BookingState, action: BookingAction) {
  // console.log('reducer func: ', { bookingState, action });

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
      throw new Error(`Unkown action type: ${JSON.stringify(action)}`);
  }
}

export default function BookingContextProvider({ children }: { children: ReactNode }) {
  const [bookingState, dispatch] = useReducer(reducer, initialState);

  console.log('current bookingState: ', bookingState);

  function addDestination(destinationSlug: string) {
    dispatch({ type: 'ADD_BOOKING', payload: destinationSlug });
  }

  function removeDestination(destinationSlug: string) {
    dispatch({ type: 'REMOVE_DESTINATION', payload: destinationSlug });
  }

  return (
    <BookingContext value={{ bookingState, addDestination, removeDestination }}>
      {children}
    </BookingContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
  const context = use(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingContextProvider');
  }
  return context;
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
