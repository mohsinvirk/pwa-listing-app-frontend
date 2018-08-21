import { POST_AD, GET_ADS, IS_LOADING } from "../actions/types";

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
    case "DELETE_AD":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
