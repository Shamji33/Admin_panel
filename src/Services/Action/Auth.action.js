import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import { authUser,provider } from "../../FirebaseConfig";

const userCreateReq = () =>{
    return{
        type :"USERCREATEREQ"
    }
}

const userCreateRes = () =>{
    return{
        type:"USERCREATERES"
    }
}
const userCreateRej =()=>{
    return{
        type:"USERCREATEREJ"
    }
}

const userLoginReq = () =>{
    return{
        type:"USERLOGINREQ"
    }
}
const userLoginRes = () =>{
    return{
        type:"USERLOGINRES"
    }
}
const userLoginRej = (error)=>{
    return{
        type:"USERLOGINREJ",
        payload: error
    }
}
const userLogoutReq = () =>{
    return{
        type:"USERLOGOUTREQ"
    }
}
const userLogoutRes = () =>{
    return{
        type:"USERLOGOUTRES"
    }
}
const userLogoutRej = () =>{
    return{
        type:"USERLOGOUTREJ"
    }
}

const popupSignReq=()=>{
    return{
        type:"POPUPSIGNREQ"
    }
}
const popupSignRes=(data)=>{
    return{
        type:"POPUPSIGNRES",
        payload:data
    }
}
const popupSignRej=()=>{
    return{
        type:"POPUPSIGNREJ"
    }
}

export const userCreate = (email, password) => {
    return async dispatch => {
        
        dispatch(userCreateReq());

        await createUserWithEmailAndPassword(authUser, email, password)
            .then((res) => {
            
                console.log("user>>>>", res.user);
                dispatch(userCreateRes());
            })
            .catch((err) => {
                console.log("something went wrong", err);
                dispatch(userCreateRej());
            });
    };
};

export const userLogin = (email, password) =>{
    return async dispatch =>{
        dispatch(userLoginReq());
        await signInWithEmailAndPassword(authUser, email, password).then((userCredential)=>{
            console.log("user>>",userCredential);
            dispatch(userLoginRes());
            
        }).catch((error)=>{

            let err = null;
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log("err",error.code);

            if("auth/invalid-credential" == errorCode){
                err = "Email does not Exist / User Not Found"
            }

            dispatch(userLoginRej(err));

        })  

    }
}

export const userLogout = () =>{
    return async dispatch =>{
        dispatch(userLogoutReq());

        await signOut(authUser).then((res)=>{
            dispatch(userLogoutRes());

        }).catch((err)=>{
            console.log("err",err);
            dispatch(userLogoutRej())
        })
    }
}

export const googleSignIn =()=>{

    return async dispatch =>{
         dispatch(popupSignReq());

         await signInWithPopup(authUser,provider).then((res)=>{
            console.log(res.user);

            const userData = {
                name: res.user.displayName,
                email:res.user.email,
                photoURL : res.user.photoURL,

            }

            dispatch(popupSignRes(userData));
         }).catch((err)=>{
            console.log(err);

            dispatch(popupSignRej());
         })



    }

}