import NameFilter from './NameFilter';
import NumerFilter from './NumerFilter';
import DisplayFilters from './DisplayFilters';

function PlanetSeatch() {
  return (
    <section>
      <NameFilter />
      <div>

        <NumerFilter />
      </div>
      <DisplayFilters />

    </section>
  );
}

export default PlanetSeatch;
