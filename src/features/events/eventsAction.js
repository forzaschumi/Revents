import { CREATE_EVENTS, UPDATE_EVENTS, DELETE_EVENTS } from './eventsConstant';

export function createEvent(event) {
  return {
    type: CREATE_EVENTS,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENTS,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENTS,
    payload: eventId,
  };
}
