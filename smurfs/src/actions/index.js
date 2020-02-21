import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const FETCH_POSTS = "FETCH_POSTS";

export const getData = () => dispatch => {
dispatch({ type: FETCH_DATA})
axios
.get('http://localhost:3333/smurfs')
.then( res => {
    console.log("smurfs", res.data)
    dispatch ({type: UPDATE_SMURF, payload: res.data})
})
.catch(error => console.log("Something happened fetching data", error))
}

