const initialState = {
    isLoading: false,
    isSignUp: false,
    isLogin: false,
    user: null,
    err: null
}

export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case "USERCREATEREQ":
            return {
                ...state,
                isLoading: true
            };

        case "USERCREATERES":
            return {
                ...state,
                isLoading: false,
                isSignUp: true
            };

        case "USERCREATEREJ":
            return {
                ...state,
                isLoading: false,
                isSignUp: false,
                err: "something went wrong"
            };

        case "USERLOGINREQ":
            return {
                ...state,
                isLoading: true
            }

        case "USERLOGINRES":
            return {
                ...state,
                isLoading: false,
                isLogin:true
            }


        case "USERLOGINREJ":
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case "USERLOGOUTREQ" :
            return{
                ...state,
                isLoading:true
            }

        case "USERLOGOUTRES" :
            return{
                ...state,
                isLoading:false,
                isLogin:false,
                user:null
            }
        
        case "USERLOGOUTREJ" :
            return{
                ...state,
                isLoading:false
            }
        
            case "POPUPSIGNREQ" :
            return{
                ...state,
                isLoading:false
            }

            case "POPUPSIGNRES" :
            return{
                ...state,
                isLoading:false,
                user:action.payload,
                isLogin:true,
            }

            case "POPUPSIGNREJ" :
            return{
                ...state,
                isLoading:false,
                err:'server error'
            }

        default: return state;
    }

} 