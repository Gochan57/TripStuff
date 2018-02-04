import {Action} from './types';
import {AppState} from '../../models/state';

export function someAction1 (): Action {
    return {
        type: 'someAction1',
        payload: {
            field1: true
        }
    }
}

export function someAction2 () {
    return (dispatch: (action: Action) => void, getState: () => AppState) => {
        dispatch({
            type: 'someAction2',
            payload: {
                field2: false
            }
        })
    }
}