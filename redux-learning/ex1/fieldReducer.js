const INITIAL_STATE = { value: 'OPA' };


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return {
                value: action.payload
            }
        break;
        default:
            return state;
        break;
    }
}
