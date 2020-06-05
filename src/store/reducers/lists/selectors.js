import { createSelector } from "reselect";

import { getListsEntities } from "../entities/selectors"

export const getLists = createSelector(
    (state) => state.lists.lists,
    getListsEntities,
    (lists, entities) => lists.map((o) => entities[o])
  )

  export const makeGetList = () => (
    createSelector(
      getListsEntities,
      (_, listId) => listId,
      (entities, id) => entities[id]
    )
  )  

  export const getCreateListLoading = createSelector([
    (state) => state.lists.createListLoading
  ],
  (loading) => loading
  )
  
  export const getCreateListError = createSelector([
    (state) => state.lists.createListError
  ],
  (error) => error
  )
