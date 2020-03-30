import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return { ...state, results: state.results.concat({id: new Date(), value: action.payload.result}) };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.payload.resultElId);
            return { ...state, results: updatedArray };
    }
    return state;
};

export default reducer;