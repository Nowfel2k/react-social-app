export const initialState = {
  user: {
    displayName: "Liven Navfal",
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ",
  },
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
