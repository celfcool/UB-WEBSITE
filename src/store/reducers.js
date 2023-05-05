const initialState = {
  data: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_HERO_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default rootReducer;
