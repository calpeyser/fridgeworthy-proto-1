import { createSelector } from '@ngrx/store';
import { Creation, Category } from './creation';

function creationsFromAppState(state : any) : Creation[] {
  return state.creation.creations
}

function creationsByCategoryFilter(creations : Creation[], props) : Creation[] {
  const category : Category = props.category
  if (category == null) {
    console.log('creationsByCategoryFilter called with no category');
    return [];
  } else if (creations == null) {
    console.log('creationsByCategoryFilter called with null creations')
    return [];
  } else {
    var res = creations.filter((creation : Creation) => creation.category == category);
    return res
  }
}

export const selectCreationsByCategory = createSelector(
  creationsFromAppState,
  creationsByCategoryFilter
);


function creationsByCreatorId(creations: Creation[], props) : Creation[] {
  const creatorId : Number = props.creatorId;
  if (creatorId == null) {
    console.log('creationsByCreatorId called with no creatorId')
    return [];
  } else if (creations == null) {
    console.log('creationsByCreatorId called with null creations')
    return [];
  } else {
    return creations.filter((creation : Creation) => creation.creator_id == creatorId)
  }
}

export const selectCreationsByCreatorId = createSelector(
  creationsFromAppState,
  creationsByCreatorId
);

function creationById(creations: Creation[], props) : Creation {
  const creationId : Number = props.creationId;
  if (creationId == null) {
    console.log('creationById called with no creationId')
    return null
  } else if (creations == null)  {
    console.log('creationById called with null creations')
    return null
  } else {
    var res = creations.filter((creation : Creation) => creation.id == creationId)
    if (res.length == 0) {
      console.log('No creation found with ID ' + creationId)
      return null
    } else if (res.length > 1) {
      console.log('More than one creation found with ID ' + creationId)
      return null
    }
    return res[0]
  }
}

export const selectCreationById = createSelector(
  creationsFromAppState,
  creationById  
);