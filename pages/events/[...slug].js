import { useRouter } from 'next/router';

const FilteredEventsPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h2>FilteredEventsPage</h2>
    </div>
  );
};

export default FilteredEventsPage;
