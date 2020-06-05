import { createSelector } from "reselect";

import { getThoughtsEntities } from "../entities/selectors"

export const getThoughts = createSelector(
    (state) => state.thoughts.thoughts,
    getThoughtsEntities,
    (thoughts, entities) => thoughts.map((o) => entities[o])
  )

  export const makeGetThought = () => (
    createSelector(
      getThoughtsEntities,
      (_, thoughtId) => thoughtId,
      (entities, id) => entities[id]
    )
  )  

  export const getCreateThoughtLoading = createSelector([
    (state) => state.thoughts.createThoughtLoading
  ],
  (loading) => loading
  )
  
  export const getCreateThoughtError = createSelector([
    (state) => state.thoughts.createThoughtError
  ],
  (error) => error
  )
