import getImageDataFromUrl from "../utils";

export const fetchDetections = async (url) => {
  // const resDetection = await fetch(
  //   "https://api.openvisionapi.com/api/v1/detection",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "multipart/form-data; boundary=---BOUNDARY",
  //     },
  //     body: new URLSearchParams({
  //       model: "yolov4",
  //       image: `,
  //     }),
  //   }
  // );
  // const detection = await resDetection.json();
  const data = await new Promise((resolve) =>
    getImageDataFromUrl(url, resolve)
  );
  console.log(data);
  return [{ label: "dog", rect: { x1: 20, x2: 100, y1: 20, y2: 100 } }];
};
