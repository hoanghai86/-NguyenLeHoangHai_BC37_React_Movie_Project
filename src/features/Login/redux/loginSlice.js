import produce from "immer";
import actions from "./type";

//immutable: tính bất biến
const initialState = {
  profile: null,
};

//shallow comparison: so sánh nông
const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draff) => {
    switch (type) {
      case actions.SET_PROFILE:
        draff.profile = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;

/* immutable: tính bất biến (string, number, boolean...) */
