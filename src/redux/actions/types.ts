export type Action =
    {
        type: 'someAction1',
        payload: {
            field1: boolean
        }
    } |
    {
        type: 'someAction2',
        payload: {
            field2: boolean
        }
    }