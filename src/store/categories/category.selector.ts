import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { CategoryItem } from "./category.types";

const selectCategoryReducer = (state): CategoriesState => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as Record<string, CategoryItem[]>)
);
