import { Action, createReducer, on } from '@ngrx/store';
import * as AppRootActions from '../app/app.actions';
import * as CommentSectionActions from '../comment-section/comment-section.actions'
import * as PrimaryCommentActions from '../primary-comment/primary-comment.actions'

import { Creation, State, initialState, PrimaryComment } from './creation';
import { SILLY_ANIMATION_VIDEOS } from './silly_animation_videos';

function addDummyCommentsHandler(state, props) {
  var comment1 : PrimaryComment = {
    comment : {
      author: 'author1',
      content: 'I think such and such',
    },
    replies: [],
  };
  var comment2 : PrimaryComment = {
    comment : {
      author: 'author2',
      content: 'oh yea? well that is crazy',
    },
    replies: [{
      author: 'author3',
      content: 'Yea, you\'re nuts',
    }, {
      author: 'author4',
      content: 'Guys, give him a break.'
    }],
  };
  var comment3 : PrimaryComment = {
    comment : {
      author: 'author1',
      content: 'I still think such and such',
    },
    replies: [],
  };

  var creations : Creation[] = state.creations
  return { creations: creations.map(creation => {
    if (creation.id == props.creationId) {
      var updated : Creation = {
        id: creation.id,
        title: creation.title,
        creator_id: creation.creator_id,
        youtube_id: creation.youtube_id,
        description: creation.description,
        category: creation.category,
        comments: [comment1, comment2, comment3],
      }
      return updated
    } else {
      return creation
    }})
  }
}

function addPrimaryCommentHandler(state, props) {
  var creations : Creation[] = state.creations
  return { creations : creations.map(creation => {
    if (creation.id == props.creationId) {
      var updated : Creation = {
        id: creation.id,
        title: creation.title,
        creator_id: creation.creator_id,
        youtube_id: creation.youtube_id,
        description: creation.description,
        category: creation.category,
        comments: creation.comments.concat([props.comment])
      }
      return updated
    } else {
      return creation
    }})
  }
}

function addReplyHandler(state, props) {
  var creations : Creation[] = state.creations
  return { creations : creations.map(creation => {
    if (creation.id == props.creationId) {
      var updatedComments : PrimaryComment[] = creation.comments.map((comment, index) => {
        if (index == props.primaryCommentIndex) {
          var updatedComment : PrimaryComment = {
            comment: comment.comment,
            replies: comment.replies.concat([props.reply])
          }
          return updatedComment
        } else {
          return comment
        }
      })

      var updated : Creation = {
        id: creation.id,
        title: creation.title,
        creator_id: creation.creator_id,
        youtube_id: creation.youtube_id,
        description: creation.description,
        category: creation.category,
        comments: updatedComments
      }
      return updated
    } else {
      return creation
    }
  })}
}


const appRootReducer = createReducer(
  initialState,
  on(AppRootActions.initialize_state, state => ({ creations: SILLY_ANIMATION_VIDEOS })),
  on(CommentSectionActions.add_dummy_comments, addDummyCommentsHandler),
  on(CommentSectionActions.add_primary_comment, addPrimaryCommentHandler),
  on(PrimaryCommentActions.add_reply, addReplyHandler),
);

export function reducer(state: State | undefined, action: Action) {
  return appRootReducer(state, action)
}