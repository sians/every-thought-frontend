import { createSelector } from 'reselect'

export const getCollectionsEntities = createSelector([
  (state) => state.entities.collections,
],
  (entities) => entities
)

export const getListsEntities = createSelector([
  (state) => state.entities.lists,
],
  (entities) => entities
)

export const getThoughts = createSelector([
  (state) => state.entities.thoughts,
],
  (entities) => entities
)


// export const getUsersEntities = createSelector([
//   (state) => state.entities.users,
// ],
//   (entities) => entities
// )
