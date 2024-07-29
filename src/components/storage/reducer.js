import { LOGIN, SIGNOUT } from "./constant";

const initialState={
    isLoggedIn:false,
    userId:'',
    email:''
}
export const SkyshipReducer=(state=initialState,action)=>{
switch (action.type) {
    case LOGIN:
        const {userId,email}=action.payload;
        return{
            ...state,
            isLoggedIn:true,    
        };
        case SIGNOUT:
        return{
            ...state,
            isLoggedIn:false,
        };          
    default:
        return state;
}

}