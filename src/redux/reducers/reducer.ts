import {Action} from '../../models/actions'
import * as Model from '../../models'
import * as Default from '../../models/default'

const reducer = (state = Default.AppState, action: Action): Model.StuffState => {
    switch (action.type) {
        case 'setPacks': {
            return {
                ...state,
                packs: action.payload.packs
            }
        }
        case 'toggleTripProperty': {
            const group = action.payload.group
            return {
                ...state,
                packs: state.packs.map(pack => {
                    if (pack.group === group) {
                        return {
                            ...pack,
                            selected: !pack.selected
                        }
                    }
                    return pack
                })
            }
        }
    }
    return state
}

export default reducer