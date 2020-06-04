import { createSelector } from "reselect";

import { getCollectionsEntities } from "../entities/selectors"

export const getCollections = createSelector(
    (state) => state.collections.collections,
    getCollectionsEntities,
    (collections, entities) => collections.map((o) => entities[o])
  )

  export const makeGetCollection = () => (
    createSelector(
      getCollectionsEntities,
      (_, collectionId) => collectionId,
      (entities, id) => entities[id]
    )
  )  

  export const getCreateCollectionLoading = createSelector([
    (state) => state.collections.createCollectionLoading
  ],
  (loading) => loading
  )
  
  export const getCreateCollectionError = createSelector([
    (state) => state.collections.createCollectionError
  ],
  (error) => error
  )
