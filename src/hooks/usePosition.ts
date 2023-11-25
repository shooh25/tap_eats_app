import { useState } from "react";
import { defaultPosition } from "../utils/constants";

// 現在位置を取得
export const usePosition = () => {
  
  // 取得中のロード画面
  const [isFetchingPos, setIsFetchingPos] = useState<boolean>(false);

  // 位置情報 (初期値: 東京駅)
  const [position, setPosition] = useState<GeoResponse>(
    JSON.parse(
      sessionStorage.getItem("position") || JSON.stringify(defaultPosition)
    )
  );

  const getPosition = () => {
    setIsFetchingPos(true);

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
      setIsFetchingPos(false);
    };

    const errorCallback = () => {
      alert("エラーが発生しました");
      setPosition(defaultPosition);
    };

    if (!navigator.geolocation) {
      alert("ブラウザの位置情報機能をオンにしてください");
    } else {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  };

  return { position, isFetchingPos, getPosition };
};
