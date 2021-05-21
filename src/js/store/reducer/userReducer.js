const initialState = {
  user: null,
  isAuth: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_AUTHORIZED":
      return (state = { ...state, user: action.payload, isAuth: true });
    case "USER_UNAUTHORIZED":
      return (state = { user: null, isAuth: false });
    case "USER_REST":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
