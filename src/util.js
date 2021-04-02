//* Utility function that receives a url to an image on rawg.io and returns a url to a smaller img
//! uses width for size, so 1280 for a 720p image
export const resizeImage = (imagePath, size) => {
  // console.log(imagePath);
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
      : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
    return image;
  }
};
