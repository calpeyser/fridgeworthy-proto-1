import { createAction, props } from '@ngrx/store'

import { PrimaryComment } from '../creation/creation'

export const add_dummy_comments = createAction(
    '[Comment Section] add dummy comments',
    props<{'creationId' : Number}>()
)

export const add_primary_comment = createAction(
    '[Comment Section] add primary comment',
    props<{'creationId' : Number, 'comment' : PrimaryComment}>()
)