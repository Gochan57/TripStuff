import {Action} from '../actions/types'
import * as Model from '../../models'

const defaultState: Model.Reducer = {
    tripProperties: []
}

export default (state = defaultState, action: Action): Model.Reducer => {
    switch (action.type) {
        case 'toggleTripProperty': {
            const property = action.payload.property
            if (!!state.tripProperties.find(p => p === property)) {
                return {
                    tripProperties: state.tripProperties.filter(p => p !== property),
                }
            }
            else {
                return {
                    tripProperties: [
                        ...state.tripProperties,
                        property
                    ]
                }
            }
        }
        default: {
            return state
        }
    }
}