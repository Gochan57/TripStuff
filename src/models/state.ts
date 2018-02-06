export interface AppState {
    state: Reducer
}

export interface Reducer {
    tripProperties: TripProperty[]
}

export type TripProperty = 'airplane' | 'sea' | 'skiing'