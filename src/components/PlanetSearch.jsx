import NameFilter from './NameFilter';
import NumerFilter from './NumerFilter';
import DisplayFilters from './DisplayFilters';
import SortPlanet from './SortPlanet';
import '../styles/PlanetSearch.css';

function PlanetSeatch() {
  return (
    <section className="all-filters">
      <NameFilter />
      <div className="filters">

        <NumerFilter />
        <SortPlanet />
      </div>
      <DisplayFilters />

    </section>
  );
}

export default PlanetSeatch;
