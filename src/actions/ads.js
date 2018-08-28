// POST_AD
import {
  GET_ERRORS,
  POST_AD,
  IS_LOADING,
  GET_ADS,
  UPDATE_AD,
  DELETE_AD
} from "./types";
// Register User
export const postAd = (formData, history) => dispatch => {
  fetch("https://olx-backend.herokuapp.com/ads", {
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
  fetch("https://olx-backend.herokuapp.com/ads")
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
export const putAd = (data, _id, avatar, fEmail) => dispatch => {
  console.log(data);
  fetch(`https://olx-backend.herokuapp.com/ads/${_id}`, {
    method: "PUT",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: UPDATE_AD,
        payload: response,
        _id
      });
      if (response.favorite === true && response.fEmail === fEmail) {
        caches.open(`${response._id}`).then(cache => {
          return cache.addAll([
            `/listings/${response._id}`,
            `https://olx-backend.herokuapp.com/${response.file}`,
            `${avatar}`
          ]);
        });
      }
    })
    .catch(error => {
      console.log(error);
      if (error) {
        dispatch({
          type: GET_ERRORS,
          payload: error
        });
      }
    });
};

//DELETE_AD
export const deleteAd = (formData, history, _id) => dispatch => {
  fetch(`https://olx-backend.herokuapp.com/ads/${_id}`, {
    method: "DELETE",
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: DELETE_AD,
        _id
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

// If Loading ads

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};
