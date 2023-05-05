import axios from "axios";

export const fetchHero = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/hero`);
      const data = response.data;
      dispatch({ type: "FETCH_HERO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_HERO_ERROR", error });
    }
  };
};
