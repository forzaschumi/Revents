import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetaiedHeader from './EventDetailedHeader';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSideBar from './EventDetailedSideBar';
import { useSelector } from 'react-redux';

export default function EventDetailedPage({ match }) {
  const { event } = useSelector((state) => state);
  console.log('===event', event.state.events);
  const findEventById = event.state.events.find(
    (e) => e.id === match.params.id
  );
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetaiedHeader event={findEventById} />
        <EventDetailedInfo event={findEventById} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* <EventDetailedSideBar attendees={event.state.events[0].attendees} /> */}
        {event.state &&
          event.state.events.map((attd) => (
            <EventDetailedSideBar attendees={attd.attendees} />
          ))}
      </Grid.Column>
    </Grid>
  );
}
