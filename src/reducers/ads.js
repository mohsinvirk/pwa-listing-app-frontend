import {
  POST_AD,
  GET_ADS,
  IS_LOADING,
  UPDATE_AD,
  DELETE_AD
} from "../actions/types";

// Ads Reducer
const initialState = {
  ads: [],
  ad: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_ADS:
      return {
        ...state,
        isLoading: false,
        ads: action.payload
      };

    case POST_AD:
      return {
        ...state,
        ads: [action.payload, ...state.ads]
      };
    case UPDATE_AD:
      let mappedads = state.ads.map(ad => {
        if (ad._id === action._id) {
          return (ad = action.payload);
        } else {
          return ad;
        }
      });
      return {
        ...state,
        ads: [...mappedads]
      };
    case DELETE_AD:
      let ads = state.ads.filter(({ _id }) => _id !== action._id);
      return {
        ...state,
        ads
      };
    default:
      return state;
  }
};
