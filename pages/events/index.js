import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const router = useRouter();

  const events = getAllEvents();

  // Navigate to the Filter Page
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
