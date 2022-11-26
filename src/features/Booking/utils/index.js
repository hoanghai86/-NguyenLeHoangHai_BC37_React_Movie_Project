//hàm cắt text khi text dài hơn 100 ký tự
export const truncateText = (text) => {
  if (text.length > 100) {
    return text.substring(0, 100) + "...";
  }
  return text;
};
