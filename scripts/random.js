// arrays from which to select random values

// Background Images
const backgroundImages = [
  'art/lake_mansfield.jpg',
  'art/through_a_willow.jpg',
  'art/midwinter.jpg',
  'art/fall_footbridge.jpg',
  'art/boston_nightscape.jpg',
  'art/salt-pond.jpg',
  'art/moody_st.jpg',
  'art/riparian_balcony.jpg'
];

// Google fonts
const googleFonts = [
  { name: 'Roboto', family: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' },
  { name: 'Open Sans', family: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' },
  { name: 'Lato', family: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap' },
  { name: 'Raleway', family: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap' },
  { name: 'Playfair Display', family: 'serif', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap' },
  { name: 'Mukta', family: 'sans-serif', url: 'https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap' },
  { name: 'Lora', family: 'serif', url: 'https://fonts.googleapis.com/css2?family=Lora&display=swap' }
];




/* FUNCTIONS */
// random item from any array
const getRandomItem = array => {
  if (array && array.length > 0) {
    const r = Math.floor(Math.random() * array.length);
    return array[r];
  }
  return null;
}

// background-image url
const getBackgroundImageUrl = (img, height) => {
  return `https://res.cloudinary.com/cantimaginewhy/image/upload/c_scale,h_${height}/${img}`;
}

// random background image
const getRandomBackgroundUrl = (height = 600) => {
  const bkg = getRandomItem(backgroundImages);
  return getBackgroundImageUrl(bkg, height);
}

const getRandomFont = () => {
  return getRandomItem(googleFonts);
}

const getRandomFontWeight = () => {
  return (Math.floor(Math.random() * 8) + 1) * 100;
}

const rgbRand = () => {
  return Math.floor(Math.random() * 256);
}

const getRandomColor = () => {
  const r = rgbRand();
  const g = rgbRand();
  const b = rgbRand();
  return `rgb(${r}, ${g}, ${b})`;
}

module.exports = {
  getRandomBackgroundUrl,
  getRandomFont,
  getRandomFontWeight,
  getRandomColor
};