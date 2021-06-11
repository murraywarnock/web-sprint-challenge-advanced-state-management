import axios from 'axios';

export const START_FETCH_SMURF = "START_FETCH_SMURF";
export const SUCCESS_FETCH_SMURF = "SUCCESS_FETCH_SMURF";
export const FAIL_FETCH_SMURF = "FAIL_FETCH_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_VALUE_TO_ERROR_MESSAGE = "ADD_VALUE_TO_ERROR_MESSAGE";


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
    return (dispatch) => {
        //1. Fetch_Start
        dispatch(fetchStart());
        
        //2. fetch data from api
        axios.get("http://localhost:3333/smurfs") 
        .then(resp => {
            // console.log(resp)
            //3. if fetch is successful, Fetch_Success with that data           
           dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
            //4. if fetch is not successful, Fetch_Fail with error message
            // console.log("Error sent by dispatch fetchFail: ", err);
            dispatch(fetchFail(err));
        });

    }
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload:smurf});
}

export const fetchStart = ()=> {
    return({type: START_FETCH_SMURF});
}

export const fetchSuccess = (smurfs)=> {
    return({type: SUCCESS_FETCH_SMURF, payload:smurfs});
}

export const fetchFail = (err)=> {
    return({type: FAIL_FETCH_SMURF, payload:err});
}