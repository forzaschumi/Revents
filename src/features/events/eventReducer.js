import { sampleData } from '../../app/api/sampleData';
import { CREATE_EVENTS, UPDATE_EVENTS, DELETE_EVENTS } from './eventsConstant';

const initialState = {
  events: sampleData,
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENTS:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENTS:
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };
    case DELETE_EVENTS:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== payload)],
      };
    default:
      return { state };
  }
}
