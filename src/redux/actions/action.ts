import {Action} from './types';
import {TripProperty} from '../../models/state';

export function toggleTripProperty (property: TripProperty): Action {
    return {
        type: 'toggleTripProperty',
        payload: {
            property
        }
    }
}
