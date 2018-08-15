// POST_AD
import { GET_ERRORS, POST_AD } from "./types";
// Register User
export const postAd = (data, history) => dispatch => {
  var url = "http://localhost:8080/ads";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: POST_AD,
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

// GET_ADS
export const getAds = () => {
  return {
    type: "GET_ADS"
  };
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
