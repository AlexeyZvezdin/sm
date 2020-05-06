export const splittedBanners = (filteredBanners) => {
  let bannersLength = filteredBanners.length;
  let newfilteredBanners = filteredBanners;
  const isEven = !(bannersLength % 2);
  let splittedBanners = [];
  if (isEven) {
    while (newfilteredBanners.length > 0) {
      let slicedArr = newfilteredBanners.splice(0, 4);
      splittedBanners.push(slicedArr);
    }
  } else {
    while (newfilteredBanners.length > 0) {
      let slicedArr = newfilteredBanners.splice(0, 3);
      splittedBanners.push(slicedArr);
    }
  }
  if (splittedBanners != []) return splittedBanners;
};
