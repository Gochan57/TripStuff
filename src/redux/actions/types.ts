import {TripProperty} from '../../models/state';
export type Action =
    {
        type: 'toggleTripProperty',
        payload: {
            property: TripProperty
        }
    }