import getImageDataFromUrl from "../utils";

export const fetchDetections = async (url) => {
  const body = new FormData();
  body.append("model", "yolov4");
  body.append(
    "image",
    await new Promise((resolve) => getImageDataFromUrl(url, resolve)),
    "blob.jpg"
  );
  const resDetection = await fetch("http://localhost:8000/api/v1/detection", {
    method: "POST",
    body,
  });
  const detection = await resDetection.json();
  return detection.predictions;
};
