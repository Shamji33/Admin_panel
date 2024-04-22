import { ADMINREQ, ADMINSUC, ADMINREJ, CREATEEMP, SINGLEEMP, UPDATEEMP, DELETEEMP, GETDATAREQ, GETDATARES, GETDATAREJ, SINGLEDATAREJ, SINGLEDATARES, SINGLEDATAREQ, UPDATEDATAREQ, UPDATEDATAREJ, UPDATEDATARES, DELETEDATAREJ, DELETEDATAREQ, DELETEDATARES } from "../Const";


export const InitialState = {
  products: [],
  product: null,
  isLoading: false,
  err: null
};

export const ProductReducer = (state = InitialState, action) => {
  switch (action.type) {

    case GETDATAREQ:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case GETDATARES:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        err: null,
      };

    case GETDATAREJ:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };


    case ADMINREQ:
      return {
        ...state,
        isLoading: true,
        err: null
      };

    case ADMINSUC:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case ADMINREJ:

      return {
        ...state,
        isLoading: false,
        err: { msg: "Server is busy", status: 404 },
      };

    case SINGLEDATAREQ:
      return {
        ...state,
        isLoading: true,
      }

    case SINGLEDATARES:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        err: null,
      }

    case SINGLEDATAREJ:
      return {
        ...state,
        isLoading: false,
        error: "nodata",
      }

    case UPDATEDATAREQ:
      return {
        ...state,
        isLoading: true,
        err: null,
      };


    case UPDATEDATARES:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        err: null,
      };


    case UPDATEDATAREJ:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case DELETEDATAREQ:
      return {
        ...state,
        isLoading: true,
      };


    case DELETEDATARES:

      const updateProducts = state.products.filter((product) => product.id !== action.payload);
      return {
        ...state,
        products: updateProducts,
      }

    case DELETEDATAREJ:
      return {
        ...state,
        isLoading: false,
        err: 'something went'
      };


    default:
      return state;
  }
};