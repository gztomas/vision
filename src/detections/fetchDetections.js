import { getBlobFromDataUrl } from "../utils";

export const fetchDetections = async (dataUrl) => {
  const body = new FormData();
  body.append("model", "yolov4");
  body.append("image", getBlobFromDataUrl(dataUrl));
  const resDetection = await fetch("http://localhost:8000/api/v1/detection", {
    method: "POST",
    body,
  });
  const detection = await resDetection.json();
  return detection.predictions;
};
