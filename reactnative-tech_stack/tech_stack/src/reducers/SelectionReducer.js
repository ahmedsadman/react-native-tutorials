export default (state = null, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
