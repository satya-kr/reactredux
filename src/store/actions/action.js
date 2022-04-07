export const addNewTeam = data => {
    return (dispatch) => {
        dispatch({
            type: 'ADD',
            data: data
        })
    }
}

export const deleteTeam = data => {
    return {
        type: 'DELETE',
        data: data
    }
}
