import { getBlobFromDataUrl } from "../utils";

/**
 * Since https://api.openvisionapi.com seems down, I prepared a docker image to
 * run it locally use `docker run -p 8000:8000 gztomas/ova-server`
 * @see https://hub.docker.com/r/gztomas/ova-server
 */
const BASE_URL = "http://localhost:8000/api/v1";

export const fetchDetections = async (dataUrl) => {
  const body = new FormData();
  body.append("model", "yolov4");
  body.append("image", getBlobFromDataUrl(dataUrl));
  const resDetection = await fetch(`${BASE_URL}/detection`, {
    method: "POST",
    body,
  });
  const detection = await resDetection.json();
  return detection.predictions;
};
