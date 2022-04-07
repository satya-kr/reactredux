import axios from "axios";

export const getTeamList = () => {

    return async (dispatch) => {
        await axios.get(`http://loepalace.astergo.in/api/getServiceTeam`)
        .then(res => {
            // console.log(res.data);
            dispatch({
                type: 'GET',
                payload: res.data.data
            });
        }).catch(e => {
            console.log(e);
        });
    }
}


export const addNewTeam = data => {
    return async (dispatch) => {
        await axios.post(`http://loepalace.astergo.in/api/createServiceTeam`, data)
        .then(res => {

            
            dispatch({ 
                type: 'ADD',
                payload: res.data.data
            })
            // alert(res.data.msg);
        }).catch((err) => {
            console.log(err);
        });

        //dispatch to reducer
        
    }
}

export const editTeam = data => {
    return async (dispatch) => {
        await axios.post(`http://loepalace.astergo.in/api/createServiceTeam`, data)
        .then(res => {
            dispatch({ 
                type: 'EDIT',
                payload: res.data.data
            })
            // alert(res.data.msg);
        }).catch((err) => {
            console.log(err);
        });

        //dispatch to reducer
        
    }
}

export const deleteTeam = data => {
    return {
        type: 'DELETE',
        payload: data
    }
}

