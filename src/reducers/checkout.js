
const checkoutReducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
            return[...state, action.payload]
        case 'REMOVE':
            return {
                datas: [action.payload]
            }
        default:
            return {
                state
            };
    }
}

export default checkoutReducer;

