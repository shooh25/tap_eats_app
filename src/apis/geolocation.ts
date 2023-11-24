// 現在位置を取得
export const getPosition = (
  successCallback: (position: GeolocationPosition) => void,
  errorCallback: () => void
) => {
  if (!navigator.geolocation) {
    alert("ブラウザの位置情報機能をオンにしてください");
  } else {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
};

