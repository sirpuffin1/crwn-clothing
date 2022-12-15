import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log('category selector fired')

    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  }
);
