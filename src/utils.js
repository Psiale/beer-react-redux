const getItemsFiltered = (arr, filter) => {
  if (filter === 'All') {
    return arr;
  }

  const rgx = new RegExp(filter, 'i');
  return arr.filter(beer => beer.name.match(rgx));
};

export default getItemsFiltered;
