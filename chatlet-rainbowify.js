// i just made this in chatgpt
// i didnt wanna do allat

// Define the rainbow colors in hue values
const rainbowHues = [
  0,         // Red
  60,        // Yellow
  120,       // Green
  180,       // Cyan
  240,       // Blue
  300        // Magenta
];

// Convert hue value to hex code
function hueToHex(hue) {
  const saturation = 100;  // Set saturation to 100%
  const lightness = 50;    // Set lightness to 50%

  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;

  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs((h * 6) % 2 - 1));
  const m = l - chroma / 2;

  let red, green, blue;
  if (h >= 0 && h < 1 / 6) {
    red = chroma;
    green = x;
    blue = 0;
  } else if (h >= 1 / 6 && h < 2 / 6) {
    red = x;
    green = chroma;
    blue = 0;
  } else if (h >= 2 / 6 && h < 3 / 6) {
    red = 0;
    green = chroma;
    blue = x;
  } else if (h >= 3 / 6 && h < 4 / 6) {
    red = 0;
    green = x;
    blue = chroma;
  } else if (h >= 4 / 6 && h < 5 / 6) {
    red = x;
    green = 0;
    blue = chroma;
  } else {
    red = chroma;
    green = 0;
    blue = x;
  }

  const rgbToHex = (component) => {
    const hex = Math.round((component + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexR = rgbToHex(red);
  const hexG = rgbToHex(green);
  const hexB = rgbToHex(blue);

  return `#${hexR}${hexG}${hexB}`;
}

// Smoothly transition between two colors
function smoothTransition(startHue, endHue, duration) {
  const startColor = hueToHex(startHue);
  const endColor = hueToHex(endHue);

  let currentTime = 0;
  const interval = 10; // Update color every 10 milliseconds (adjust as desired)

  const timer = setInterval(() => {
    currentTime += interval;
    if (currentTime >= duration) {
      clearInterval(timer);
    }

    const progress = currentTime / duration;
    const currentHue = startHue + (endHue - startHue) * progress;
    const currentColor = hueToHex(currentHue);
    chatlet.set('profileColor', currentColor);
  }, interval);
}

// Iterate through the rainbow colors with smooth transitions
let index = 0;
setInterval(() => {
  const startHue = rainbowHues[index];
  const endHue = rainbowHues[(index + 1) % rainbowHues.length];
  smoothTransition(startHue, endHue, 1000); // Transition duration: 1000 milliseconds
  index = (index + 1) % rainbowHues.length;
}, 1000); // Change color every 1 second (adjust as desired)
