import NameFilter from './NameFilter';
import NumerFilter from './NumerFilter';
import DisplayFilters from './DisplayFilters';
import SortPlanet from './SortPlanet';

function PlanetSeatch() {
  return (
    <section>
      <NameFilter />
      <div>

        <NumerFilter />
        <SortPlanet />
      </div>
      <DisplayFilters />

    </section>
  );
}

export default PlanetSeatch;
