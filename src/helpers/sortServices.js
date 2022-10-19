const sortByPopulationASC = (a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  const ONE_NEGATIVE = -1;
  const ONE_POSITIVE = 1;
  if (nameA < nameB) return ONE_NEGATIVE;
  if (nameA > nameB) return ONE_POSITIVE;
  return 0;
};

export default sortByPopulationASC;
