import {Action} from '../actions/types'
import * as Model from '../../models'

const defaultState: Model.Reducer1 = {
    field: true
}

export default (state = defaultState, action: Action): Model.Reducer1 => {
    switch (action.type) {
        case 'someAction1': {
            return {
                ...state,
                field: action.payload.field1
            }
        }
        case 'someAction2': {
            return {
                ...state,
                field: action.payload.field2
            }
        }
        default: {
            return state
        }
    }
}