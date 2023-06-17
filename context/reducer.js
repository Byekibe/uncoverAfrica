const Reducer = (state,  action) => {
    let key = action.key;
    switch (action.type) {
        case 'SET':
            return {
                ...state,
               [key]: action.payload
            };

        case 'OVERRIDE':
            return {
                ...state,
               ...action.payload
            };
        case 'DEL':
            const { [key]: foo, ...rest } = state;
            state = rest;
            return state;
        default:
            return state;
    }
};

export default Reducer;
