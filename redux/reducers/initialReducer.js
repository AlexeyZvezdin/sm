// import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const counterReducer = (
  state = { value: 0, city: {}, categories: {} },
  action
) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload };
    case 'INITIAL_CITY_STATE':
      return { ...state, city: action.payload.result };
    case 'CATALOG_STRUCTURE':
      return { ...state, catalogStructure: action.payload.result };
    case 'INITIAL_CATEGORIES':
      return { ...state, categories: action.payload.result };
    case 'INITIAL_PRODUCTS':
      return { ...state, products: action.payload };
    case 'INITIAL_BANNERS':
      return { ...state, banners: action.payload };
    case 'DISPATCH_CATEGORIES_WITH_MAIN':
      return { ...state, stickyTabs: action.payload };
    default:
      return { ...state };
  }
};

export default counterReducer;
