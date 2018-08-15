import { POST_AD } from "../actions/types";

// Ads Reducer
const initialState = {
  ads: [],
  ad: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_AD:
      return {
        ...state,
        ads: [action.payload, ...state.ads]
      };
    case "DELETE_AD":
      return state.filter(({ id }) => id !== action.id);
    case "UPDATE_AD":
      return state.map(ad => {
        if (ad.id === action.id) {
          return {
            ...state,
            ...action.payload
          };
        } else {
          return state;
        }
      });
    case "GET_ADS":
      return state;
    default:
      return state;
  }
};
