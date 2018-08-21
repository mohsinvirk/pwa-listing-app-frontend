// POST_AD
import { GET_ERRORS, POST_AD, IS_LOADING, GET_ADS } from "./types";
// Register User
export const postAd = (formData, history) => dispatch => {
  fetch("http://localhost:8080/ads", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: POST_AD,
        payload: response
      });
      history.push("/dashboard");
    })
    .catch(error => {
      if (error) {
        dispatch({
          type: GET_ERRORS,
          payload: error
        });
      }
    });
};

export const getAds = () => dispatch => {
  dispatch(isLoading());
  fetch("http://localhost:8080/ads")
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: GET_ADS,
        payload: response
      });
    })
    .catch(error => {
      if (error) {
        dispatch({
          type: GET_ERRORS,
          payload: error
        });
      }
    });
};

// UPDATE_AD
export const putAd = payload => {
  return {
    type: "UPDATE_AD",
    payload
  };
};

//DELETE_AD
export const deleteAd = id => {
  return {
    type: "DELETE_AD",
    id
  };
};

// If Loading ads

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};
