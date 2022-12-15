export const selectCategoriesMap = (state) => {
  console.log('selector fired')

  return state.category.categories.reduce((acc, category) => {
    const {title, items } = category
    acc[title.toLowerCase()] = items
    return acc
  }, {})
}
