import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import ResultTitle from '../../components/events/ResultTitle';
import { getFilteredEvents } from '../../dummy-data';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  // Check filterData exist
  if (!filterData) {
    return <h4 className='center'>Loading...</h4>;
  }

  // Extract data
  const filteredYear = filterData[0]; // string
  const filteredMonth = filterData[1]; // string

  // Convert to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // Check mis-typing in URL like year=abc
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalid filter. Please adjust your values.</ErrorAlert>;
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    );
  }

  const fitleredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // Valid filter, but no results found
  if (!fitleredEvents || fitleredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for the chosen filter.</ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    );
  }

  // Convert to Date format for Title
  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultTitle date={date} />
      <EventList items={fitleredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
