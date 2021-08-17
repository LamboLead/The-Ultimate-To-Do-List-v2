import BackgroundManager from '../background-manager.js';

/**
 * Sets the specified image as background and shows its metadata
 * @function setBackgroundImage
 * @param {Object} backgroundImage Background image. Know more in {@link BackgroundImage}
 */
export function setBackgroundImage(backgroundImage) {
  let body = document.querySelector("body");

  setAnimation(backgroundImage.animation);
  body.style.setProperty("background-image", `url(${backgroundImage.src})`);
  showMetaData(backgroundImage.user);
}

/**
 * Sets the specified animation to the body
 * @function setAnimation
 * @param {string} imgAnimation Specified animation to set
 */
export function setAnimation(imgAnimation) {
  let animationMode = BackgroundManager.animations;
  let body = document.querySelector("body");

  if (!animationMode) {
    imgAnimation = "animations-disabled";
  }

  body.style.setProperty("animation-name", imgAnimation);
}

/**
 * Shows the specified photo's metadata into the page
 * @function showMetaData
 * @param {{userName: string, userProfile: string}} userInfo Information of the user who took the photo
 */
function showMetaData(userInfo) {
  // ...Still in progress...
}
