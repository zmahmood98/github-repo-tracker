const initState = { username: "" }

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOAD_REPOS':
            return { ...state, username: action.payload};
        case 'SET_ERROR':
            return { ...state, error: action.payload};
        default: 
            return state; 
    };
};

export default reducer;
