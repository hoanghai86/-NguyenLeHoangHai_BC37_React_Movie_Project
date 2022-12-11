const { default: requester } = require("app/api");
const { apiPath } = require("app/apiPath");

export const getScheduleMovieCinema = async (maHeThongRap) => {
  const res = await requester({
    method: "GET",
    url: apiPath.SCHEDULE_CINEMAS + `?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
  });
  return res;
};

//export này tương đương export {danh sách hàm, biến...}
//import thì cũng phải có dấu ngoặc nhọn

//nếu export default không có dấu ngoặc nhọn thì bên import ko dấu ngoặc nhọn, và đổi tên thoải mái
