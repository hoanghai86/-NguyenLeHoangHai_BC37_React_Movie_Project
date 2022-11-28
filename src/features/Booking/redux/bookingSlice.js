import actions from "./type";
import produce from "immer";

const initialState = {
  banners: [],
  movies: {},
};

//action đã dùng destructuring
const reducer = (state = initialState, { type, payload }) => {
  //   switch (type) {
  //     case actions.SET_BANNERS:
  //       state.banners = payload;
  //       return { ...state };
  //     default:
  //       return state;
  //   }

  //dùng thư viện immer để thoải mái chỉnh sửa state dựa vào bảng nháp draff
  return produce(state, (draff) => {
    switch (type) {
      case actions.SET_BANNERS:
        draff.banners = payload;
        break;

      case actions.SET_MOVIES:
        draff.movies = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;
