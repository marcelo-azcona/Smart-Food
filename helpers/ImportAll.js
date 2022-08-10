// To import all images from a folder

function importAllImagesFromFolder(route) {
  let images = {};
  route.keys().forEach((item) => {
    images[item.replace('./', '')] = route(item);
  });
  return images;
}

export default importAllImagesFromFolder;
