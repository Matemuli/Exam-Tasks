let imageIndex = 0;

function changeImage(step) {
  imageIndex += step;
  if (imageIndex > 1) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = 1;
  }

  document.getElementById("myImage").src = "photo" + (imageIndex + 1) + ".jpg";
}
