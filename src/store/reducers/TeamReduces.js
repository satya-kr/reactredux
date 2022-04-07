const initialState = []; 

export const teamList = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":
            return [
                ...state,
                action.payload
            ];
        break;

        case "DELETE":
            //
        break;

        default:
            return state;
        break;
    }
}