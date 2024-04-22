import {  collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import { ADMINREJ, ADMINREQ, ADMINSUC, DELETEDATAREJ, DELETEDATAREQ, DELETEDATARES, GETDATAREJ, GETDATAREQ, GETDATARES, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, UPDATEDATAREJ, UPDATEDATAREQ, UPDATEDATARES } from '../Const';

// DATA GETTING FROM FIRESTORE *************************************************

export const getDataReq = () => {
    return {
      type: GETDATAREQ
    } 
  }
  export const getDataRes = (data) => {
    return {
      type: GETDATARES,
      payload: data
    }
  }
  export const getDataRej = (err) => {
    return {
      type: GETDATAREJ,
      payload: err
    }
  }
  
export const getData = () => {
  return (dispatch) => {
    dispatch(getDataReq());

    getDocs(collection(db, 'Products'))
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data);

        dispatch(getDataRes(data));
      })
      .catch((err) => {
        // Handle errors
        dispatch(getDataRej(err));
      });
  };
};

// DATA ADD FROM FIRESTORE *************************************************
export const adminReq = () => {
  return {
    type: ADMINREQ
  }
}
export const adminSuc = (data) => {
  return {
    type: ADMINSUC,
    payload: data
  }
}
export const adminRej = () => {
  return {
    type: ADMINREJ
  }
}

export const adminData = (data) => {
  return (dispatch) => {
    dispatch(adminReq());
    addDoc(collection(db, "Products"), data).then((res) => {
      // console.log(res.data);
      dispatch(getData(res.data));
    }).catch((err) => {
      dispatch(adminRej(err))
    })

  };
};

// DATA EDIT FROM FIRESTORE *************************************************

export const singleDataReq = () => {
  return {
    type: SINGLEDATAREQ
  }

}

export const singleDataRes = (data) => {
  return {
    type: SINGLEDATARES,
    payload: data
  }
}

export const singleDataRej = () => {
  return {
    type: SINGLEDATAREJ
  }
}

export const singleData = (id) => {
  return async dispatch => {
    dispatch(singleDataReq());

    const docRef = doc(db, "Products", `${id}`);
    // console.log("docRef",docRef);
    await getDoc(docRef)
      .then((single) => {
        if (single.exists()) {
          const singleData = { id: single.id, ...single.data() };
          console.log(singleData);
          dispatch(singleDataRes(singleData));
        } else {
          dispatch(singleDataRej("Document not found"));
        }
      })
      .catch((error) => {
        console.error('Fetch Single Record Error:', error);
        dispatch(singleDataReq(error.message));
      });
  };
};

// DATA UPDATE FROM FIRESTORE *************************************************

const updateDataReq = () => {
  return {
    type: UPDATEDATAREQ
  }
}

const updateDataRes = (id ,data) => {
  return {
    type: UPDATEDATARES,
    payload : data
  }
}

const updateDataRej = () => {
  return {
    type: UPDATEDATAREJ
  }
}
export const updateData = (id, data) => {
  return dispatch => {
    dispatch(updateDataReq());

    const updatedocc = doc(db,"Products", id)
    
    updateDoc(updatedocc,data).then(()=>{
      dispatch(getData());
    })
    .catch((err)=>{
      // console.log("uperr",error);
      dispatch(updateDataRej(err))
    })
  }
}

// DATA DELETE FROM FIRESTORE *************************************************


const deleteDataReq = () => {
  return {
    type: DELETEDATAREQ
  }
}

const deleteDataRes = (id) => {
  return {
    type: DELETEDATARES,
    payload:id
  }
}
const deleteDataRej = () => {
  return {
    type: DELETEDATAREJ
  }
}

export const deleteData = (id) =>{
  return(dispatch) =>{
    dispatch(deleteDataReq());

    const docdel = doc(db, "Products", id);

    deleteDoc(docdel).then(()=>{
      dispatch(deleteDataRes(id));
      dispatch(getData());
    }).catch((err)=>{
      // console.log("deleting",error);
      dispatch(deleteDataRej(err));
    })
  }
}