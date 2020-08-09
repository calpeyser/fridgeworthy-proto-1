import { createAction, props } from '@ngrx/store'
import { Category } from '../creation/creation'

export const modify_creation = createAction(
    '[modify-creation-form] Modify Creation',
    props<{
        'youtubeId': String,
        'title': String,
        'description': String,
        'category': Category,
        'creatorId': Number,
        'creationId': Number
    }>())