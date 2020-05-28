export default function sortWithSortIndex(arrayToSort) {
  return arrayToSort
    .sort((first, second) => first.sortIndex - second.sortIndex)
    .map((category) => category.id);
}
