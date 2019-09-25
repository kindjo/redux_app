const initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADDITION':
            return {
                ...state,
                counter: state.counter + 10
            }
        case 'SUBTRACTION':
            return {
                ...state,
                counter: state.counter - 15
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const id = 2;
            const newArray = [...state.results]
            newArray.splice(id, 1)    
            return{
                ...state,
                results: newArray
                }
        
        default:
            return state;
        
    }
};

export default reducer;