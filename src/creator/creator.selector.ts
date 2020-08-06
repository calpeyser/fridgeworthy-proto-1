import { createSelector } from '@ngrx/store';
import { Creator } from './creator';

function creatorsFromAppState(state : any) : Creator[] {
    return state.creator.creators
}

function creatorById(creators: Creator[], props) : Creator {
    const creatorId : Number = props.creatorId;
    if (creatorId == null) {
      console.log('creatorById called with no creatorId')
      return null
    } else if (creators == null)  {
      console.log('creatorById called with null creators')
      return null
    } else {
      var res = creators.filter((creator : Creator) => creator.id == creatorId)
      if (res.length == 0) {
        console.log('No creator found with ID ' + creatorId)
        return null
      } else if (res.length > 1) {
        console.log('More than one creator found with ID ' + creatorId)
        return null
      }
      return res[0]
    }
  }
  
  export const selectCreationById = createSelector(
    creatorsFromAppState,
    creatorById  
  );
