const INITIAL_STATE = { step: 1, number: 0 };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INC':
            return { ...state, number: state.number + state.step }
        break;

        case 'DEC':
            return { ...state, number: state.number - state.step }
        break;

        case 'STEP_CHANGED':
            return { ...state, step: +action.payload }
        break;

        default:
            return state;
        break;
    }
}
