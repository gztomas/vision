export const MAX_SIZE = 500;

export default async function getImageDataFromUrl(url, callback) {
  /*
  Given a URL for an image, gets the binary data for the image. The binary data
  is passed to the provided callback function.

  Example usage:
  getImageDataFromUrl('http://my.image.jpg', function(blob) {
      const formData = new FormData();
      formData.append('image', blob);
      ...
  });

  from https://stackoverflow.com/a/39593964
  */
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = function (a) {
    const canvas = document.createElement("canvas");

    const maxSide = Math.max(img.width, img.height);
    let ratio = 1.0;
    if (maxSide > MAX_SIZE) {
      ratio = MAX_SIZE / maxSide;
    }

    canvas.width = img.width * ratio;
    canvas.height = img.height * ratio;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.drawImage(img, 0, 0, img.width * ratio, img.height * ratio);

    var dataURI = canvas.toDataURL("image/jpg");
      
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return callback(new Blob([ia], { type: mimeString }));
  }
  
  img.src = url;
}
  