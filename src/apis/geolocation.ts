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

// const getCurrentPosition = () => {
//   const successCallback = (position: GeolocationPosition) => {
//     const { latitude, longitude } = position.coords;
//     setPosition({ latitude, longitude });
//   };

//   const errorCallback = () => {
//     alert("エラーが発生しました");
//   };

//   if (!navigator.geolocation) {
//     alert("ブラウザの位置情報機能をオンにしてください");
//   } else {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   }
// };
