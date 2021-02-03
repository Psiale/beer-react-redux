export const getItemsFiltered = (arr, filter) => {
  if (filter === 'All') {
    return arr;
  }

  const rgx = new RegExp(filter, 'i');
  return arr.filter(beer => beer.name.match(rgx));
};

export const hideOnScroll = (prev, fn) => {
  // eslint-disable-next-line no-unused-expressions
  (window.scrollY > prev) ? fn(true) : fn(false);
};
