import { authActionTypes } from "./actionType";

// const URL = process.env.REACT_APP_URL_DEV;
// axios.defaults.baseURL = URL;

// console.log(URL);

export const registerUser = (Cred) => async(dispatch) => {
    console.log(Cred, "cred")
    try {
        dispatch({type: authActionTypes.REGISTER_REQUEST})
        let response = await axios.post("http://localhost:8080/user/signup", Cred);
        console.log(response);
        if(response.data){
            dispatch({type: authActionTypes.REGISTER_SUCCESS, payload: response.data.message})
        }
    } catch (error) {
        dispatch({type: authActionTypes.REGISTER_FAILURE});
    }
}
export const authenticate = (loginCred) => async(dispatch) => {
    console.log(loginCred, "cred")
    try {
        dispatch({type: authActionTypes.LOGIN_REQUEST})
        let response = await axios.post("http://localhost:8080/user/login", loginCred);
        console.log(response);
        if(response.data.token){
            dispatch({type: authActionTypes.LOGIN_SUCCESS, payload: response.data.token})
        }
        localStorage.setItem("token", response.data.token);

    } catch (error) {
        dispatch({type: authActionTypes.LOGIN_FAILURE});
    }
}
