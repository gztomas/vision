export const MAX_SIZE = 500;

/**
 * Convert base64/URLEncoded data component to raw binary data held in a string
 */
export function getBlobFromDataUrl(url) {
  var byteString;
  if (url.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(url.split(",")[1]);
  else byteString = unescape(url.split(",")[1]);

  // separate out the mime component
  var mimeString = url.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

/**
 * Convert image url to base64/URLEncoded data component
 */
export async function fetchDataUrl(url) {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");

  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxSide = Math.max(img.width, img.height);
      let ratio = 1.0;
      if (maxSide > MAX_SIZE) {
        ratio = MAX_SIZE / maxSide;
      }
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, img.width * ratio, img.height * ratio);
      }
      resolve(canvas.toDataURL("image/jpg"));
    };
    img.src = url;
  });
}
