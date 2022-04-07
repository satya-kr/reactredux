const initialState = []; 

const TeamReduces = (state = initialState, action) => {
    switch(action.type) {
        
        case "GET":
            return action.payload;
        break;
        
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

export default TeamReduces;