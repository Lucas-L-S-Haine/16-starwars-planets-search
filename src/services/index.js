const filterPlanets = (planetList, filters) => {
  const { name } = filters.filterByName;
  return planetList
    .filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));
};

const removeUsedColumns = (columns, filters) => {
  const remainingColumns = [];
  const { filterByNumericValues } = filters;
  filterByNumericValues
    .forEach(({ column }) => {
      if (columns.includes(column)) {
        remainingColumns.concat(column);
        // const index = columns.indexOf(column);
        // (columns.slice(0, index).concat(columns.slice(index + 1)));
        console.log('ja foi adicionado');
        console.log(remainingColumns);
      }
      // console.log(column);
    })
  return columns;
};

  /*   useEffect(() => {
    const filteredPlanets = data
      .filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
    let planetList = filteredPlanets;
    filters.filterByNumericValues.forEach(({
      comparison, column, value,
    }) => {
      if (comparison === 'maior que') {
        planetList = planetList.filter((planet) => planet[column] > Number(value));
      }
      if (comparison === 'menor que') {
        planetList = planetList.filter((planet) => planet[column] < Number(value));
      }
      if (comparison === 'igual a') {
        planetList = planetList.filter((planet) => planet[column] === (value));
      }
      return planetList;
    });
    setFilteredData(planetList);
  }, [data, filters]); */

export { filterPlanets, removeUsedColumns };