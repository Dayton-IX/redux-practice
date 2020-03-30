const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT': 
            return { counter: state.counter - 1 };
        case 'ADD': 
            return { counter: state.counter + action.payload.value };
        case 'SUBTRACT': 
            return { counter: state.counter - action.payload.value };
    }
    return state;
};

export default reducer;