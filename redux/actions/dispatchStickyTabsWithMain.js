export const dispatchCategoriesWithMain = (stickyTabsWithMain, stickyTabs) => {
  return {
    type: 'DISPATCH_CATEGORIES_WITH_MAIN',
    payload: { stickyTabsWithMain, stickyTabs },
  };
};
