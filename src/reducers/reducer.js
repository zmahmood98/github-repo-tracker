const initState = { username: "", results: [], loading: false}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_REPOS':
            return { ...state, result: action.payload, loading: false};
        case 'SET_ERROR':
            return { ...state, error: action.payload};
        default: 
            return state; 
    };
};

export default reducer;
