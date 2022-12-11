import actions from "./type";
import produce from "immer";

const initialState = {
  banners: [], //backend trả về danh sách thì gán giá trị ban đầu là danh sách
  movies: {}, //trả về obj thì gán obj, trả về true false thì gán true false
  movieDetail: null, // undefined hoặc null
  movieDetailSchedule: null,
  cinemas: [],
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

      case actions.SET_MOVIE_DETAIL:
        draff.movieDetail = payload;
        break;

      case actions.SET_MOVIE_DETAIL_SCHEDULE:
        draff.movieDetailSchedule = payload;
        break;

        case actions.SET_CINEMAS:
          draff.cinemas = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;
