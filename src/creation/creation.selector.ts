import { createSelector } from '@ngrx/store';
import { Creation } from './creation';

function creationsFromAppState(state : any) : Creation[] {
  return state.creations
}

function creationsByCategoryFilter(creations : Creation[], props) : Creation[] {
  const category : String = props.category;
  if (category == null || category == '') {
    console.log('creationsByCategoryFilter called with no category');
    return creations;
  } else {
    return creations.filter((creation : Creation) => creation.category == category);
  }
}

export const selectCreationsByCategory = createSelector(
  creationsFromAppState,
  creationsByCategoryFilter
);


function creationsByCreatorId(creations: Creation[], props) : Creation[] {
  const creatorId : Number = props.creatorId;
  if (creatorId == null) {
    console.log('creationsByCreatorId called with now creatorId')
  } else {
    return creations.filter((creation : Creation) => creation.creator_id == creatorId)
  }
}

export const selectCreationsByCreatorId = createSelector(
  creationsFromAppState,
  creationsByCreatorId
);