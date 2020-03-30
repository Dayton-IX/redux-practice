const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT': 
            return { ...state, counter: state.counter - 1 };
        case 'ADD': 
            return { ...state, counter: state.counter + action.payload.value };
        case 'SUBTRACT': 
            return { ...state, counter: state.counter - action.payload.value };
        case 'STORE_RESULT':
            return { ...state, results: state.results.concat({id: new Date(), value: state.counter}) };
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.payload.resultElId);
            return { ...state, results: updatedArray };
    }
    return state;
};

export default reducer;